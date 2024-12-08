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
        'peach': '#FFF3E3',
         'brown': '#B88E2F',
         'beige': "#FCF8F3"
        
      },
    },
  },
  plugins: [],
} satisfies Config;
