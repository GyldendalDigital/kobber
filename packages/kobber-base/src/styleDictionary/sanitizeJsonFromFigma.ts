export const sanitizeJsonFromFigma = (
  jsonString: string,
  defaultModeNameFromFigma: string,
  mode: string
) => {
  // Figma exports tokens that reference one of the modes.
  // Remove the mode name from the references.
  const regExp = new RegExp(`semantic.${defaultModeNameFromFigma}`, "g");
  const replaced = jsonString.replace(regExp, "semantic");

  // Return JSON that do not include objects with mode names in them
  const json = JSON.parse(replaced);
  return {
    ...json,
    semantic: json.semantic[mode],
  };
};
