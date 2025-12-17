import Image from "next/image";

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

export default function TechStack() {
	return (
		<section className="mx-auto max-w-4xl px-6 py-16 lg:py-32 text-center bg-green-100 border border-green-700 rounded-2xl space-y-12">
			<p className="text-sm uppercase tracking-widest text-muted-foreground">
				Built with the best
			</p>
			<div className="mt-6 flex flex-wrap justify-center gap-8">
				{techs.map(({ name, src, width, height }) => (
					<div key={name} className="flex w-24 items-center justify-center">
						<div className="h-14 w-14 rounded-md flex items-center justify-center">
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
		</section>
	);
}
