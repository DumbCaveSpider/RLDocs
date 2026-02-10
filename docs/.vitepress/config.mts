import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rated Layouts API",
  description: "Official Rated Layouts API Documentation",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://ratedlayouts.arcticwoof.xyz/RL_sparkBig.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "https://ratedlayouts.arcticwoof.xyz/RL_sparkBig.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "https://ratedlayouts.arcticwoof.xyz/RL_sparkBig.png",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://ratedlayouts.arcticwoof.xyz/RL_sparkBig.png",
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "v1 Endpoints",
        items: [
          { text: "getDaily", link: "/endpoints/getDaily" },
          { text: "getWeekly", link: "/endpoints/getWeekly" },
          { text: "getFeatured", link: "/endpoints/getFeatured" },
          { text: "getGauntlet", link: "/endpoints/getGauntlet" },
          { text: "getLayouts", link: "/endpoints/getLayouts" },
          { text: "getLeaderboard", link: "/endpoints/getLeaderboard" },
          { text: "getMonthly", link: "/endpoints/getMonthly" },
          { text: "getProfile", link: "/endpoints/getProfile" },
        ],
      },
    ],
    aside: false,

    docFooter: {
      prev: false,
      next: false,
    },
  },
});
