import { Format, Named } from "style-dictionary";
import { minifyDictionary } from "../../utils/minifyDictionary";

export const tsDeclarationsFormat: Named<Format> = {
  name: "ts-declarations/nested",
  formatter: ({ dictionary }) => {
    const minified = minifyDictionary(dictionary.tokens) ?? {};
    return Object.entries(minified)
      .map(([name, value]) => {
        return `export const ${name}: ${JSON.stringify(value, null, 2)};`;
      })
      .join("\n\n");
  },
};
