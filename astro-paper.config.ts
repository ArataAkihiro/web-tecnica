import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://web-tecnica.pages.dev/",
    title: "NanoTech!",
    description: "Cuaderno técnico de hardware, sistemas, tecnología moderna y reparaciones de taller narrado desde la experiencia real.",
    author: "Sergio Montero",
    profile: "https://github.com/ArataAkihiro",
    ogImage: "default-og.jpg",
    lang: "es",
    timezone: "Europe/Madrid",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 8,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/ArataAkihiro" },
    { name: "instagram", url: "https://instagram.com/arataakihiro" },
    { name: "mail", url: "mailto:sergiomontero98@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=Mira%20este%20artículo&body=" },
  ],
});
