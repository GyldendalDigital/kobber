import { Format, Named } from "style-dictionary";
import { minifyDictionary } from "../../utils/minifyDictionary";

export const jsonFormat: Named<Format> = {
  name: "json/nested-v2",
  formatter: ({ dictionary, options }) => {
    const minified = minifyDictionary(dictionary.tokens);
    return JSON.stringify(minified, null, 2);
  },
};
