import { Format } from "style-dictionary/types";
import { minifyDictionary } from "../../utils/minifyDictionary";

export const jsonFormat: Format = {
  name: "json/nested-v2",
  format: ({ dictionary }) => {
    const minified = minifyDictionary(dictionary.tokens);
    return JSON.stringify(minified, null, 2);
  },
};
