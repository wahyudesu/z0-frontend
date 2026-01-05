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
		question: "Apakah chatbot ini benar-benar gratis?",
		answer:
			"Ya. Saat ini chatbot bisa digunakan gratis untuk mencoba fitur-fitur yang tersedia. Fitur baru akan ditambahkan secara bertahap.",
	},
	{
		question: "Apakah saya bisa meng-host chatbot ini sendiri?",
		answer:
			"Ya. Chatbot ini bersifat open source dan dibangun di atas WAHA. Kamu bisa meng-host sendiri dengan menyesuaikan environment variable WAHA yang tersedia.",
	},
	{
		question: "Apakah fitur chatbot bisa dikustom?",
		answer:
			"Bisa. Kamu dapat mengajukan request fitur, dan kami akan mempertimbangkannya untuk ditambahkan.",
	},
	{
		question: "Apakah chatbot ini bisa digunakan untuk bisnis?",
		answer:
			"Saat ini chatbot difokuskan untuk interaksi di grup WhatsApp, bukan untuk chat pribadi. Cocok untuk komunitas atau grup interaktif.",
	},
];

const FAQ1 = () => {
	return (
		<div className="max-h-screen flex items-center justify-center px-6 py-16 lg:py-24">
			<div className="w-full max-w-4xl py-0">
				<div className="grid gap-8 md:grid-cols-2 items-start">
					<div>
						<h2 className="text-4xl leading-[1.15]! font-semibold tracking-[-0.03em]">
							Frequently Asked Questions
						</h2>
						{/* <p className="mt-3 text-lg text-muted-foreground">
							Quick answers to common questions about our products and services.
						</p> */}
						{/* <div className="py-4">
							<Button className="gap-4" variant="outline">
								Any questions? Reach out <PhoneCall className="w-4 h-4" />
							</Button>
						</div> */}
					</div>

					<div>
						<Accordion
							type="single"
							collapsible
							className=" space-y-4"
							defaultValue="question-0"
						>
							{faq.map(({ question, answer }, index) => (
								<AccordionItem
									key={question}
									value={`question-${index}`}
									className={cn(
										"rounded-xl px-4 py-1 transition-colors",
										"bg-white border-none",
										"data-[state=open]:bg-blue-50",
									)}
								>
									<AccordionPrimitive.Header className="flex">
										<AccordionPrimitive.Trigger
											className={cn(
												"flex flex-1 items-start justify-between pt-4 pb-3 text-left text-lg font-semibold tracking-tight",
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
