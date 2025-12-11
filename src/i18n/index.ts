export const supported = ["en", "id", "jv", "su"] as const;

export type Locale = (typeof supported)[number];

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    features: "Features",
    changelog: "Changelog",
    getStarted: "Get Started",
    githubLabel: "GitHub",
    viewOnGithub: "View on GitHub",
  },
  id: {
    features: "Fitur",
    changelog: "Catatan Rilis",
    getStarted: "Mulai",
    githubLabel: "GitHub",
    viewOnGithub: "Lihat di GitHub",
  },
  jv: {
    features: "Fitur",
    changelog: "Cathetan Rilis",
    getStarted: "Miwiwiti",
    githubLabel: "GitHub",
    viewOnGithub: "Deleng ing GitHub",
  },
  su: {
    features: "Fitur",
    changelog: "Catetan Parobahan",
    getStarted: "Mimitian",
    githubLabel: "GitHub",
    viewOnGithub: "Tingali dina GitHub",
  },
};

export const defaultLocale: Locale = "en";
