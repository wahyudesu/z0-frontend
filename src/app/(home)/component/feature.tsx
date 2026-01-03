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
		icon: Users,
		title: "Tagall",
		description: "mention semua member dalam satu perintah",
	},
	{
		icon: Flashlight,
		title: "Toxic Detection",
		description: "mendeteksi kata kasar untuk menjaga kenyamanan grup",
	},
	{
		icon: Smile,
		title: "Welcoming Message",
		description: "pesan sambutan otomatis untuk member baru",
	},
	{
		icon: Lock,
		title: "Admin Control",
		description: "membuka dan menutup chat grup dengan mudah",
	},
	{
		icon: Upload,
		title: "Ads Detection",
		description: "mendeteksi dan memblokir link promosi",
	},
	{
		icon: Smile,
		title: "Pantun",
		description: "membuat pantun otomatis untuk hiburan",
	},
	{
		icon: Cpu,
		title: "AI Web Search",
		description: "asisten pintar untuk menjawab dan membantu pengguna",
	},
	{
		icon: Zap,
		title: "Fakta Unik",
		description: "menyajikan fakta menarik untuk meningkatkan interaksi grup",
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
					Built better community
				</h2>

				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					Buat grup wa mu terasa lebih ramai, lebih hidup dan lebih interaktif
					dengan chatbot whatsapp yang memiliki segudang fitur keren yang kamu
					bisa coba gratis
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
