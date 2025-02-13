import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow:{
        complex: '0px 0px 20px #fda29b, 0px 0px 25px #fecdca, 0px -0px 30px #fee4e2'
      }
    },
  },
  plugins: [],
} satisfies Config;
