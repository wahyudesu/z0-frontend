import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";

export const Hero1 = () => (
	<div className="w-full">
		<div className="mx-auto max-w-4xl px-6">
			<div className="flex gap-6 py-16 lg:py-32 items-center justify-center flex-col">
				<div>
					<Button variant="secondary" size="sm" className="delay-500 gap-4">
						Baru saja rilis <MoveRight className="w-4 h-4" />
					</Button>
				</div>
				<div className="flex gap-4 flex-col">
					<h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-extrabold">
						<h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-extrabold">
							<TextAnimate animation="slideUp" by="word">
								Buat Grup WA mu
							</TextAnimate>
							<TextAnimate animation="slideUp" by="word" delay={0.3}>
								jadi lebih efektif
							</TextAnimate>
						</h1>
					</h1>
				</div>
				<TextAnimate
					animation="blurInUp"
					by="character"
					className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center"
					once
					delay={0.7}
				>
					Tambahkan fitur-fitur yang diperlukan untuk mengelola grup WhatsApp,
					mulai dari fitur tagall, deteksi kata kasar dan link promosi, hingga
				</TextAnimate>
				<div className="flex flex-col items-center gap-4">
					<Button
						size="lg"
						className="gap-4 motion-preset-pop delay-1500 bg-blue-500 hover:bg-blue-600"
					>
						Tambahkan gratis di grup WA <MoveRight className="w-4 h-4" />
					</Button>
					<div className="text-center text-sm text-muted-foreground">
						We do NOT store your data.{" "}
						<Link href="/terms" className="underline hover:text-foreground">
							See the Terms of Use
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);
