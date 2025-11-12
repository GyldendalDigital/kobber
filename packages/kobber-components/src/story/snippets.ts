import type { Args } from "@storybook/web-components-vite";
import "../content-blocks/text-module/TextModule";
import "@gyldendal/kobber-icons/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { invertColorVariant } from "../base/utilities/invertColorVariant";
import "../badge-icon/BadgeIcon";
import "../text/text-body/TextBody";
import "../text/text-list/TextList";
import "../text/text-list-element/TextListElement";
import "@gyldendal/kobber-icons/web-components";

export const nestedTextModule = (args: Args) => {
  return html`
      <kobber-text-module color="${ifDefined(args.color)}" color-variant="${invertColorVariant(args.colorVariant)}">
        <kobber-badge-icon slot="badge" color-theme="${ifDefined(args.color)}" color-variant="${args.colorVariant}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Visste du?
        </kobber-badge-icon>
        <kobber-text-body color="${ifDefined(args.color)}" color-variant="${args.colorVariant}">Body text here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. Ut et massa mi. (${args.color})</kobber-text-body>
      </kobber-text-module>
  `;
};

export const nestedList = (args: Args) => {
  const size = "medium";
  return html`
    <kobber-text-list size="${size}" color="${mappedColor(args)}" color-variant=${invertColorVariant(args.colorVariant)}>
      <kobber-text-list-element>
        Punkt
        <kobber-text-list slot="nested" size="${size}">
          <kobber-text-list-element>
            Underpunkt
          </kobber-text-list-element>
          <kobber-text-list-element>
            Underpunkt
          </kobber-text-list-element>
          <kobber-text-list-element>
            Underpunkt
          </kobber-text-list-element>
        </kobber-text-list>
      </kobber-text-list-element>
    </kobber-text-list>
`;
};

export const mappedColor = (args: Args) => {
  if (args.color === "transparent") {
    return "neutral";
  }
  return args.color;
};
