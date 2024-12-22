"use server";

import prisma from "@/db/prisma";
import { stripe } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createCheckoutSessionAction({ productId, size }: { productId: string; size: string }) {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) throw new Error("Unauthorized - you must be logged in to purchase products");

	const product = await prisma.product.findUnique({ where: { id: productId } });

	if (!product) throw new Error("Product not found");

	const order = await prisma.order.create({
		data: {
			userId: user.id,
			productId: product.id,
			price: product.price,
			size,
		},
	});

	// it's gonna prefill the email for the user
	const customer = await stripe.customers.create({
		email: user.email!,
	});

	// Get base URL with fallback
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
		(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: [
			{
				price_data: {
					currency: "usd",
					product_data: {
						name: product.name,
						images: [product.image],
					},
					unit_amount: product.price,
				},
				quantity: 1,
			},
		],
		metadata: {
			orderId: order.id,
			size,
		},
		mode: "payment",
		success_url: `${baseUrl}/purchase-success?orderId=${order.id}`,
		cancel_url: `${baseUrl}/merch/${product.id}`,
		shipping_address_collection: {
			allowed_countries: ["US"],
		},
		customer: customer.id,
		// expires at 30 minutes(min value is 30 minutes)
		expires_at: Math.floor(Date.now() / 1000) + 60 * 30,
	});

	if (!session.url) {
		throw new Error("Failed to create checkout session URL");
	}

	return { url: session.url };
}