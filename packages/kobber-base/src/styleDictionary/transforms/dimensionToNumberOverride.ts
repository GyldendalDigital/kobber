import { transformTypes } from "style-dictionary/enums";
import type { Transform } from "style-dictionary/types";

/** Turns tokens with type "dimension" and description "number" into type number  */
export const dimensionToNumberOverrideTransform: Transform = {
  name: "dimensionToNumberOverride",
  type: transformTypes.attribute,
  filter: token => token.type === "dimension" && token.description === "number",
  transform: token => {
    token.type = "number";
    return token;
  },
};
