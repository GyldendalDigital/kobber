import { ThemeConfig } from "../types";

export const sanitizeJsonFromFigma = (tokensFromFigmaString: string, themeConfig: ThemeConfig) => {
  let replaced = "";

  // Figma exports tokens that reference one of the modes.
  // Remove the mode name from the references.
  replaced = tokensFromFigmaString.replace(new RegExp(`primitives.${themeConfig.figmaMode}`, "g"), "primitives");
  replaced = replaced.replace(new RegExp(`semantics.${themeConfig.figmaMode}`, "g"), "semantics");

  // Add "Inter Variable" as a fallback in font-family
  replaced = replaced.replace(new RegExp("Inter", "g"), "Inter, 'Inter Variable'");

  // Return JSON that do not include objects with mode names in them
  const json = JSON.parse(replaced);

  // Missing references (remove when fixed)
  // json.semantics.action.border = {
  //   radius: {
  //     xxsmall: {
  //       type: "dimension",
  //       value: 0,
  //     },
  //   },
  // };
  // json.primitives.border = {
  //   [10]: {
  //     type: "dimension",
  //     value: 0,
  //   },
  // };

  console.log(`Sanitized tokens name=${themeConfig.themeName} mode=${themeConfig.figmaMode}`);

  return {
    ...json,
    // semantics: json.semantics[mode], // Figma with only one mode does not create a mode level
  };
};
