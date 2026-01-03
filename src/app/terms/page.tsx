import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Use - ZapZipped",
	description: "Terms of Use and Privacy Policy for ZapZipped service",
};

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto max-w-4xl px-6 py-16">
				<div className="space-y-12">
					{/* Terms of Use Section */}
					<section className="space-y-6">
						<h1 className="text-4xl font-bold tracking-tight">Terms of Use</h1>
						<p className="text-muted-foreground">
							Last updated: December 2025
						</p>

						<p className="leading-relaxed">
							Welcome to ZapZipped! By using our service, you agree to the
							following Terms and Conditions. Please read them carefully before
							proceeding.
						</p>

						<div className="space-y-6">
							<div className="space-y-2">
								<h2 className="text-2xl font-semibold">
									1. Acceptance of Terms
								</h2>
								<p className="leading-relaxed">
									By uploading a WhatsApp group chat file to ZapZipped, you
									confirm that you:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>
										Have the consent of all group members to share and process the
										chat data.
									</li>
									<li>Agree to these Terms and our Privacy Policy.</li>
								</ul>
								<p className="text-muted-foreground">
									If you do not agree, you must not use the service.
								</p>
							</div>

							<div className="space-y-2">
								<h2 className="text-2xl font-semibold">2. Eligibility</h2>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>Be at least 18 years old or have permission from a legal guardian.</li>
									<li>Comply with WhatsApp's Terms of Service and all applicable laws.</li>
								</ul>
							</div>

							<div className="space-y-2">
								<h2 className="text-2xl font-semibold">
									3. Service Description
								</h2>
								<p className="text-muted-foreground">ZapZipped provides:</p>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>Analysis of uploaded WhatsApp group chat files.</li>
									<li>Summary statistics and awards based on the chat data.</li>
									<li>Visual outputs (images) delivered via WhatsApp.</li>
								</ul>
							</div>

							<div className="space-y-2">
								<h2 className="text-2xl font-semibold">
									4. User Responsibilities
								</h2>
								<p className="leading-relaxed">You agree to:</p>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>Only upload files from group chats you are a member of.</li>
									<li>
										Not upload content that is illegal, harmful, or violates the
										rights of others.
									</li>
								</ul>
							</div>
						</div>
					</section>

					<hr className="border-border" />

					{/* Privacy Policy Section */}
					<section className="space-y-6">
						<h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
						<p className="text-muted-foreground">
							Last updated: December 2025
						</p>

						<p className="leading-relaxed">
							ZapZipped (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
							values your privacy and is committed to protecting your personal
							information. This Privacy Policy outlines how we collect, use, and
							safeguard your data when you use our service. By interacting with
							ZapZipped, you agree to the practices described in this Privacy
							Policy.
						</p>

						<div className="space-y-6">
							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">
									1. Information We Collect
								</h2>

								<div className="space-y-2">
									<h3 className="text-xl font-medium">a. Group Chat Data</h3>
									<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
										<li>
											Files you upload (e.g., exported WhatsApp group chats in{" "}
											<code className="bg-muted px-1 py-0.5 rounded text-sm">
												.txt
											</code>{" "}
											format).
										</li>
										<li>
											This includes timestamps, sender information, and message
											content but excludes exact media content (e.g., photos, videos).
										</li>
									</ul>
								</div>

								<div className="space-y-2">
									<h3 className="text-xl font-medium">b. Metadata</h3>
									<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
										<li>
											Information about the uploaded file, such as file size and
											processing time.
										</li>
										<li>
											Information about the group members based on the chat data
											(e.g., participant names and message counts).
										</li>
									</ul>
								</div>

								<div className="space-y-2">
									<h3 className="text-xl font-medium">c. Communication Data</h3>
									<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
										<li>
											Messages exchanged between you and the ZapZipped bot via
											WhatsApp, including responses to prompts and interactions with
											the service.
										</li>
									</ul>
								</div>
							</div>

							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">
									2. How We Use Your Data
								</h2>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>
										Analyze and summarize group chat data to generate statistics and
										awards.
									</li>
									<li>
										Create visual outputs (e.g., images) of your group chat summary
										and send them back to you.
									</li>
									<li>
										Ensure that all processing is performed without storing your
										original{" "}
										<code className="bg-muted px-1 py-0.5 rounded text-sm">
											.txt
										</code>{" "}
										file on our servers.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">3. Data Retention</h2>
								<p className="text-muted-foreground">
									We do not store your{" "}
									<code className="bg-muted px-1 py-0.5 rounded text-sm">.txt</code>{" "}
									file or any identifiable chat data. All files are processed
									temporarily and deleted immediately after generating the requested
									outputs. However, anonymized and aggregated statistics (without
									personally identifiable information) may be retained for service
									improvement.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">
									4. Sharing of Information
								</h2>
								<p className="text-muted-foreground">
									We do not share your data with third parties, except:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>When required by law or to comply with legal obligations.</li>
									<li>
										For troubleshooting or maintenance purposes with trusted service
										providers, who are bound by confidentiality agreements.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">5. Data Security</h2>
								<p className="leading-relaxed">
									We take the security of your data seriously and implement measures
									to ensure its protection:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>
										End-to-end encryption between your device and our processing
										system.
									</li>
									<li>
										Automatic deletion of uploaded files after processing.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">6. Your Rights</h2>
								<ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
									<li>Access, correct, or delete any information processed by ZapZipped.</li>
									<li>
										Withdraw consent for processing at any time. If you withdraw
										consent, your uploaded file will not be processed, and no outputs
										will be generated.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">
									7. Changes to the Privacy Policy
								</h2>
								<p className="text-muted-foreground">
									We may update this Privacy Policy from time to time. Any changes
									will be communicated via our website or directly through WhatsApp.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-2xl font-semibold">Contact Us</h2>
								<p className="text-muted-foreground">
									For questions or concerns about this Privacy Policy, contact us at{" "}
									<a
										href="mailto:team@zapzipped.com"
										className="text-blue-500 underline hover:text-blue-600"
									>
										team@zapzipped.com
									</a>
									.
								</p>
							</div>
						</div>
					</section>

					<div className="pt-8">
						<Link
							href="/"
							className="text-blue-500 underline hover:text-blue-600"
						>
							← Back to Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
