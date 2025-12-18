import { MoveRight, PhoneCall } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const CTA1 = () => (
	<div className="w-full py-16 lg:py-32">
		<div className="container mx-auto">
			<div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
				<div className="flex flex-col gap-2">
					<h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
						Coba gratis sekarang
					</h3>
					<p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
						Grup wa terasa sepi dan membosankan? Dengan z0 kamu bisa buat grup
						WA mu terasa lebih ramai, lebih hidup dan lebih interaktif
					</p>
				</div>
				<div className="flex flex-row gap-4">
					<Button
						size="lg"
						className="gap-4 motion-preset-pop delay-1200"
						variant="outline"
					>
						Self-hosted <FaGithub className="w-4 h-4" />
					</Button>
					<Button
						size="lg"
						className="gap-4 motion-preset-pop delay-1500 bg-blue-500 hover:bg-blue-600"
					>
						Tambahkan gratis di grup mu <MoveRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	</div>
);
