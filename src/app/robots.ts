import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/", "/_next/", "/private/"],
			},
			{
				userAgent: "Googlebot",
				allow: ["/", "/community/**"],
				disallow: ["/api/", "/admin/", "/_next/"],
			},
		],
		sitemap: "https://z0.dev/sitemap.xml",
		host: "https://z0.dev",
	};
}
