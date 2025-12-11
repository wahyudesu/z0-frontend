import { BookOpen, Cpu, Goal, Star, Users, Zap } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Accelerate Growth",
    description:
      "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
  },
  {
    icon: Goal,
    title: "Identify Opportunities",
    description:
      "Easily uncover untapped areas to explore and expand your reach effortlessly and effectively.",
  },
  {
    icon: BookOpen,
    title: "Build Authority",
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    icon: Users,
    title: "Engage Your Audience",
    description:
      "Boost audience engagement with interactive features like polls, quizzes, and forms.",
  },
  {
    icon: Cpu,
    title: "Instant Insights",
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
  {
    icon: Star,
    title: "Trusted by Many",
    description:
      "A proven solution used by thousands of developers and teams worldwide.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold">Features</h1>
        <p className="mt-3 text-muted-foreground">
          Explore the features that make this project useful and easy to
          integrate.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <article
              className="rounded-2xl bg-white/80 dark:bg-muted p-6 shadow-md border border-gray-100"
              key={f.title}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Badge className="rounded-full">Popular</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>4.9</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
