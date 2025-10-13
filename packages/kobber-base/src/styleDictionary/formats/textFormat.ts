import type { Format } from "style-dictionary/types";

/** Lists all token names sorted alphabetically for easier overview */
export const textFormat: Format = {
  name: "text",
  format: ({ dictionary }) => {
    const tokens = dictionary.allTokens
      .map(token => token.path.join("."))
      .sort((a, b) => a.localeCompare(b));

    return tokens.join("\n");
  },
};
