import type { Config } from "tailwindcss";
import { tokens } from "./lib/theme";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontSize: {
      "16": [
        "16px",
        {
          lineHeight: "16px",
        },
      ],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      // TODO: INSERT KOBBER TOKENS
      colors: {
        // KOBBER TOKENS

        "text/color/primary/body": "#481125",

        "text/color/primary/title-s": "#481125",
        "text/color/primary/title-m": "#481125",

        "text/color/primary/display-s": "#481125",
        "text/color/primary/heading-s": "#481125",
        "text/color/action-item/button": "#481125",
        "text/color/secondary/display-s": "#DC134F",

        "identity/meta/foreground": "#A35E70",

        // START LEGACY

        "aubergine-25": "#FDF9F9",
        "aubergine-50": "#F9EAED",
        "aubergine-250": "#f3a6b2",
        "carmine-525": "#DC134F",
        "vin-150": "#E5CFD3",
        "wine-150": "#E5CFD3",
        "wine-750": "#532D37",

        // END LEGACY

        // TODO: INSERT KOBBER TOKENS
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
