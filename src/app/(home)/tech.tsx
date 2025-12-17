import { MoveRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const techs = [
	{ name: "Hono", src: "/hono.svg", width: 56, height: 56 },
	{ name: "Drizzle", src: "/drizzle.svg", width: 56, height: 56 },
	{
		name: "Cloudflare Worker",
		src: "/cloudflare-worker.svg",
		width: 56,
		height: 56,
	},
	{ name: "Postgres", src: "/postgres.svg", width: 56, height: 56 },
	{ name: "Waha", src: "/waha.png", width: 56, height: 56 },
];

export const TechStack = () => (
	<div className="w-full py-8 lg:py-12">
		<div className="container mx-auto">
			<div className="flex flex-col text-center rounded-xl p-4 py-16 lg:py-24 lg:p-14 gap-8 items-center">
				<div className="flex flex-col gap-2">
					<h3 className="text-2xl md:text-4xl tracking-tighter max-w-xl font-regular">
						Built with the best
					</h3>
				</div>
				<div className="mt-6 flex flex-wrap justify-center gap-2">
					{techs.map(({ name, src, width, height }) => (
						<div key={name} className="flex w-24 items-center justify-center">
							<div className="h-12 w-12 rounded-md flex items-center justify-center">
								<Image
									src={src}
									alt={name}
									width={width}
									height={height}
									className="object-contain"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);
