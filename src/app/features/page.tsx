"use client";

import { useT } from "@/context/locale-provider";
import Features from "@/components/features";

export default function FeaturesPage() {
  const t = useT();

  return (
    <main className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold">{t.featuresPageTitle}</h1>
        <p className="mt-3 text-muted-foreground">{t.featuresPageIntro}</p>
      </div>

      <div className="mt-12">
        <Features />
      </div>
    </main>
  );
}