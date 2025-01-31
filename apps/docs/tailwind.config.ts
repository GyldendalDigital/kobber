import type { Config } from "tailwindcss"
import { tokens } from "./lib/theme"

const mode = "default"

const component = tokens[mode].component

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      margin: {},
      width: {},
      maxWidth: {
        "max-width": `${tokens[mode].layout.maxWidth}px`,
      },
      minWidth: {
        "min-width": `${tokens[mode].layout.minWidth}px`,
      },
      height: {},

      padding: {
        "page/padding/inline/large": "64px",
        "page/padding/inline/medium": "40px",
        "page/padding/inline/small": "24px",
        "page/padding/inline/xsmall": "16px",
      },

      space: {},
      gap: {
        "page/gap/horizontal": "48px", // change this as we wait for a new template component
        "section/gap/horizontal": "1rem",
        "section/gap/vertical": "1rem",
        "content/gap/horizontal": "16px",
        "text-section/gap/header/horizontal": "1rem",
        "text-section/gap/header-ingress-body/horizontal": "1rem",
        "main/gap/vertical": "1rem",
      },

      maxHeight: {},
      minHeight: {},

      // see app/fonts/index.ts
      fontFamily: {
        mori: ["var(--font-mori)"],
        lyon: ["var(--font-lyon)"],
        inter: ["var(--font-inter)"],
      },
      borderRadius: {},
      colors: {
        highlight: component.heading.text.color.highlight,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        link: component.link.text.color,
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
} satisfies Config

export default config
