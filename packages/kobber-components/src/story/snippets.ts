import type { Args } from "@storybook/web-components-vite";
import "../content-blocks/text-module/TextModule";
import "@gyldendal/kobber-icons/web-components";
import { ifDefined } from "lit/directives/if-defined.js";
import "../badge-icon/BadgeIcon";
import "../text/text-body/TextBody";
import "../text/text-list/TextList";
import "../text/text-list-element/TextListElement";
import "@gyldendal/kobber-icons/web-components";

export const mappedColor = (args: Args) => {
  if (args.color === "transparent") {
    return "neutral";
  }
  return args.color;
};
