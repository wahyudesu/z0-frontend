import { PhoneCall, PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faq = [
	{
		question: "What is your return policy?",
		answer:
			"You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
	},
	{
		question: "How do I track my order?",
		answer:
			"Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
	},
	{
		question: "Do you ship internationally?",
		answer:
			"Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
	},
	{
		question: "What if I receive a damaged item?",
		answer:
			"Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
	},
];

const FAQ1 = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-6 py-16 lg:py-24">
			<div className="w-full max-w-4xl py-0">
				<div className="grid gap-8 md:grid-cols-2 items-start">
					<div>
						<h2 className="text-4xl leading-[1.15]! font-semibold tracking-[-0.03em]">
							Frequently Asked Questions
						</h2>
						<p className="mt-3 text-lg text-muted-foreground">
							Quick answers to common questions about our products and services.
						</p>
						<div className="py-4">
							<Button className="gap-4" variant="outline">
								Any questions? Reach out <PhoneCall className="w-4 h-4" />
							</Button>
						</div>
					</div>

					<div>
						<Accordion
							type="single"
							collapsible
							className="mt-6 space-y-4"
							defaultValue="question-0"
						>
							{faq.map(({ question, answer }, index) => (
								<AccordionItem
									key={question}
									value={`question-${index}`}
									className={cn(
										"rounded-xl px-4 py-1 transition-colors",
										"bg-white",
										"data-[state=open]:bg-blue-50 border border-blue-500",
									)}
								>
									<AccordionPrimitive.Header className="flex">
										<AccordionPrimitive.Trigger
											className={cn(
												"flex flex-1 items-center justify-between pt-4 pb-3 text-lg font-semibold tracking-tight",
												"[&[data-state=open]>svg]:rotate-45",
											)}
										>
											{question}
											<PlusIcon className="h-5 w-5 text-blue-600 transition-transform" />
										</AccordionPrimitive.Trigger>
									</AccordionPrimitive.Header>

									<AccordionContent className="text-base text-muted-foreground">
										{answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ1;
