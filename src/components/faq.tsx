"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    title: "What is Abode, and how is it different?",
    description:
      "Abode is a lightweight, privacy-first notes app designed to keep your data local-first while providing modern collaboration features.",
  },
  {
    title: "Who can use Abode?",
    description:
      "Anyone! We've built Abode with close friends in mind, but it's designed to be inclusive of everyone and anyone. Use it with family, friends, or even your dog.",
  },
  {
    title: "How do I get started with Abode?",
    description:
      "Create an account, follow the onboarding steps to create your first notebook, and invite collaborators if you want to share content.",
  },
  {
    title: "What are magnets, and how do they work?",
    description:
      "Magnets are small, reusable cards that help you pin important notes to the top of your view so you can find them quickly.",
  },
  {
    title: "How does Abode protect my privacy?",
    description:
      "Your notes are encrypted in transit and at rest. We minimize server-side data collection and provide options to export or delete your data anytime.",
  },
  {
    title: "What devices are compatible with Abode?",
    description:
      "Abode works on desktop and mobile web, and we provide native apps for iOS and Android to sync your notes across devices.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Frequently
            <br />
            asked
            <br />
            questions
          </h2>
        </div>

        <div className="md:col-span-8">
          <Accordion className="w-full" defaultValue="item-1" type="single">
            {faqs.map((f, i) => (
              <AccordionItem
                className="group/accordion-item mb-4"
                key={f.title}
                value={`item-${i}`}
              >
                <AccordionTrigger className="text-lg font-semibold">
                  {f.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-3 rounded-xl border border-border p-4">
                    <p className="text-sm text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
