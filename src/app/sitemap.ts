import type { MetadataRoute } from "next";
import communityData from "@/app/community/community.json";

type CommunityData = {
	categories: Array<{
		slug: string;
		title: string;
	}>;
};

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://z0.dev";
	const data = communityData as CommunityData;

	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: `${baseUrl}/pricing`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/resources`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
	];

	// Community pages
	const communityPages: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}/community`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.95,
		},
		...data.categories.map((category) => ({
			url: `${baseUrl}/community/${category.slug}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.85,
		})),
	];

	return [...staticPages, ...communityPages];
}
