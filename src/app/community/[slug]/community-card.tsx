"use client";

import Image from "next/image";
import { useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

type CommunityItem = {
	id: string;
	title: string;
	description: string;
	members: string;
	link: string;
	category: string;
	image: string;
	featured: boolean;
};

export function CommunityCard({ community }: { community: CommunityItem }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleJoin = () => {
		setIsOpen(true);
	};

	const handleConfirm = () => {
		window.open(community.link, "_blank");
		setIsOpen(false);
	};

	return (
		<>
			<Card className="hover:shadow-lg transition-shadow">
				<CardHeader className="flex flex-row items-start gap-4 space-y-0">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 overflow-hidden">
						<Image
							src={community.image}
							alt={community.title}
							width={48}
							height={48}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="flex-1 min-w-0 space-y-1">
						<CardTitle className="text-base">{community.title}</CardTitle>
						<CardDescription className="line-clamp-2">
							{community.description}
						</CardDescription>
					</div>
				</CardHeader>
				<CardFooter className="flex items-center justify-between">
					<span className="text-xs text-muted-foreground">
						{community.members} anggota
					</span>
					<Button size="sm" onClick={handleJoin}>
						Gabung
					</Button>
				</CardFooter>
			</Card>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Gabung ke {community.title}?</DialogTitle>
						<DialogDescription>
							Sebelum bergabung, harap perhatikan aturan berikut:
						</DialogDescription>
					</DialogHeader>
					<div className="py-4">
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li className="flex items-start gap-2">
								<span className="text-rose-500 mt-0.5">•</span>
								<span>Hormati semua anggota komunitas</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-rose-500 mt-0.5">•</span>
								<span>
									Jangan spam atau share konten yang tidak relevan
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-rose-500 mt-0.5">•</span>
								<span>
									Ikuti aturan yang berlaku di komunitas tersebut
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-rose-500 mt-0.5">•</span>
								<span>
									Baca deskripsi grup sebelum bergabung
								</span>
							</li>
						</ul>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setIsOpen(false)}>
							Batal
						</Button>
						<Button onClick={handleConfirm}>Ya, Gabung</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
