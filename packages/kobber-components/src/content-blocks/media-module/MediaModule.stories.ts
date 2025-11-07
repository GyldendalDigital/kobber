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
    imageType: {
      options: ["narrow image", "wide image", "video"],
      control: "inline-radio",
    },
    numberOfImages: {
      name: "Number of images (does not apply to video)",
      control: {
        type: "range",
        min: 1,
        max: 3,
      },
    },
    creditPlacement: {
      name: "Credit Placement (change requires refresh)",
      options: mediaModuleCreditPlacements,
      control: "inline-radio",
      table: {
        category: "Credit (does not show on video or when more than 1 image)",
      },
    },
    creditText: {
      table: {
        category: "Credit (does not show on video or when more than 1 image)",
      },
    },
  },
  args: {
    imageType: "narrow image",
    color: textBodyColors[textBodyColors.length - 1],
    colorVariant: textBodyColorVariants[1],
    creditPlacement: mediaModuleCreditPlacementFallback,
    numberOfImages: 1,
    creditText: "",
  },
};

export default meta;
type Story = StoryObj;

const getImages = (args: Args) => {
  const numberOfImages = args.numberOfImages;
  let images: string[] = [];
  if (args.imageType === "video") {
    images = [
      `<video slot="media" controls>
      <source src="https://player.gyldendaldigital.vimeo.work/video/657710517?title=0&controls=0&dnt=1&app_id=122963" type="video/mp4">
      Your browser does not support the video tag.
    </video>`,
    ];
    return images;
  }
  for (let i = 0; i < numberOfImages; i++)
    images = [
      ...images,
      `<img slot="media" alt="Bokomslag: ${args.imageType === "narrow image" ? "Høy bok" : "Lav bok"}" src="${args.imageType === "narrow image" ? "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-jHT_oj28-medium.jpg?w=400&f=webp" : "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-Z9lf829L-medium.jpg?w=400&f=webp"}" />`,
    ];
  return images;
};

const ifNotDefault = (value: string) =>
  ifDefined(value === colorVariantFallback ? undefined : value);

export const MediaModule: Story = {
  render: args => html`
    <kobber-content-wrapper color-variant=${ifNotDefault(args.colorVariant)} type="page">
      <kobber-media-module credit-placement="${args.creditPlacement}" color="${args.color}" color-variant=${ifNotDefault(invertColorVariant(args.colorVariant))}>
        ${getImages(args).map(element => html`${unsafeStatic(element)}`)}
        ${args.creditPlacement === "none" ? "" : html`<span slot="credit">${args.creditText || "Foto: NTB SCANPIX"}</span>`}
        <kobber-text-body level="p" color="${args.color}" color-variant="${ifNotDefault(args.colorVariant)}" size="small">
          Under bildet har vi mulighet til å legge til en beskrivende tekst om hva bildet handler om. Teksten bør ikke overskride mer enn 2-3 linjer. (${args.color})
        </kobber-text-body>
      </kobber-media-module>
    </kobber-content-wrapper>
  `,
};
