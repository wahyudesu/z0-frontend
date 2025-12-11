"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { type ChangeEvent, useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Button } from "@/components/ui/button";
import { useLocale, useT } from "@/context/locale-provider";

const Navbar = () => {
  const [stars, setStars] = useState<string | null>(null);
  const { locale, setLocale } = useLocale();
  const t = useT();

  // Repo to fetch stars for. Set in environment as NEXT_PUBLIC_GITHUB_REPO = "owner/repo"
  const repo = process.env.NEXT_PUBLIC_GITHUB_REPO;

  useEffect(() => {
    if (!repo) return;

    let cancelled = false;

    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const count = data?.stargazers_count;
        if (typeof count === "number") {
          // format like 1.2k
          const formatted =
            count >= 1000 ? `${(count / 1000).toFixed(1)}k` : String(count);
          setStars(formatted);
        }
      })
      .catch(() => {
        if (!cancelled) setStars(null);
      });

    return () => {
      cancelled = true;
    };
  }, [repo]);

  function handleLocaleChange(e: ChangeEvent<HTMLSelectElement>) {
    const v = e.target.value as any;
    setLocale(v);
  }

  return (
    <nav className="h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-lg) items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />

          {/* Top-level links for product pages */}
          <div className="hidden md:flex items-center gap-4">
            <a className="text-sm font-medium hover:underline" href="/features">
              {t.features}
            </a>
            <a
              className="text-sm font-medium hover:underline"
              href="/changelog"
            >
              {t.changelog}
            </a>
          </div>

          {/* Desktop Menu (secondary) */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <Button>
            {t.getStarted} <ArrowUpRight />
          </Button>

          {/* language selector */}
          <select
            aria-label="Select language"
            className="hidden md:inline-block rounded-md border px-2 py-1 text-sm"
            onChange={handleLocaleChange}
            value={locale ?? "en"}
          >
            <option value="en">English</option>
            <option value="id">Indonesia</option>
            <option value="jv">Basa Jawa</option>
            <option value="su">Basa Sunda</option>
          </select>

          {/* GitHub link with stars */}
          <a
            aria-label={t.viewOnGithub}
            className="hidden items-center gap-2 rounded-full border border-transparent px-3 py-1 text-sm hover:bg-muted md:inline-flex"
            href={repo ? `https://github.com/${repo}` : "#"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
            <span className="font-medium">{stars ?? t.githubLabel}</span>
          </a>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
