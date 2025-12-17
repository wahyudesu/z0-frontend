"use client";

import { motion } from "motion/react";
// https://magicui.design/docs/components/grid-pattern
import { GridPattern } from "@/components/ui/grid-pattern";

type Testimonial = {
	name: string;
	role: string;
	image: string;
	company: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		quote:
			"Multi Techno transformed the way we manage our operations. Their ERP system is reliable, scalable, and truly easy to use.",
		name: "Ali Khan",
		role: "HR Manager",
		company: "Pak Mission Society",
		image: "https://randomuser.me/api/portraits/men/21.jpg",
	},
	{
		quote:
			"Their ERP platform streamlined our business processes. What impressed me most is their dedication to client success and support.",
		name: "Sara Ahmed",
		role: "CEO",
		company: "Galaxy Five Home",
		image: "https://randomuser.me/api/portraits/women/22.jpg",
	},
	{
		quote:
			"    They took time to understand our unique requirements and delivered a system that fits seamlessly into daily operations. They took time to understand our unique requirements and delivered a system that fits seamlessly into daily operations.",
		name: "Imran Hussain",
		role: "Manager",
		company: "Al-Tayyab Foods",
		image: "https://randomuser.me/api/portraits/men/23.jpg",
	},
	{
		quote:
			"From onboarding to ongoing support, the Multi Techno team has been responsive, professional, and incredibly easy to work with.",
		name: "Fatima Noor",
		role: "Director",
		company: "Shafiqe Foods",
		image: "https://randomuser.me/api/portraits/women/24.jpg",
	},
	{
		quote:
			"Their collaborative approach makes us feel like partners, not just clients. Every strategy session brings new value to our business.",
		name: "Usman Raza",
		role: "CTO",
		company: "NextGen Solutions",
		image: "https://randomuser.me/api/portraits/men/25.jpg",
	},
	{
		quote:
			"We rely on their ERP to manage critical operations. The platform is intuitive, and the support team is always proactive.",
		name: "Ayesha Siddiqui",
		role: "Product Lead",
		company: "Bright Future Tech",
		image: "https://randomuser.me/api/portraits/women/26.jpg",
	},
	{
		quote:
			"Multi Techno gave us better visibility across departments. The insights and efficiency gains have been game-changing for our company.",
		name: "Bilal Sheikh",
		role: "Operations Head",
		company: "Metro Logistics",
		image: "https://randomuser.me/api/portraits/men/27.jpg",
	},
	{
		quote:
			"The ERP system brought structure to our finance operations. It’s user-friendly and perfectly tailored to our organizational needs.",
		name: "Nadia Karim",
		role: "Finance Manager",
		company: "Alpha Traders",
		image: "https://randomuser.me/api/portraits/women/28.jpg",
	},
	{
		quote:
			"Dependable, efficient, and forward-thinking. Multi Techno has become a trusted partner in helping us scale confidently worldwide.",
		name: "Omar Farooq",
		role: "Managing Director",
		company: "VisionX Global",
		image: "https://randomuser.me/api/portraits/men/29.jpg",
	},
];

export function TestimonialsSection() {
	return (
		<section className="relative w-full py-8 lg:py-24">
			<div className="mx-auto max-w-4xl px-6 space-y-8">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl tracking-tighter md:text-4xl lg:text-5xl font-extrabold">
						Real Results, Real Voices
					</h1>
					<p className="text-muted-foreground text-sm md:text-base lg:text-lg">
						See how businesses are thriving with our ERP — real stories, real
						impact, real growth.
					</p>
				</div>
				{/* Masonry-like layout using CSS columns so cards can have variable heights */}
				<div className="relative columns-1 sm:columns-2 lg:columns-3 gap-4">
					{testimonials.map(({ name, role, company, quote, image }, index) => (
						<motion.div
							className="inline-block w-full mb-4 align-top break-inside-avoid relative overflow-hidden rounded-lg border bg-card p-4 shadow dark:bg-card/50"
							initial={{ filter: "blur(4px)", translateY: -5, opacity: 0 }}
							key={name}
							transition={{ delay: 0.05 * index, duration: 0.5 }}
							viewport={{ once: true }}
							whileInView={{
								filter: "blur(0px)",
								translateY: 0,
								opacity: 1,
							}}
						>
							<div className="-mt-2 -ml-20 pointer-events-none absolute top-0 left-1/2 size-full mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
								<GridPattern
									className="absolute inset-0 size-full stroke-border"
									height={25}
									width={25}
									x={-12}
									y={4}
								/>
							</div>
							<div className="flex items-start gap-x-3">
								<img
									alt={name}
									className="rounded-full"
									height={36}
									loading="lazy"
									src={image}
									width={36}
								/>
								<div>
									<div className="-mt-0.5 -space-y-0.5">
										<p className="text-sm md:text-base">{name}</p>
										<span className="block font-light text-[11px] text-muted-foreground tracking-tight">
											{role} at {company}
										</span>
									</div>
									<blockquote className="mt-3">
										<p className="font-light text-foreground text-sm tracking-wide">
											{quote}
										</p>
									</blockquote>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
