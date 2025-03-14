import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('../../public/assets/bg-site/bg-site-desktop.png')",
        desktop2: "url('../../public/assets/bg-site/bg-site-desktop-4.png')",
        mobile: "url('../../public/assets/bg-site/bg-site-mobile.png')",
        esgotado: "url('../../public/assets/diversos/esgotado.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
