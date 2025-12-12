export const supported = ["en", "id", "jv", "su"] as const;

export type Locale = (typeof supported)[number];

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    features: "Features",
    changelog: "Changelog",
    getStarted: "Get Started",
    githubLabel: "GitHub",
    viewOnGithub: "View on GitHub",
    heroTitle: "Customized Shadcn UI Blocks & Components",
    heroDescription:
      "Explore a collection of Shadcn UI blocks and components, ready to preview and copy. Streamline your development workflow with easy-to-implement examples.",
    featuresPageTitle: "Features",
    featuresPageIntro:
      "Explore the features that make this project useful and easy to integrate.",
    changelogTitle: "Changelog",
    changelogIntro: "Version history and release notes.",
    socialProofJoinText: "Join 10K tech people",
  },
  id: {
    features: "Fitur",
    changelog: "Catatan Rilis",
    getStarted: "Mulai",
    githubLabel: "GitHub",
    viewOnGithub: "Lihat di GitHub",
    heroTitle: "Blok & Komponen Shadcn UI yang Disesuaikan",
    heroDescription:
      "Jelajahi koleksi blok dan komponen Shadcn UI, siap untuk dipratinjau dan disalin. Permudah alur kerja pengembangan Anda dengan contoh yang mudah diterapkan.",
    featuresPageTitle: "Fitur",
    featuresPageIntro:
      "Jelajahi fitur yang membuat proyek ini berguna dan mudah diintegrasikan.",
    changelogTitle: "Catatan Rilis",
    changelogIntro: "Riwayat versi dan catatan rilis.",
    socialProofJoinText: "Bergabung dengan 10K orang tech",
  },
  jv: {
    features: "Fitur",
    changelog: "Cathetan Rilis",
    getStarted: "Miwiwiti",
    githubLabel: "GitHub",
    viewOnGithub: "Deleng ing GitHub",
    heroTitle: "Blok & Komponen Shadcn UI sing Disesuaikan",
    heroDescription:
      "Jelajahi koleksi blok lan komponen Shadcn UI, siap kanggo dipreview lan disalin. Gampangake alur kerja pangembanganmu karo conto sing gampang diterapake.",
    featuresPageTitle: "Fitur",
    featuresPageIntro:
      "Jelajahi fitur sing nggawe proyek iki migunani lan gampang diintegrasi.",
    changelogTitle: "Cathetan Rilis",
    changelogIntro: "Riwayat versi lan cathetan rilis.",
    socialProofJoinText: "Gabung 10K wong tech",
  },
  su: {
    features: "Fitur",
    changelog: "Catetan Parobahan",
    getStarted: "Mimitian",
    githubLabel: "GitHub",
    viewOnGithub: "Tingali dina GitHub",
    heroTitle: "Blok & Komponén Shadcn UI Anu Disaluyukeun",
    heroDescription:
      "Jajah kumpulan blok sareng komponén Shadcn UI, siap pikeun dipidangkeun sareng disalin. Lancarkeun alur damel pangembangan anjeun ku conto anu gampang dianggo.",
    featuresPageTitle: "Fitur",
    featuresPageIntro:
      "Jajah fitur anu ngajantenkeun proyek ieu mangpaat sareng gampang diintegrasikeun.",
    changelogTitle: "Catetan Parobahan",
    changelogIntro: "Sajarah vérsi sareng catetan rilis.",
    socialProofJoinText: "Gabung 10K jalma tech",
  },
};

export const defaultLocale: Locale = "en";
