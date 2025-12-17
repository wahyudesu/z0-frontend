import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero1 = () => (
	<div className="w-full">
		<div className="mx-auto max-w-4xl px-6">
			<div className="flex gap-6 py-16 lg:py-32 items-center justify-center flex-col">
				<div>
					<Button variant="secondary" size="sm" className="gap-4">
						Baru saja rilis <MoveRight className="w-4 h-4" />
					</Button>
				</div>
				<div className="flex gap-4 flex-col">
					<h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-extrabold">
						Buat <span className="text-blue-500">Grup WA</span> mu lebih efektif
					</h1>
					<p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
						Tambahkan fitur-fitur yang diperlukan untuk mengelola grup WhatsApp,
						mulai dari fitur tagall, deteksi kata kasar dan link promosi, hingga
					</p>
				</div>
				<div className="flex flex-row gap-3">
					<Button size="lg" className="gap-4" variant="outline">
						Self-hosted <PhoneCall className="w-4 h-4" />
					</Button>
					<Button size="lg" className="gap-4 bg-blue-500 hover:bg-blue-600">
						Tambahkan gratis di grup mu <MoveRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	</div>
);
