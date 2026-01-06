import {
	BookOpen,
	Briefcase,
	Gamepad2,
	GraduationCap,
	Music,
	ShoppingBag,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import communityData from "@/app/community/community.json"
import { CommunityCard } from "./[slug]/community-card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Direktori Komunitas WhatsApp Indonesia - Temukan & Gabung Komunitas Terbaik",
	description: "Jelajahi ratusan komunitas WhatsApp Indonesia di berbagai kategori: teknologi, edukasi, bisnis, gaming, kreatif, dan marketplace. Temukan komunitas yang sesuai dengan minatmu.",
	keywords: [
		"komunitas whatsapp indonesia",
		"grup whatsapp",
		"komunitas telegram",
		"komunitas programmer indonesia",
		"komunitas gaming",
		"komunitas bisnis",
		"komunitas edukasi",
		"direktori komunitas",
		"komunitas online indonesia",
		"grup wa indonesia",
		"whatsapp group links",
		"komunitas tech",
		"komunitas kreator",
	],
	openGraph: {
		title: "Direktori Komunitas WhatsApp Indonesia - Temukan & Gabung Komunitas Terbaik",
		description: "Jelajahi ratusan komunitas WhatsApp Indonesia. Temukan komunitas teknologi, edukasi, bisnis, gaming, dan lainnya.",
		url: "https://z0.dev/community",
		siteName: "Z0",
		locale: "id_ID",
		type: "website",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "Direktori Komunitas WhatsApp Indonesia",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Direktori Komunitas WhatsApp Indonesia - Temukan & Gabung Komunitas Terbaik",
		description: "Jelajahi ratusan komunitas WhatsApp Indonesia di berbagai kategori.",
		images: ["/logo.png"],
	},
	alternates: {
		canonical: "https://z0.dev/community",
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

type CategoryItem = {
	slug: string;
	title: string;
	icon: string;
	count: string;
	description: string;
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

const categoryColors: Record<string, { bg: string; text: string; hover: string }> = {
	edukasi: { bg: "bg-blue-100", text: "text-blue-600", hover: "group-hover:text-blue-600" },
	bisnis: { bg: "bg-amber-100", text: "text-amber-600", hover: "group-hover:text-amber-600" },
	teknologi: { bg: "bg-purple-100", text: "text-purple-600", hover: "group-hover:text-purple-600" },
	gaming: { bg: "bg-green-100", text: "text-green-600", hover: "group-hover:text-green-600" },
	kreatif: { bg: "bg-pink-100", text: "text-pink-600", hover: "group-hover:text-pink-600" },
	marketplace: { bg: "bg-orange-100", text: "text-orange-600", hover: "group-hover:text-orange-600" },
};

const data = communityData as CommunityData;
const categories: CategoryItem[] = data.categories;

// Get featured communities
const featuredCommunities: CommunityItem[] = data.communities
	.filter((c) => c.featured)
	.slice(0, 6);

// JSON-LD Structured Data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: "Direktori Komunitas WhatsApp Indonesia",
	description: "Jelajahi ratusan komunitas WhatsApp Indonesia di berbagai kategori: teknologi, edukasi, bisnis, gaming, kreatif, dan marketplace.",
	url: "https://z0.dev/community",
	about: [
		{
			"@type": "Thing",
			name: "Komunitas WhatsApp",
		},
		{
			"@type": "Thing",
			name: "Grup Indonesia",
		},
	],
	mainEntity: {
		"@type": "ItemList",
		itemListElement: categories.map((cat, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "CollectionPage",
				name: cat.title,
				description: cat.description,
				url: `https://z0.dev/community/${cat.slug}`,
			},
		})),
	},
};

export default function CommunityPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div>
			{/* Header Section */}
			<div className="py-16 md:py-24">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
						Temukan Komunitas WhatsApp
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
						Jelajahi berbagai komunitas WhatsApp, temukan yang sesuai dengan
						minatmu, atau gabung dengan komunitas rekomendasi pilihan.
					</p>
				</div>
			</div>

			{/* Category Section */}
			<div className="mx-auto max-w-6xl px-6 pb-16">
				<h2 className="text-2xl font-bold md:text-3xl">
					Jelajahi berdasarkan Kategori
				</h2>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{categories.map((cat) => {
						const Icon = iconMap[cat.icon];
						const colors = categoryColors[cat.slug] || {
							bg: "bg-slate-100",
							text: "text-slate-600",
							hover: "group-hover:text-slate-600"
						};
						return (
							<Link
								key={cat.slug}
								href={`/community/${cat.slug}`}
								className="group flex items-center gap-4 rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:shadow-lg hover:bg-white"
							>
								<div className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform`}>
									<Icon className="h-6 w-6" />
								</div>
								<div className="flex-1">
									<h3 className={`font-semibold ${colors.hover} transition-colors`}>
										{cat.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{cat.count}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>

			{/* Featured Communities Section */}
			{featuredCommunities.length > 0 && (
				<div className="mx-auto max-w-6xl px-6 pb-16">
					<h2 className="text-2xl font-bold md:text-3xl">
						Komunitas Rekomendasi
					</h2>
					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{featuredCommunities.map((community) => (
							<CommunityCard
								key={community.id}
								community={community}
							/>
						))}
					</div>
				</div>
			)}



			{/* CTA Section */}
			<div className="mx-auto max-w-6xl px-6 pb-16">
				<div className="rounded-2xl bg-linear-to-r from-rose-100 to-pink-100 p-8 text-center md:p-12">
					<h3 className="text-2xl font-bold md:text-3xl">
						Punya Komunitas WhatsApp?
					</h3>
					<p className="mx-auto mt-4 max-w-xl text-muted-foreground">
						Tambahkan komunitasmu ke direktori kami atau tambahkan bot untuk
						membuatnya lebih interaktif.
					</p>
					<Link
						href="https://wa.me/6281234567890"
						className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-colors hover:bg-foreground/90"
						target="_blank"
					>
						<BookOpen className="h-5 w-5" />
						Hubungi Kami
					</Link>
				</div>
			</div>
		</div>
		</>
	);
}
