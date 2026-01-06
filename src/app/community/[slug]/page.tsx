import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import communityData from "@/app/community/community.json"
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { CommunityCard } from "./community-card";
import {
	GraduationCap,
	Briefcase,
	Users,
	Gamepad2,
	Music,
	ShoppingBag,
} from "lucide-react";

type CategoryItem = {
	slug: string;
	title: string;
	icon: string;
	count: string;
	description: string;
	banner: string;
};

type CommunityItem = {
	id: string;
	title: string;
	description: string;
	members: string;
	link: string;
	category: string;
	image: string;
	featured: boolean;
};

type CommunityData = {
	categories: CategoryItem[];
	communities: CommunityItem[];
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
	GraduationCap,
	Briefcase,
	Users,
	Gamepad2,
	Music,
	ShoppingBag,
};

export async function generateStaticParams() {
	const data = communityData as CommunityData;
	return data.categories.map((category) => ({
		slug: category.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const data = communityData as CommunityData;
	const category = data.categories.find((cat) => cat.slug === slug);

	if (!category) {
		return {
			title: "Kategori Tidak Ditemukan",
		};
	}

	const communities = data.communities.filter((c) => c.category === slug);
	const communityNames = communities.map((c) => c.title).join(", ");

	return {
		title: `Komunitas ${category.title} Indonesia - ${communities.length} Grup WhatsApp Terbaik`,
		description: `${category.description} Daftar lengkap: ${communityNames}. Gabung komunitas ${category.title} terbaik di Indonesia.`,
		keywords: [
			`komunitas ${category.title.toLowerCase()}`,
			`grup ${category.title.toLowerCase()}`,
			`komunitas whatsapp ${category.title.toLowerCase()}`,
			`${category.title.toLowerCase()} indonesia`,
			`grup wa ${category.title.toLowerCase()}`,
			...communities.slice(0, 5).map((c) => c.title.toLowerCase()),
		],
		openGraph: {
			title: `Komunitas ${category.title} Indonesia - ${communities.length} Grup WhatsApp`,
			description: `${category.description} Temukan dan gabung komunitas ${category.title} terbaik di Indonesia.`,
			url: `https://z0.dev/community/${slug}`,
			siteName: "Z0",
			locale: "id_ID",
			type: "website",
			images: [
				{
					url: category.banner || "/logo.png",
					width: 1200,
					height: 630,
					alt: `Komunitas ${category.title} Indonesia`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `Komunitas ${category.title} Indonesia - ${communities.length} Grup WhatsApp`,
			description: `${category.description} Temukan komunitas ${category.title} terbaik.`,
			images: [category.banner || "/logo.png"],
		},
		alternates: {
			canonical: `https://z0.dev/community/${slug}`,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

export default async function CategoryPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const data = communityData as CommunityData;

	// Find category by slug
	const category = data.categories.find((cat) => cat.slug === slug);

	// Get communities for this category
	const communities = data.communities.filter((c) => c.category === slug);

	if (!category) {
		notFound();
	}

	const IconComponent = iconMap[category.icon];

	// JSON-LD Structured Data for SEO
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: `Komunitas ${category.title} Indonesia`,
		description: category.description,
		url: `https://z0.dev/community/${slug}`,
		about: {
			"@type": "Thing",
			name: category.title,
		},
		mainEntity: {
			"@type": "ItemList",
			itemListElement: communities.map((community, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "Organization",
					name: community.title,
					description: community.description,
					url: community.link,
					member: {
						"@type": "QuantitativeValue",
						name: community.members,
					},
				},
			})),
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="mx-auto max-w-4xl px-6">
			{/* Back Link */}
			<div className="pt-6">
				<Button asChild size="sm" variant="ghost">
					<Link href="/community" className="inline-flex items-center gap-2">
						<ArrowLeft className="h-4 w-4" />
						Kembali ke Kategori
					</Link>
				</Button>
			</div>

			{/* Category Header */}
			<div className="mt-8 space-y-4">
				<div className="flex items-center gap-4">
					<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600">
						<IconComponent className="h-8 w-8" />
					</div>
					<div className="flex-1">
						<h1 className="text-3xl font-bold tracking-tight">
							{category.title}
						</h1>
						<p className="text-muted-foreground mt-1">
							{communities.length} komunitas tersedia
						</p>
					</div>
				</div>

				{/* Description Section */}
				<div className="rounded-xl bg-muted/50 border p-6">
					<p className="text-muted-foreground leading-relaxed">
						{category.description}
					</p>
				</div>
			</div>

			{/* Communities List */}
			<div className="py-8">
				{communities.length > 0 ? (
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
						{communities.map((community) => (
							<CommunityCard
								key={community.id}
								community={community}
							/>
						))}
					</div>
				) : (
					<div className="text-center py-12">
						<p className="text-muted-foreground">
							Belum ada komunitas di kategori ini.
						</p>
					</div>
				)}
			</div>

			{/* CTA Section */}
			<div className="pb-16">
				<div className="rounded-2xl bg-linear-to-r from-rose-100 to-pink-100 p-8 text-center">
					<h3 className="text-xl font-bold">
						Punya Komunitas di Kategori Ini?
					</h3>
					<p className="mx-auto mt-4 max-w-xl text-muted-foreground">
						Tambahkan komunitasmu ke direktori kami atau daftarkan untuk bot.
					</p>
					<Link
						href="https://wa.me/6281234567890"
						className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-colors hover:bg-foreground/90"
						target="_blank"
					>
						Hubungi Kami
					</Link>
				</div>
			</div>
		</div>
		</>
	);
}
