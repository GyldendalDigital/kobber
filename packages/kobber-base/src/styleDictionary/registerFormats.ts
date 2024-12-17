import StyleDictionary from "style-dictionary";
import type { Format } from "style-dictionary/types";

export const registerFormats = (formats: Format[]) => {
  formats.forEach(f => StyleDictionary.registerFormat(f));
  console.log(`Formats registered: ${formats.map(f => f.name).join(", ")}`);
};
