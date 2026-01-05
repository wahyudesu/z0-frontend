import { MoveRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Button as StatefulButton } from "@/components/ui/stateful-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

export const Hero1 = () => (
	<BackgroundLines>
		<div className="relative z-10 w-full">
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
					<StatefulButton
						href="https://chat.whatsapp.com/"
						className="h-12 motion-preset-pop delay-1500 shadow-lg"
					>
						Coba gratis di grup WA mu
					</StatefulButton>
					<div className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-2 rounded-full">
						<Users className="w-4 h-4 text-green-600" />
						<span className="font-medium">
							<span className="text-green-600 font-bold">+50 Grup</span> sudah
							menggunakan bot WA ini
						</span>
					</div>
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
	</BackgroundLines>
);
