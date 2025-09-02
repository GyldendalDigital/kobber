import { transformTypes } from "style-dictionary/enums";
import type { Transform } from "style-dictionary/types";

/** Makes dimension tokens with "number" as description into type number  */
export const dimensionToNumberOverrideTransform: Transform = {
  name: "dimensionToNumberOverride",
  type: transformTypes.attribute,
  filter: token => token.type === "dimension" && token.description === "number",
  transform: token => {
    token.type = "number";
    return token;
  },
};
