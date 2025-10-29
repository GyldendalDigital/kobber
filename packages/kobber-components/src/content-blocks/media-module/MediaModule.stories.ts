import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import "./MediaModule";
import "../../badge-icon/BadgeIcon";
import "../../text/text-body/TextBody";
import { html, unsafeStatic } from "lit/static-html.js";
import { init as initComponents } from "../../base/init";
import { textBodyColors, textBodyColorVariants } from "../../text/text-body/TextBody.core";
import {
  mediaModuleCreditPlacementFallback,
  mediaModuleCreditPlacements,
  mediaModuleobjectFitFallback,
  mediaModuleobjectFits,
} from "./MediaModule.core";

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
    numberOfImages: {
      control: {
        type: "range",
        min: 1,
        max: 10,
      },
    },
    creditPlacement: {
      options: mediaModuleCreditPlacements,
      control: "inline-radio",
      table: {
        category: "Credit (does not show when more than 1 image)",
      },
    },
    creditText: {
      table: {
        category: "Credit (does not show when more than 1 image)",
      },
    },
    objectFit: {
      options: mediaModuleobjectFits,
      control: "inline-radio",
    },
  },
  args: {
    tallImage: true,
    color: textBodyColors[textBodyColors.length - 1],
    colorVariant: textBodyColorVariants[0],
    creditPlacement: mediaModuleCreditPlacementFallback,
    numberOfImages: 2,
    creditText: "",
    objectFit: mediaModuleobjectFitFallback,
  },
};

export default meta;
type Story = StoryObj;

const getImages = (args: Args) => {
  const numberOfImages = args.numberOfImages;
  let images: string[] = [];
  for (let i = 0; i < numberOfImages; i++)
    images = [
      ...images,
      `<img slot="media" style="object-fit: ${args.objectFit};" alt="Bokomslag: ${args.tallImage ? "Høy bok" : "Lav bok"}" src="${args.tallImage ? "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-jHT_oj28-medium.jpg?w=400&f=webp" : "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-Z9lf829L-medium.jpg?w=400&f=webp"}" />`,
    ];
  return images;
};

export const MediaModule: Story = {
  render: args => html`
    <kobber-media-module credit-placement="${args.creditPlacement}" color-variant="${args.colorVariant}">
      ${getImages(args).map(element => html`${unsafeStatic(element)}`)}
      ${args.creditPlacement === "none" ? "" : html`<span slot="credit">${args.creditText || "Foto: NTB SCANPIX"}</span>`}
      <kobber-text-body slot="description" level="p" color="${args.color}" color-variant="${args.colorVariant}" size="small">
        Under bildet har vi mulighet til å legge til en beskrivende tekst om hva bildet handler om. Teksten bør ikke overskride mer enn 2-3 linjer. (${args.color})
      </kobber-text-body>
    </kobber-media-module>
  `,
};
