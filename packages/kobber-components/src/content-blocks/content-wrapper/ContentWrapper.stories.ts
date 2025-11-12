import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { textModuleColors } from "../text-module/TextModule.core";
import "../components/text-block/TextBlock";
import "../media-module/MediaModule";
import "../components/content-top-block/ContentTopBlock";
import "./ContentWrapper";
import "../../badge-icon/BadgeIcon";
import "../../text/lead/Lead";
import "../../text/heading/Heading";
import "../../text/title/Title";
import "../../text/text-body/TextBody";
import "../../text/text-list/TextList";
import "../../text/text-list-element/TextListElement";
import { html, unsafeStatic } from "lit/static-html.js";
import "../../theme-context-provider/ThemeContext";
import "@gyldendal/kobber-icons/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { ifDefined } from "lit/directives/if-defined.js";
import { init as initComponents } from "../../base/init";
import { invertColorVariant } from "../../base/utilities/invertColorVariant";
import { mappedColor, nestedList, nestedTextModule } from "../../story/snippets";
import { contentWrapperColorVariants, contentWrapperTypes } from "./ContentWrapper.core";

initComponents();
initIcons();

const meta: Meta = {
  title: "Content Blocks/Content Wrapper",
  argTypes: {
    color: {
      options: textModuleColors,
      control: { type: "inline-radio" },
    },
    colorVariant: {
      options: contentWrapperColorVariants,
      control: { type: "inline-radio" },
    },
    imageType: {
      name: "Image type (may require refresh and url manipulation)",
      options: ["narrow image", "wide image", "video"],
      control: "inline-radio",
      table: {
        category: "Media Module",
      },
    },
    numberOfImages: {
      name: "Number of images (does not apply to video)",
      control: {
        type: "range",
        min: 1,
        max: 3,
      },
      table: {
        category: "Media Module",
      },
    },
    showBadge: {
      name: "Show Badge",
      table: {
        category: "Top Block",
      },
    },
    showHeading: {
      name: "Show Heading",
      table: {
        category: "Top Block",
      },
    },
    showLead: {
      name: "Show Lead",
      table: {
        category: "Top Block",
      },
    },
    showHeadingText: {
      name: "Show Text",
      table: {
        category: "Top Block",
      },
    },
    showMediaModule: {
      table: {
        category: "Media Module",
      },
    },
    type: {
      options: contentWrapperTypes,
      control: { type: "inline-radio" },
    },
  },
  args: {
    color: textModuleColors[0],
    colorVariant: undefined,
    imageType: "wide image",
    numberOfImages: 1,
    showBadge: true,
    showLead: true,
    showHeading: true,
    showHeadingText: true,
    showTextModule: false,
    showMediaModule: false,
    showList: true,
    type: undefined,
  },
  decorators: [(story, _) => html`<div style="height: 96vh">${story()}</div>`], // Emulates usage in content-templates.
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

export const ContentWrapper: Story = {
  render: args => html`
    <kobber-content-wrapper 
      color="${mappedColor(args)}"
      color-variant=${ifDefined(args.colorVariant)}
      type=${ifDefined(args.type)}
    >
      <kobber-content-top-block>
        ${
          !args.showBadge
            ? ""
            : html`
        <kobber-badge-icon color-theme="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <kobber-pencil slot="icon"></kobber-pencil>
          Content Wrapper
        </kobber-badge-icon>
          `
        }
      ${
        !args.showHeading
          ? ""
          : html`   <kobber-heading color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">A long heading that appears in top block</kobber-heading>`
      }
      ${
        !args.showLead
          ? ""
          : html`   <kobber-lead color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">A lead that appears in top block</kobber-lead>`
      }
      ${
        !args.showHeadingText
          ? ""
          : html`   <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
            <p>Heading text: First paragraph here. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</p>
            <p>Second paragraph here. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing el it.</p>
          </kobber-text-body>
          `
      }
      </kobber-content-top-block>

      ${
        args.showMediaModule
          ? html`<kobber-media-module color="${ifDefined(args.color)}" color-variant="${ifDefined(args.colorVariant)}">
        ${getImages(args).map(element => html`${unsafeStatic(element)}`)}
        <span slot="credit">Foto: NTB SCANPIX</span>
        <kobber-text-body level="p" color="${ifDefined(args.color)}" color-variant="${invertColorVariant(args.colorVariant)}">
          Under bildet har vi mulighet til å legge til en beskrivende tekst om hva bildet handler om. Teksten bør ikke overskride mer enn 2-3 linjer. (${args.color})
        </kobber-text-body>
      </kobber-media-module>`
          : ""
      }
      
      <kobber-text-block>
        <kobber-title color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}" size="large">Title L</kobber-title>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <p>One paragraph here. Lorem ipsum dolor sit amet, consectetur adipiscing el it. (${args.color})</p>
        </kobber-text-body>
      </kobber-text-block>
      ${args.showTextModule ? nestedTextModule(args) : ""}
      <kobber-text-block>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <p>Another one paragraph here.</p>
        </kobber-text-body>
      </kobber-text-block>
      ${args.showList ? nestedList(args) : ""}
      <kobber-text-block>
        <kobber-text-body color="${mappedColor(args)}" color-variant="${invertColorVariant(args.colorVariant)}">
          <p>Another one paragraph here.</p>
        </kobber-text-body>
      </kobber-text-block>
    </kobber-content-wrapper>
  `,
};
