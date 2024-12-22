import UnderlinedText from "@/components/decorators/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "Exclusive Deals",
		description:
			"Access special discounts and offers only available to our valued customers.",
		image: "/gifs/gif1.gif",
	},
	{
		title: "Personalized Recommendations",
		description:
			"Stay updated with the latest products as soon as they hit the store.",
		image: "/gifs/gif2.gif",
	},
	{
		title: "Fast Shipping",
		description: "Receive your orders quickly with our efficient shipping options.",
		image: "/gifs/gif3.gif",
	},
];

const featureList: string[] = [
	"Exclusive Deals",
	"New Arrivals Alerts",
	"Personalized Recommendations",
	"24/7 Customer Support",
	"Easy Returns",
	"Fast Shipping",
];

const Features = () => {
	return (
		<section className='container py-24 sm:py-32 space-y-8'>
			<h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
				Many <UnderlinedText className='underline-offset-8'>OnlyFans</UnderlinedText> Features 
			</h2>

			<div className='flex flex-wrap md:justify-center gap-4'>
				{featureList.map((feature) => (
					<div key={feature}>
						<Badge className='text-sm rounded-full' variant={"secondary"}>
							{feature}
						</Badge>
					</div>
				))}
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{features.map(({ title, description, image }) => (
					<Card key={title} className='flex flex-col'>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter className='mt-auto'>
							<img
								src={image}
								alt='Feature Item'
								className='rounded w-[250px] h-32 lg:w-[300px]  mx-auto z-0 select-none pointer-events-none'
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
export default Features;
