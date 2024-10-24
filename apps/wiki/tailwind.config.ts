import type { Config } from "tailwindcss"
import { tokens } from "./lib/theme"

const primitives = tokens.default.primitives
const semantics = tokens.default.semantics
const typography = tokens.default.typography
const component = tokens.default.component

const page = tokens.default.template.page
const section = tokens.default.template.section
const content = tokens.default.template.content
const layout = tokens.default.layout

const global = tokens.default.global.text

const { typography: text, color } = semantics
const { size } = primitives
const { primary, secondary } = typography
const { gap: pageGap, grid, padding } = page
const { gap: sectionGap } = section
const { gap: contentGap } = content
const { gap: layoutGap } = layout

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
        "max-width": `${tokens.default.layout.maxWidth}px`,
      },
      minWidth: {
        "min-width": `${tokens.default.layout.minWidth}px`,
      },
      height: {},

      padding: {
        "page/padding/inline/large": `${padding.inline.large}px`,
        "page/padding/inline/xsmall": `${padding.inline.xsmall}px`,
      },

      space: {},
      gap: {
        "page/gap/horizontal/small": `${pageGap.horizontal.small}px`,
        "section/gap/horizontal": `${sectionGap.horizontal}px`,
        "section/gap/vertical": `${sectionGap.vertical}px`,
        "content/gap/horizontal": `${contentGap.horizontal}px`,
        // "layout/page/space/xsmall": `${layoutGap}px`,
      },
      maxHeight: {},
      minHeight: {},

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
        // TODO: text color tokens are removed. Create heading/body text component tokens
        "text/color/primary/body": component["wiki-list-item"].text.color,
        "text/color/primary/display-s": component["wiki-list-item"].text.color,
        "text/color/primary/heading-s": component["wiki-list-item"].text.color,
        "text/color/primary/label-m": component["wiki-list-item"].text.color,
        "text/color/primary/label-s": component["wiki-list-item"].text.color,
        "text/color/primary/title-m": component["wiki-list-item"].text.color,
        "text/color/primary/title-s": component["wiki-list-item"].text.color,

        "text/color/action-item/button": component["wiki-list-item"].text.color,
        "text/color/action-item/input": component["wiki-list-item"].text.color,
        "text/color/action-item/label-m": component["wiki-list-item"].text.color,
        "text/color/action-item/label-s": component["wiki-list-item"].text.color,

        "text/color/secondary/display-s":
          component["button"].text.color.carmine.main.secondary.fallback,
        "text/color/secondary/heading-s":
          component["button"].text.color.carmine.main.secondary.fallback,

        "button/background/color/aubergine/main/primary/fallback":
          component["button"].background.color.aubergine.main.primary.fallback,
        "button/background/color/carmine/main/primary/fallback":
          component["button"].background.color.carmine.main.primary.fallback,

        // Brand colors
        // "carmine-25": color.brand.carmine["25"],
        // "carmine-50": color.brand.carmine["50"],
        // "carmine-150": color.brand.carmine["150"],
        // "carmine-250": color.brand.carmine["250"],
        // "carmine-325": color.brand.carmine["325"],
        // "carmine-425": color.brand.carmine["425"],
        // "carmine-525": color.brand.carmine["525"],
        // "carmine-600": color.brand.carmine["600"],
        // "carmine-675": color.brand.carmine["675"],
        // "carmine-750": color.brand.carmine["750"],
        // "carmine-850": color.brand.carmine["850"],
        // "carmine-900": color.brand.carmine["900"],
        // "carmine-1000": color.brand.carmine["1000"],
        // "carmine-525-50%": color.brand.carmine["525-50%"],
        // "carmine-25-50%": color.brand.carmine["25-50%"],
        // "carmine-50-50%": color.brand.carmine["50-50%"],
        // "carmine-900-50%": color.brand.carmine["900-50%"],

        // "aubergine-25": color.brand.aubergine["25"],
        // "aubergine-50": color.brand.aubergine["50"],
        // "aubergine-150": color.brand.aubergine["150"],
        // "aubergine-250": color.brand.aubergine["250"],
        // "aubergine-325": color.brand.aubergine["325"],
        // "aubergine-425": color.brand.aubergine["425"],
        // "aubergine-525": color.brand.aubergine["525"],
        // "aubergine-600": color.brand.aubergine["600"],
        // "aubergine-675": color.brand.aubergine["675"],
        // "aubergine-750": color.brand.aubergine["750"],
        // "aubergine-850": color.brand.aubergine["850"],
        // "aubergine-900": color.brand.aubergine["900"],
        // "aubergine-1000": color.brand.aubergine["1000"],
        // "aubergine-50-50%": color.brand.aubergine["50-50%"],
        // "aubergine-1000-50%": color.brand.aubergine["1000-50%"],
        // "aubergine-25-50%": color.brand.aubergine["25-50%"],
        // "aubergine-850-50%": color.brand.aubergine["850-50%"],

        // "rettsdata-10": color.brand.rettsdata["10"],
        // "rettsdata-20": color.brand.rettsdata["20"],
        // "rettsdata-30": color.brand.rettsdata["30"],
        // "rettsdata-40": color.brand.rettsdata["40"],
        // "rettsdata-50": color.brand.rettsdata["50"],
        // "rettsdata-60": color.brand.rettsdata["60"],
        // "rettsdata-70": color.brand.rettsdata["70"],
        // "rettsdata-80": color.brand.rettsdata["80"],
        // "rettsdata-90": color.brand.rettsdata["90"],
        // "rettsdata-100": color.brand.rettsdata["100"],
        // "rettsdata-20-50%": color.brand.rettsdata["20-50%"],
        // "rettsdata-60-50%": color.brand.rettsdata["60-50%"],
        // "rettsdata-90-50%": color.brand.rettsdata["90-50%"],

        // "neutral-25": color.brand.neutral["25"],
        // "neutral-50": color.brand.neutral["50"],
        // "neutral-150": color.brand.neutral["150"],
        // "neutral-250": color.brand.neutral["250"],
        // "neutral-325": color.brand.neutral["325"],
        // "neutral-425": color.brand.neutral["425"],
        // "neutral-525": color.brand.neutral["525"],
        // "neutral-600": color.brand.neutral["600"],
        // "neutral-675": color.brand.neutral["675"],
        // "neutral-750": color.brand.neutral["750"],
        // "neutral-850": color.brand.neutral["850"],
        // "neutral-900": color.brand.neutral["900"],
        // "neutral-50-50%": color.brand.neutral["50-50%"],
        // "neutral-525-50%": color.brand.neutral["525-50%"],
        // "neutral-900-50%": color.brand.neutral["900-50%"],
        // "neutral-25-50%": color.brand.neutral["25-50%"],

        // "wine-25": color.brand.wine["25"],
        // "wine-50": color.brand.wine["50"],
        // "wine-150": color.brand.wine["150"],
        // "wine-250": color.brand.wine["250"],
        // "wine-325": color.brand.wine["325"],
        // "wine-425": color.brand.wine["425"],
        // "wine-525": color.brand.wine["525"],
        // "wine-600": color.brand.wine["600"],
        // "wine-675": color.brand.wine["675"],
        // "wine-750": color.brand.wine["750"],
        // "wine-850": color.brand.wine["850"],
        // "wine-900": color.brand.wine["900"],
        // "wine-1000": color.brand.wine["1000"],

        // TEMP
        "identity/meta/foreground": "#A35E70",
        "button/text/color/informative/main/primrary/fallback": "#4420B0",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
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
