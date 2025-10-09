import type { Format } from "style-dictionary/types";
import { minifyDictionary } from "../../utils/minifyDictionary";

/** @deprecated Use the built-in JSON format instead: https://styledictionary.com/reference/hooks/formats/predefined/#jsonnested */
export const jsonFormat: Format = {
  name: "json/nested-v2",
  format: ({ dictionary }) => {
    const minified = minifyDictionary(dictionary.tokens);
    return JSON.stringify(minified, null, 2);
  },
};
