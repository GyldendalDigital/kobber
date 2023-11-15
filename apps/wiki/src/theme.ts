import { type AstroGlobal } from "astro";
import darkTokens from "@gyldendal/kobber-base/themes/dark/tokens.json";
import defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.json";

export const themes = {
  default: defaultTokens,
  dark: darkTokens,
};

export type Theme = keyof typeof themes;

export const setTheme = (theme: Theme) => {
  const url = new URL(window.location.href);
  url.searchParams.set("theme", theme);
  window.location.href = url.href;
};

export const getTheme = (themeOrAstro?: Theme | AstroGlobal) => {
  const definedTheme = getThemeFromUrl(themeOrAstro);
  return {
    name: definedTheme,
    className: `kobber-theme-${definedTheme}`,
    tokens: themes[definedTheme],
  };
};

const getThemeFromUrl = (themeOrAstro?: Theme | AstroGlobal): Theme => {
  if (isTheme(themeOrAstro)) {
    return themeOrAstro;
  }
  if (typeof window !== "undefined") {
    return (
      (new URLSearchParams(window.location.search).get("theme") as Theme) ??
      undefined
    );
  }
  if (themeOrAstro) {
    const Astro = themeOrAstro;
    const requestedTheme = Astro.url.searchParams.get("theme");
    return isTheme(requestedTheme) ? requestedTheme : "default";
  }
  return "default";
};

const isTheme = (object: unknown): object is Theme =>
  typeof object === "string" && Object.keys(themes).includes(object);
