import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Z0 - Modern Bot Platform",
		short_name: "Z0",
		description:
			"Platform bot modern dengan fitur lengkap untuk kelola grup Telegram Anda",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/logo.svg",
				sizes: "192x192",
				type: "image/svg+xml",
				purpose: "any",
			},
			{
				src: "/logo.svg",
				sizes: "512x512",
				type: "image/svg+xml",
				purpose: "any",
			},
			{
				src: "/logo.svg",
				sizes: "512x512",
				type: "image/svg+xml",
				purpose: "maskable",
			},
		],
	};
}
