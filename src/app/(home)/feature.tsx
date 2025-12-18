"use client";

import {
	ChevronDown,
	Cloud,
	Cpu,
	Flashlight,
	Key,
	Layers,
	Lock,
	Moon,
	Printer,
	Smile,
	Upload,
	Users,
	Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

type FeatureItem = {
	icon: React.ComponentType<any>;
	title: string;
	description: string;
};

const features: FeatureItem[] = [
	{
		icon: Lock,
		title: "Private & Secure",
		description: "We don't snoop and we don't sell your data",
	},
	{
		icon: Smile,
		title: "Fast Support",
		description: "Need help? Chat with us quickly within the app",
	},
	{
		icon: Upload,
		title: "Import",
		description: "Import your existing markdown notes",
	},
	{
		icon: Cpu,
		title: "Extremely Reliable",
		description: '"Help my notes app isn\'t working?!"',
	},
	{
		icon: Layers,
		title: "Thoughts Collection",
		description: "Re-discover lost notes and expand on them",
	},
	{
		icon: Key,
		title: "Keyboard Controls",
		description: "Just start typing to create a new note",
	},
	{
		icon: Moon,
		title: "Night Mode",
		description: "Two dark themes for late-night thinkers",
	},
	{
		icon: Printer,
		title: "Print & Export",
		description: "Generate a printable PDF from Markdown",
	},
];

const bulbColors = [
	"bg-rose-100 text-rose-600",
	"bg-amber-100 text-amber-600",
	"bg-emerald-100 text-emerald-600",
	"bg-sky-100 text-sky-600",
	"bg-pink-100 text-pink-600",
	"bg-violet-100 text-violet-600",
	"bg-indigo-100 text-indigo-600",
	"bg-red-100 text-red-600",
	"bg-orange-100 text-orange-600",
	"bg-cyan-100 text-cyan-600",
	"bg-yellow-100 text-yellow-600",
	"bg-lime-100 text-lime-600",
];

const Features = () => {
	return (
		<section className="py-16 lg:py-24">
			<div className="mx-auto max-w-4xl px-6 text-center">
				<div className="flex items-center justify-center">
					<span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
						<Zap className="h-4 w-4" />
						Highly Efficient
					</span>
				</div>

				<h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tighter">
					Built for Busy People
				</h2>

				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					Don’t have much time on your hands? Supernotes takes care of lots of
					things for you, so you can focus. No formatting, no downloads, no
					loading screens. It just works on all your devices!
				</p>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{features.map((f, idx) => {
						const Icon = f.icon as React.ComponentType<any>;
						const bulb = bulbColors[idx % bulbColors.length];
						return (
							<motion.div
								className="cursor-default rounded-2xl bg-accent p-5 transition-all duration-300 ease-in-out hover:shadow-lg hover:outline-1 backdrop-blur-sm hover:bg-white transform hover:-translate-y-1 text-left"
								initial={{ opacity: 0, y: 20 }}
								key={f.title}
								transition={{ delay: 0.1 * idx, duration: 0.5 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div className="flex flex-col items-start gap-4">
									<div
										className={`flex h-10 w-10 items-center justify-center rounded-full ${bulb}`}
									>
										<Icon className="h-5 w-5" />
									</div>
									<div>
										<h3 className="text-sm font-semibold">{f.title}</h3>
										<p className="mt-2 text-sm text-muted-foreground">
											{f.description}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				<div className="mt-8">
					<Button className="" variant="ghost">
						More feature soon...
						{/* <ChevronDown className="h-4 w-4" /> */}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Features;
