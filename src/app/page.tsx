import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-foreground dark:bg-black">
      <Navbar />

      {/* Hero / above-the-fold */}
      <Hero />

      {/* Features and details */}
      <Features />
    </div>
  );
}
