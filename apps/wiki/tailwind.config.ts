import type { Config } from "tailwindcss";
import { tokens } from "./lib/theme";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      // Layout
      maxWidth: {
        "max-width": `${tokens.default.layout.maxWidth}px`,
      },
      minWidth: {
        "min-width": `${tokens.default.layout.minWidth}px`,
      },

      // TODO: INSERT KOBBER TOKENS
      height: {
        "72": `${tokens.default.primitives.size[72]}px`,
      },
      // TODO: INSERT KOBBER TOKENS
      padding: {
        "16": "16px",
        "24": "24px",
      },

      gap: {
        "24": "24px",
      },

      fontWeight: {
        light: `${tokens.default.semantics.text.weight.light}`,
        book: `${tokens.default.semantics.text.weight.book}`,
        regular: `${tokens.default.semantics.text.weight.regular}`,
        medium: `${tokens.default.semantics.text.weight.medium}`,
        semibold: `${tokens.default.semantics.text.weight.semibold}`,
      },

      fontSize: {
        "display-s": ["48px", "60px"],
        "heading-s": ["32px", "50px"],
        body: ["16px", "25px"],
        "title-s": ["18px", "35px"],
        "title-m": ["24px", "40px"],
      },

      // TODO: INSERT KOBBER TOKENS
      colors: {
        "text/color/primary/body": tokens.default.semantics.text.color.primary.body,
        "text/color/primary/display-s": tokens.default.semantics.text.color.primary["dispaly-s"],
        "text/color/primary/heading-s": tokens.default.semantics.text.color.primary["heading-s"],
        "text/color/primary/label-m": tokens.default.semantics.text.color.primary["label-m"],
        "text/color/primary/label-s": tokens.default.semantics.text.color.primary["label-s"],
        "text/color/primary/title-m": tokens.default.semantics.text.color.primary["title-m"],
        "text/color/primary/title-s": tokens.default.semantics.text.color.primary["title-s"],

        "text/color/action-item/button": tokens.default.semantics.text.color["action-item"].button,
        "text/color/action-item/input": tokens.default.semantics.text.color["action-item"].input,
        "text/color/action-item/label-m": tokens.default.semantics.text.color["action-item"]["label-m"],
        "text/color/action-item/label-s": tokens.default.semantics.text.color["action-item"]["label-s"],

        "text/color/secondary/display-s": tokens.default.semantics.text.color.secondary["dispaly-s"],
        "text/color/secondary/heading-s": tokens.default.semantics.text.color.secondary["heading-s"],

        // Brand colors
        "carmine-25": tokens.default.semantics.color.brand.carmine["25"],
        "carmine-50": tokens.default.semantics.color.brand.carmine["50"],
        "carmine-150": tokens.default.semantics.color.brand.carmine["150"],
        "carmine-250": tokens.default.semantics.color.brand.carmine["250"],
        "carmine-325": tokens.default.semantics.color.brand.carmine["325"],
        "carmine-425": tokens.default.semantics.color.brand.carmine["425"],
        "carmine-525": tokens.default.semantics.color.brand.carmine["525"],
        "carmine-600": tokens.default.semantics.color.brand.carmine["600"],
        "carmine-675": tokens.default.semantics.color.brand.carmine["675"],
        "carmine-750": tokens.default.semantics.color.brand.carmine["750"],
        "carmine-850": tokens.default.semantics.color.brand.carmine["850"],
        "carmine-900": tokens.default.semantics.color.brand.carmine["900"],
        "carmine-1000": tokens.default.semantics.color.brand.carmine["1000"],
        "carmine-525-50%": tokens.default.semantics.color.brand.carmine["525-50%"],
        "carmine-25-50%": tokens.default.semantics.color.brand.carmine["25-50%"],
        "carmine-50-50%": tokens.default.semantics.color.brand.carmine["50-50%"],
        "carmine-900-50%": tokens.default.semantics.color.brand.carmine["900-50%"],

        "aubergine-25": tokens.default.semantics.color.brand.aubergine["25"],
        "aubergine-50": tokens.default.semantics.color.brand.aubergine["50"],
        "aubergine-150": tokens.default.semantics.color.brand.aubergine["150"],
        "aubergine-250": tokens.default.semantics.color.brand.aubergine["250"],
        "aubergine-325": tokens.default.semantics.color.brand.aubergine["325"],
        "aubergine-425": tokens.default.semantics.color.brand.aubergine["425"],
        "aubergine-525": tokens.default.semantics.color.brand.aubergine["525"],
        "aubergine-600": tokens.default.semantics.color.brand.aubergine["600"],
        "aubergine-675": tokens.default.semantics.color.brand.aubergine["675"],
        "aubergine-750": tokens.default.semantics.color.brand.aubergine["750"],
        "aubergine-850": tokens.default.semantics.color.brand.aubergine["850"],
        "aubergine-900": tokens.default.semantics.color.brand.aubergine["900"],
        "aubergine-1000": tokens.default.semantics.color.brand.aubergine["1000"],
        "aubergine-50-50%": tokens.default.semantics.color.brand.aubergine["50-50%"],
        "aubergine-1000-50%": tokens.default.semantics.color.brand.aubergine["1000-50%"],
        "aubergine-25-50%": tokens.default.semantics.color.brand.aubergine["25-50%"],
        "aubergine-850-50%": tokens.default.semantics.color.brand.aubergine["850-50%"],

        "rettsdata-10": tokens.default.semantics.color.brand.rettsdata["10"],
        "rettsdata-20": tokens.default.semantics.color.brand.rettsdata["20"],
        "rettsdata-30": tokens.default.semantics.color.brand.rettsdata["30"],
        "rettsdata-40": tokens.default.semantics.color.brand.rettsdata["40"],
        "rettsdata-50": tokens.default.semantics.color.brand.rettsdata["50"],
        "rettsdata-60": tokens.default.semantics.color.brand.rettsdata["60"],
        "rettsdata-70": tokens.default.semantics.color.brand.rettsdata["70"],
        "rettsdata-80": tokens.default.semantics.color.brand.rettsdata["80"],
        "rettsdata-90": tokens.default.semantics.color.brand.rettsdata["90"],
        "rettsdata-100": tokens.default.semantics.color.brand.rettsdata["100"],
        "rettsdata-20-50%": tokens.default.semantics.color.brand.rettsdata["20-50%"],
        "rettsdata-60-50%": tokens.default.semantics.color.brand.rettsdata["60-50%"],
        "rettsdata-90-50%": tokens.default.semantics.color.brand.rettsdata["90-50%"],

        "neutral-25": tokens.default.semantics.color.brand.neutral["25"],
        "neutral-50": tokens.default.semantics.color.brand.neutral["50"],
        "neutral-150": tokens.default.semantics.color.brand.neutral["150"],
        "neutral-250": tokens.default.semantics.color.brand.neutral["250"],
        "neutral-325": tokens.default.semantics.color.brand.neutral["325"],
        "neutral-425": tokens.default.semantics.color.brand.neutral["425"],
        "neutral-525": tokens.default.semantics.color.brand.neutral["525"],
        "neutral-600": tokens.default.semantics.color.brand.neutral["600"],
        "neutral-675": tokens.default.semantics.color.brand.neutral["675"],
        "neutral-750": tokens.default.semantics.color.brand.neutral["750"],
        "neutral-850": tokens.default.semantics.color.brand.neutral["850"],
        "neutral-900": tokens.default.semantics.color.brand.neutral["900"],
        "neutral-50-50%": tokens.default.semantics.color.brand.neutral["50-50%"],
        "neutral-525-50%": tokens.default.semantics.color.brand.neutral["525-50%"],
        "neutral-900-50%": tokens.default.semantics.color.brand.neutral["900-50%"],
        "neutral-25-50%": tokens.default.semantics.color.brand.neutral["25-50%"],

        "wine-25": tokens.default.semantics.color.brand.wine["25"],
        "wine-50": tokens.default.semantics.color.brand.wine["50"],
        "wine-150": tokens.default.semantics.color.brand.wine["150"],
        "wine-250": tokens.default.semantics.color.brand.wine["250"],
        "wine-325": tokens.default.semantics.color.brand.wine["325"],
        "wine-425": tokens.default.semantics.color.brand.wine["425"],
        "wine-525": tokens.default.semantics.color.brand.wine["525"],
        "wine-600": tokens.default.semantics.color.brand.wine["600"],
        "wine-675": tokens.default.semantics.color.brand.wine["675"],
        "wine-750": tokens.default.semantics.color.brand.wine["750"],
        "wine-850": tokens.default.semantics.color.brand.wine["850"],
        "wine-900": tokens.default.semantics.color.brand.wine["900"],
        "wine-1000": tokens.default.semantics.color.brand.wine["1000"],

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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
} satisfies Config;

export default config;
