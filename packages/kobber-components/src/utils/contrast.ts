import { isValidColor, parseToRgb } from "./color";

export interface SafeColorOptions {
  backgroundColor: string;
  textColor: string;
  adjustmentStrategy?: "adjustTextColor" | "adjustBackgroundColor";
  textColorAlternative?: string;
  isLargeFont?: boolean;
  complianceLevel?: "AA" | "AAA";
}

const defaultTextColor = "#000000";
const defaultBackgroundColor = "#ffffff";

/** Returns same colors if WCAG complicant, or adjusted colors if not */
export const getContrastCompliantColors = ({
  backgroundColor,
  textColor,
  textColorAlternative,
  adjustmentStrategy = "adjustTextColor",
  isLargeFont = false,
  complianceLevel = "AA",
}: SafeColorOptions): { textColor: string; backgroundColor: string } => {
  textColor = isValidColor(textColor) ? textColor : defaultTextColor;
  backgroundColor = isValidColor(backgroundColor) ? backgroundColor : defaultBackgroundColor;

  // test main colors
  if (isContrastCompliant(backgroundColor, textColor, isLargeFont, complianceLevel)) {
    return { backgroundColor, textColor };
  }

  // test alternative text color
  if (
    textColorAlternative &&
    isContrastCompliant(backgroundColor, textColorAlternative, isLargeFont, complianceLevel)
  ) {
    return { backgroundColor, textColor: textColorAlternative };
  }

  // make adjustments to main colors
  switch (adjustmentStrategy) {
    case "adjustBackgroundColor":
      return isContrastCompliant(defaultBackgroundColor, textColor, isLargeFont, complianceLevel)
        ? { backgroundColor: defaultBackgroundColor, textColor }
        : { backgroundColor: defaultTextColor, textColor };
    case "adjustTextColor":
      return isContrastCompliant(backgroundColor, defaultTextColor, isLargeFont, complianceLevel)
        ? { backgroundColor, textColor: defaultTextColor }
        : { backgroundColor, textColor: defaultBackgroundColor };
  }
};

/**
 * WCAG
 * {@link https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast | minimum contrast}
 * @param isLargeFont: 18pt or 14pt bold
 */
const isContrastCompliant = (
  color1: string,
  color2: string,
  isLargeFont: boolean,
  complianceLevel: "AA" | "AAA" = "AA",
) => {
  const contrastRatio = getContrast(color1, color2);
  return {
    AA: isLargeFont ? contrastRatio >= 3 : contrastRatio >= 4.5,
    AAA: isLargeFont ? contrastRatio >= 4.5 : contrastRatio >= 7,
  }[complianceLevel];
};

/**
 * WCAG
 * {@link https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef | contrast ratio}
 */
export const getContrast = (color1: string, color2: string) => {
  if (color1 === color2) return 1;
  if (!isValidColor(color1) || !isValidColor(color2)) return 1;

  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);

  return parseFloat(
    (luminance1 > luminance2
      ? (luminance1 + 0.05) / (luminance2 + 0.05)
      : (luminance2 + 0.05) / (luminance1 + 0.05)
    ).toFixed(2),
  );
};

/**
 * WCAG
 * {@link https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef | relative luminance}
 */
const getLuminance = (color: string) => {
  if (color === "transparent") return 0;
  const rgbColor = parseToRgb(color);
  const [r, g, b] = Object.keys(rgbColor).map(key => {
    const channel = rgbColor[key as keyof typeof rgbColor] / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
};
