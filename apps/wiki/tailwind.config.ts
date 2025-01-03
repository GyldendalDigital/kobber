import type { Config } from "tailwindcss"
import { tokens } from "./lib/theme"

const mode = "default"

const semantics = tokens[mode].semantics
const typography = tokens[mode].typography
const component = tokens[mode].component

const textSection = tokens[mode].template["text-wrapper"]

const global = tokens[mode].global.text

const { typography: text } = semantics
const { primary, secondary } = typography
const { gap: textSectionGap } = textSection

const { ui } = global

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
        "section/gap/horizontal": `${textSectionGap.horizontal}px`,
        "section/gap/vertical": `${textSectionGap.horizontal}px`,
        "content/gap/horizontal": "16px",
        "text-section/gap/header/horizontal": `${textSectionGap.horizontal}px`,
        "text-section/gap/header-ingress-body/horizontal": `${textSectionGap.horizontal}px`,
        "main/gap/vertical": `${textSectionGap.horizontal}px`,
      },

      maxHeight: {},
      minHeight: {},

      // see app/fonts/index.ts
      fontFamily: {
        mori: ["var(--font-mori)"],
        lyon: ["var(--font-lyon)"],
        inter: ["var(--font-inter)"],
      },
      fontWeight: {
        light: `${text.weight.light}`,
        book: `${text.weight.book}`,
        regular: `${text.weight.regular}`,
        medium: `${text.weight.medium}`,
        semibold: `${text.weight["semi-bold"]}`,
      },
      fontSize: {
        "text/ui/size/button": [`${ui.size.button}px`, {}],
        "primary-display-l": [
          `${primary["display large"].fontSize}px`,
          {
            lineHeight: `${primary["display large"].lineHeight}px`,
            fontWeight: `${primary["display large"].fontWeight}`,
          },
        ],
        "primary-display-m": [
          `${primary["display medium"].fontSize}px`,
          {
            lineHeight: `${primary["display medium"].lineHeight}px`,
            fontWeight: `${primary["display medium"].fontWeight}`,
          },
        ],
        "text/primary/size/display/small": [
          `${primary["display small"].fontSize}px`,
          {
            lineHeight: `${primary["display small"].lineHeight}px`,
            fontWeight: `${primary["display small"].fontWeight}`,
          },
        ],
        "primary-heading-m": [
          `${primary["heading medium"].fontSize}px`,
          {
            lineHeight: `${primary["heading medium"].lineHeight}px`,
            fontWeight: `${primary["heading medium"].fontWeight}`,
          },
        ],
        "primary-heading-s": [
          `${primary["heading small"].fontSize}px`,
          {
            lineHeight: `${primary["heading small"].lineHeight}px`,
            fontWeight: `${primary["heading small"].fontWeight}`,
          },
        ],
        "primary-title-m": [
          `${primary["title medium"].fontSize}px`,
          {
            lineHeight: `${primary["title medium"].lineHeight}px`,
            fontWeight: `${primary["title medium"].fontWeight}`,
          },
        ],
        "primary-title-s": [
          `${primary["title small"].fontSize}px`,
          {
            lineHeight: `${primary["title small"].lineHeight}px`,
            fontWeight: `${primary["title small"].fontWeight}`,
          },
        ],
        "primary-body": [
          `${primary.body.fontSize}px`,
          {
            lineHeight: `${primary.body.lineHeight}px`,
            fontWeight: `${primary.body.fontWeight}`,
          },
        ],
        "primary-label-m": [
          `${primary["label medium"].fontSize}px`,
          {
            lineHeight: `${primary["label medium"].lineHeight}px`,
            fontWeight: `${primary["label medium"].fontWeight}`,
          },
        ],
        "primary-label-s": [
          `${primary["label small"].fontSize}px`,
          {
            lineHeight: `${primary["label small"].lineHeight}px`,
            fontWeight: `${primary["label small"].fontWeight}`,
          },
        ],
        "secondary-display-l": [
          `${secondary["display large"].fontSize}px`,
          {
            lineHeight: `${secondary["display large"].lineHeight}px`,
            fontWeight: `${secondary["display large"].fontWeight}`,
          },
        ],
        "secondary-display-m": [
          `${secondary["display medium"].fontSize}px`,
          {
            lineHeight: `${secondary["display medium"].lineHeight}px`,
            fontWeight: `${secondary["display medium"].fontWeight}`,
          },
        ],
        "secondary-display-s": [
          `${secondary["display small"].fontSize}px`,
          {
            lineHeight: `${secondary["display small"].lineHeight}px`,
            fontWeight: `${secondary["display small"].fontWeight}`,
          },
        ],
        "secondary-heading-m": [
          `${secondary["heading medium"].fontSize}px`,
          {
            lineHeight: `${secondary["heading medium"].lineHeight}px`,
            fontWeight: `${secondary["heading medium"].fontWeight}`,
          },
        ],
        "secondary-heading-s": [
          `${secondary["heading small"].fontSize}px`,
          {
            lineHeight: `${secondary["heading small"].lineHeight}px`,
            fontWeight: `${secondary["heading small"].fontWeight}`,
          },
        ],
      },
      borderRadius: {},
      colors: {
        highlight: component.article.heading.text.color.highlight,
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
