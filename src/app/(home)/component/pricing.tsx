import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
	{
		name: "Hobby",
		id: "tier-hobby",
		href: "#",
		priceMonthly: "$29",
		description:
			"The perfect plan if you're just getting started with our product.",
		features: [
			"25 products",
			"Up to 10,000 subscribers",
			"Advanced analytics",
			"24-hour support response time",
		],
		featured: false,
	},
	{
		name: "Enterprise",
		id: "tier-enterprise",
		href: "#",
		priceMonthly: "$99",
		description: "Dedicated support and infrastructure for your company.",
		features: [
			"Unlimited products",
			"Unlimited subscribers",
			"Advanced analytics",
			"Dedicated support representative",
			"Marketing automations",
			"Custom integrations",
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
					Choose the right plan for you
				</h2>

				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					Choose an affordable plan that’s packed with the best features for
					engaging your audience, creating customer loyalty, and driving sales.
				</p>
			</div>

			<div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-2 items-start">
				{/* Left card - Starter / Free (visual match) */}
				<div className="relative rounded-3xl p-6 sm:p-8 bg-white shadow">
					<div className="flex items-start gap-6">
						<div className="flex-1">
							<p className="text-sm font-semibold text-blue-600">Starter</p>
							<h3 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
								Free
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								All you need to get started...
							</p>
						</div>
					</div>

					<ul role="list" className="mt-6 space-y-4">
						{/* Feature list styled to match image: pill + optional caption */}

						<li>
							<div className="flex items-start gap-3">
								<span className="text-sm font-medium">Fast Sync</span>
							</div>
							<p className="mt-1 text-xs text-muted-foreground">
								Your notes always up-to-date on all devices
							</p>
						</li>

						<li>
							<div className="flex items-start gap-3">
								<span className="text-sm font-medium">Offline</span>
							</div>
							<p className="mt-1 text-xs text-muted-foreground">
								Create & edit all notes without internet
							</p>
						</li>

						<li>
							<div className="flex items-start gap-3">
								<span className="text-sm font-medium">Heatmap Calendar</span>
							</div>
							<p className="mt-1 text-xs text-muted-foreground">
								Track thoughts, and assign them to days
							</p>
						</li>
					</ul>
					<Card className="px-1 pt-1 pb-4 rounded-3xl my-4 bg-blue-200 gap-4">
						<Button
							variant="outline"
							className="rounded-2xl py-6 shadow-blue-700 shadow-2xl cursor-pointer transition-all duration-200 hover:shadow-xl hover:mx-2 hover:my-1"
						>
							Mulai Gratis
						</Button>
						<p className="text-xs text-black text-center font-medium">
							Track thoughts, and assign them to days
						</p>
						<p className="text-xs text-muted-foreground text-center">
							Track thoughts, and assign them to days
						</p>
					</Card>
				</div>

				{/* Right card - Enterprise (featured) */}
				<div className="relative rounded-3xl p-8 sm:p-10 bg-linear-to-br from-green-50 to-green-100 ring-1 ring-green-200 shadow-lg">
					<div className="absolute -right-3 -top-3 rotate-6 transform">
						<div className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
							25% Off
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
							$8.02<span className="text-base font-medium">*</span>
						</span>
						<span className="text-sm text-muted-foreground">/month</span>
					</div>

					<p className="mt-2 text-sm text-muted-foreground">
						Everything in Starter and more...
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

					<Card className="px-1 pt-1 pb-4 rounded-3xl my-4 bg-green-200 gap-4 ">
						<Button
							variant="outline"
							className="rounded-2xl py-6 shadow-green-700 shadow-2xl cursor-pointer transition-all duration-200 hover:shadow-xl hover:mx-2 hover:my-1"
						>
							Mulai Gratis
						</Button>
						<p className="text-xs text-black text-center font-medium">
							Track thoughts, and assign them to days
						</p>
						<p className="text-xs text-muted-foreground text-center">
							Track thoughts, and assign them to days
						</p>
					</Card>
				</div>
			</div>
		</section>
	);
}
