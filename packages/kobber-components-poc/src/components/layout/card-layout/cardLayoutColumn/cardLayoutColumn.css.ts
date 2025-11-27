import type { ComplexStyleRule } from "@vanilla-extract/css";
import { className } from "../../../../cssProcessing/className";
import { aspectRatioVar, gapVar, maxSpanVar } from "../cardLayout/variables.css";

const spanModifier = (span: number): ComplexStyleRule => ({
  display: "grid",
  minHeight: 0,
  gridColumn: `span min(${span}, var(${maxSpanVar}))`,
  aspectRatio: `min(${span}, var(${maxSpanVar})) / var(${aspectRatioVar})`,
});

export const span1 = className("span-1", spanModifier(1));

export const span2 = className("span-2", spanModifier(2));

export const span3 = className("span-3", spanModifier(3));

export const span4 = className("span-4", spanModifier(4));

export const span5 = className("span-5", spanModifier(5));

export const span6 = className("span-6", spanModifier(6));

export const span7 = className("span-7", spanModifier(7));

export const span8 = className("span-8", spanModifier(8));

export const span9 = className("span-9", spanModifier(9));

export const span10 = className("span-10", spanModifier(10));

export const span11 = className("span-11", spanModifier(11));

export const span12 = className("span-12", spanModifier(12));

export const padding = className("padding", {
  display: "grid",
  minHeight: 0,
  gridTemplateRows: "minmax(0, 1fr)",
  padding: `calc((var(${gapVar}) / 2) * 1px)`,
});

export const modifierForLegacyBrowsers = className("legacy-browser", {});
