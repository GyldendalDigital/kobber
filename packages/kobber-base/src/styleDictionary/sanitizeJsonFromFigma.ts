export const sanitizeJsonFromFigma = (
  jsonString: string,
  defaultModeNameFromFigma: string,
  mode: string
) => {
  let replaced = "";

  // Figma exports tokens that reference one of the modes.
  // Remove the mode name from the references.
  const regExp = new RegExp(`semantic.${defaultModeNameFromFigma}`, "g");
  replaced = jsonString.replace(regExp, "semantic");

  // Add "Inter Variable" as a fallback in font-family
  replaced = replaced.replace(
    new RegExp("Inter", "g"),
    "Inter, 'Inter Variable'"
  );

  // Return JSON that do not include objects with mode names in them
  const json = JSON.parse(replaced);
  return {
    ...json,
    semantic: json.semantic[mode],
  };
};
