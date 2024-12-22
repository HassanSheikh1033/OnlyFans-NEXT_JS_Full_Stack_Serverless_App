import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "next-cloudinary/dist/cld-video-player.css";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/Footer";
import TanStackProvider from "@/providers/TanStackProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "OnlyFans - E-commerce Store",
	description:
		"OnlyFans is a platform for products lovers which includes a wide range of exclusive content and products.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<div className='h-screen flex flex-col'>
						<div className='flex-1'>
							<TanStackProvider>{children}</TanStackProvider>
						</div>
						<Footer />
					</div>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
