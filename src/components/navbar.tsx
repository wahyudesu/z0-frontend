"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { type ChangeEvent, useEffect, useState } from "react";
import { Logo } from "@/components/logo";
// removed NavMenu in favor of a simpler centered nav
import { NavigationSheet } from "@/components/navigation-sheet";
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
        <div className="flex items-center gap-8 w-full">
          <div className="flex items-center gap-8">
            <Logo />
          </div>

          {/* Centered nav links (desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-6">
              {[
                { label: "What's New", href: "#" },
                { label: "Features", href: "/features" },
                { label: "Changelog", href: "#" },
              ].map((link) => {
                const isActive = link.label === "Features";
                return (
                  <li className="relative" key={link.label}>
                    <a
                      className={`px-2 py-2 text-sm font-medium transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                      href={link.href}
                    >
                      {link.label}
                    </a>

                    {/* caret/indicator under active item */}
                    {isActive && (
                      <span className="absolute left-1/2 top-full -translate-x-1/2 mt-2 block">
                        <svg
                          fill="none"
                          height="8"
                          viewBox="0 0 18 8"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 8L0.669872 0H17.3301L9 8Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* placeholder to keep spacing on mobile */}
          </div>
        </div>

        <div className="flex items-center gap-3">
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
