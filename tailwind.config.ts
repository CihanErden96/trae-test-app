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
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        accent: "var(--accent)",
      },
      boxShadow: {
        custom: "var(--shadow)",
        "custom-up": "var(--shadow-up)",
      },
      borderRadius: {
        card: "var(--border-radius-card)",
        header: "var(--border-radius-header)",
        footer: "var(--border-radius-footer)",
      },
    },
  },
  plugins: [],
} satisfies Config;