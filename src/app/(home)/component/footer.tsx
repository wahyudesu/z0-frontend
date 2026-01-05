import Link from "next/link";

export function Footer() {
	return (
		<footer className="w-full border-t bg-background">
			<div className="mx-auto max-w-4xl px-6 py-8">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex items-center gap-2">
						<span className="text-sm text-muted-foreground">
							© {new Date().getFullYear()} ZapZipped. All rights reserved.
						</span>
					</div>

					<div className="flex items-center gap-6">
						<Link
							href="/terms"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Terms of Use
						</Link>
						<Link
							href="/terms#privacy"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Privacy Policy
						</Link>
						<a
							href="mailto:team@zapzipped.com"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
