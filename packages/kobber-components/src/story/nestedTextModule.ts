import type { Args } from "@storybook/web-components-vite";
import "../content-blocks/text-module/TextModule";
import "@gyldendal/kobber-icons/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { invertColorVariant } from "../base/utilities/invertColorVariant";

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
