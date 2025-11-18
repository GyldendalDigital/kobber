import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import "./MediaModule";
import "../../badge-icon/BadgeIcon";
import "../../text/text-body/TextBody";
import { html, unsafeStatic } from "lit/static-html.js";
import { init as initComponents } from "../../base/init";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import { textBodyColors, textBodyColorVariants } from "../../text/text-body/TextBody.core";
import {
  colorVariantFallback,
  mediaModuleCreditPlacementFallback,
  mediaModuleCreditPlacements,
} from "./MediaModule.core";
import "../content-wrapper/ContentWrapper";
import { ifDefined } from "lit/directives/if-defined.js";

initComponents();

const meta: Meta = {
  title: "Content Blocks/Media Module",
  argTypes: {
    color: {
      options: textBodyColors,
      control: "inline-radio",
    },
    colorVariant: {
      options: textBodyColorVariants,
      control: "inline-radio",
    },
    creditPlacement: {
      name: "Credit Placement (change requires refresh)",
      options: mediaModuleCreditPlacements,
      control: "inline-radio",
      table: {
        category: "Credit",
      },
    },
    creditText: {
      table: {
        category: "Credit",
      },
    },
  },
  args: {
    color: textBodyColors[textBodyColors.length - 1],
    colorVariant: textBodyColorVariants[1],
    creditPlacement: mediaModuleCreditPlacementFallback,
    creditText: "",
  },
  decorators: [
    (story, context) => {
      const { args } = context;
      return html`<kobber-content-wrapper type="page" color-variant=${ifNotDefault(args.colorVariant)}>${story()}</kobber-content-wrapper>`;
    },
  ],
};

export default meta;
type Story = StoryObj;

const ifNotDefault = (value: string) =>
  ifDefined(value === colorVariantFallback ? undefined : value);

export const MediaModule: Story = {
  render: args => html`
    <kobber-media-module credit-placement="${args.creditPlacement}" color="${args.color}" color-variant=${ifNotDefault(args.colorVariant)}>
      <img slot="media" alt="Illustrasjon: Salaby-figur" src="https://app-pnp-cms-prod.azurewebsites.net/tenants/Edu/dam/preview/Fl3vyz2xaPn8zrA0lNcR-q/previews/maxWidth_600_quality_90.jpg" />
      ${args.creditPlacement === "none" ? "" : html`<span slot="credit">${args.creditText || "Foto: NTB SCANPIX"}</span>`}
      <kobber-text-body level="p" color="${args.color}" color-variant="${ifNotDefault(invertColorVariant(args.colorVariant))}" size="small">
        Under bildet har vi mulighet til å legge til en beskrivende tekst om hva bildet handler om. Teksten bør ikke overskride mer enn 2-3 linjer. (${args.color})
      </kobber-text-body>
    </kobber-media-module>
  `,
};
