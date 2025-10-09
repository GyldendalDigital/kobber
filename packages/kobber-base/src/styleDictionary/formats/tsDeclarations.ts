import type { Format } from "style-dictionary/types";
import { minifyDictionary } from "../../utils/minifyDictionary";

export const tsDeclarationsFormat: Format = {
  name: "ts-declarations/nested",
  format: ({ dictionary }) => {
    const minified = minifyDictionary(dictionary.tokens) ?? {};
    return Object.entries(minified)
      .map(([name, value]) => {
        return `export const ${name}: ${JSON.stringify(value, null, 2)};`;
      })
      .join("\n\n");
  },
};
