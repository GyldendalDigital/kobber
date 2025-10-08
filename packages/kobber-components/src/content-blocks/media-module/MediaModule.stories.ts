import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./MediaModule";
import "../../badge-icon/BadgeIcon";
import "../../text/text-body/TextBody";
import { html } from "lit";
import { init as initComponents } from "../../base/init";
import { textBodyColors, textBodyColorVariants } from "../../text/text-body/TextBody.core";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";

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
  },
  args: {
    showCredits: true,
    tallImage: true,
    color: textBodyColors[0],
    colorVariant: textBodyColorVariants[0],
    creditsPlacementLeft: false,
  },
};

export default meta;
type Story = StoryObj;

export const MediaModule: Story = {
  render: args => html`
    <kobber-media-module ?credits-placement-left="${args.creditsPlacementLeft}" color-variant="${args.colorVariant}">
      <img slot="media" alt="Bokomslag: ${args.tallImage ? "Høy bok" : "Lav bok"}" src="${args.tallImage ? "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-jHT_oj28-medium.jpg?w=400&f=webp" : "https://images.cdn.europe-west1.gcp.commercetools.com/b0c1af64-23c6-499f-8892-0976d37c1c31/default-Z9lf829L-medium.jpg?w=400&f=webp"}" />
      ${!args.showCredits ? "" : html`<span slot="credit">Foto: NTB SCANPIX</span>`}
      <kobber-text-body slot="description" level="p" color="${args.color}" color-variant="${args.colorVariant}">
        Under bildet har vi mulighet til å legge til en beskrivende tekst om hva bildet handler om. Teksten bør ikke overskride mer enn 2-3 linjer. (${args.color})
      </kobber-text-body>
    </kobber-media-module>
  `,
};
