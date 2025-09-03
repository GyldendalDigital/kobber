export const kobberFigmaPluginExtensionName = "org.gyldendal.kobber-figma-export";

export const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every(item => typeof item === "string");
};
