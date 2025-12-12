import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { TestimonialsSection } from "@/components/testimonial";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Implementing this solution was seamless. The documentation is excellent and the support team is responsive. Highly recommended for any growing business.",
  },
  {
    name: "Michael Chen",
    role: "Developer",
    company: "DevSolutions",
    content:
      "As a developer, I appreciate the clean APIs and extensive customization options. It's saved us countless hours of development time.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-foreground dark:bg-black">
      <Hero />

      {/* Features and details */}
      <Features />
      <TestimonialsSection testimonials={testimonials} />
      <FAQ />
    </div>
  );
}
