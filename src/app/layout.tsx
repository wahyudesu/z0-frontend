import type { Metadata } from "next";
import { Albert_Sans, Work_Sans } from "next/font/google";
import Navbar from "@/app/(home)/navbar/navbar";

import "./globals.css";

const workSans = Work_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const albertSans = Albert_Sans({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Wawww chatbot",
	description: "Fill your group with fun features chatbot",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body
				className={`${workSans.variable} ${albertSans.variable} antialiased`}
			>
				<Navbar />
				{children}
				{/* <StickyFooter /> */}
			</body>
		</html>
	);
}
