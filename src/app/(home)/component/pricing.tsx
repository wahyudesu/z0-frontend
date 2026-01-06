import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
	{
		name: "Free",
		id: "tier-free",
		href: "https://wa.me/6281234567890",
		priceMonthly: "Gratis",
		description: "Fitur dasar untuk grup WA kecil",
		features: [
			"Tagall (max 100 member)",
			"Toxic Detection",
			"Welcoming Message",
			"Admin Control",
		],
		featured: false,
	},
	{
		name: "Pro",
		id: "tier-pro",
		href: "#",
		priceMonthly: "Coming Soon",
		description: "Semua fitur tanpa batas untuk grup aktif",
		features: [
			"Tagall (unlimited member)",
			"Toxic Detection (custom kata)",
			"Welcoming Message (custom)",
			"Admin Control",
			"Ads Detection",
			"Pantun Generator",
		],
		featured: true,
	},
];

interface Tier {
	name: string;
	id: string;
	href: string;
	priceMonthly: string;
	description: string;
	features: string[];
	featured: boolean;
}

function classNames(...classes: (string | false | null | undefined)[]): string {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<section className="py-16 lg:py-32">
			<div className="mx-auto max-w-4xl px-6 text-center">
				<p className="text-sm uppercase tracking-widest text-muted-foreground">
					Pricing
				</p>

				<h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tighter">
					Pilih paket yang sesuai
				</h2>

				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					Dapatkan semua fitur keren untuk grup WhatsApp kamu. Mulai gratis,
					upgrade kapan saja untuk fitur lengkap.
				</p>
			</div>

			<div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-2 items-start">
				{/* Left card - Free */}
				<div className="relative rounded-3xl p-6 sm:p-8 bg-white shadow">
					<div className="flex items-start gap-6">
						<div className="flex-1">
							<p className="text-sm font-semibold text-blue-600">Starter</p>
							<h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
								{tiers[0].priceMonthly}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								{tiers[0].description}
							</p>
						</div>
					</div>

					<ul role="list" className="mt-6 space-y-4">
						{tiers[0].features.map((feature) => (
							<li key={feature}>
								<div className="flex items-start gap-3">
									<span className="text-sm font-medium">{feature}</span>
								</div>
							</li>
						))}
					</ul>

					<Card className="px-1 pt-1 pb-4 rounded-3xl my-4 bg-blue-200 gap-4">
						<Button
							variant="outline"
							className="rounded-2xl py-6 shadow-blue-700 shadow-2xl cursor-pointer transition-all duration-200 hover:shadow-xl hover:mx-2 hover:my-1"
						>
							Mulai Gratis
						</Button>
						<p className="text-xs text-black text-center font-medium">
							Chat untuk daftarkan grupmu
						</p>
					</Card>
				</div>

				{/* Right card - Pro (featured) */}
				<div className="relative rounded-3xl p-8 sm:p-10 bg-linear-to-br from-green-50 to-green-100 ring-1 ring-green-200 shadow-lg">
					<div className="absolute -right-3 -top-3 rotate-6 transform">
						<div className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
							Coming Soon
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="rounded-full p-3 bg-white/90">
							<div className="h-6 w-6 rounded-full bg-emerald-500" />
						</div>

						<div>
							<h3 className="text-base font-semibold">{tiers[1].name}</h3>
							<p className="mt-1 text-sm text-muted-foreground">
								{tiers[1].description}
							</p>
						</div>
					</div>

					<div className="mt-6 flex items-baseline gap-x-3">
						<span className="text-4xl font-extrabold tracking-tight text-emerald-700">
							{tiers[1].priceMonthly}
							<span className="text-base font-medium">/bulan</span>
						</span>
					</div>

					<p className="mt-2 text-xl text-muted-foreground">
						Semua fitur Starter + lebih banyak
					</p>

					<ul role="list" className="mt-6 space-y-3">
						{tiers[1].features.map((feature) => (
							<li key={feature} className="flex items-start gap-x-3">
								<CheckIcon
									aria-hidden="true"
									className="h-5 w-5 flex-none mt-1 text-emerald-500"
								/>
								<div>
									<span className="inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800">
										{feature}
									</span>
								</div>
							</li>
						))}
					</ul>

					<Card className="px-1 pt-1 pb-4 rounded-3xl my-4 bg-amber-100 gap-4 ">
						<Button
							variant="outline"
							disabled
							className="rounded-2xl py-6 cursor-not-allowed opacity-50"
						>
							Coming Soon
						</Button>
						<p className="text-xs text-black text-center font-medium">
							Notify me when ready
						</p>
					</Card>
				</div>
			</div>
		</section>
	);
}
