import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import { ArgsStoryFn } from "@storybook/types";
import type { Meta, StoryObj } from "@storybook/web-components";
import { WebComponentsRenderer } from "@storybook/web-components";
import { html, unsafeCSS } from "lit";
import "./BoxLayout";
import Wiki from "./BoxLayoutWiki.mdx";
import "../../utils/theme-context";
import { BoxLayoutMaxWidth } from "./settings";

const validMaxWidths = Object.values(BoxLayoutMaxWidth);

interface Args {
  maxWidth: BoxLayoutMaxWidth;
  source?: string;
}

const meta: Meta<Args> = {
  title: "layouts/BoxLayout",
  component: "BoxLayout",
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      page: Wiki,
    },
    layout: "fullscreen",
  },
  decorators: [
    (story, storyContext) =>
      html`<kobber-theme-context theme-id=${storyContext.globals.theme} class=${storyContext.globals.theme}
        >${story()}</kobber-theme-context
      >`,
  ],
};

export default meta;

const render: ArgsStoryFn<WebComponentsRenderer, Args> = () => html`
  <style>
    kobber-box-layout.example {
      background-color: ${unsafeCSS(tokens.primitives.color.lawblue[10])};
    }

    .content {
      background-color: ${unsafeCSS(tokens.primitives.color.lawblue[50])};
      color: white;
      min-height: 64px;
    }
  </style>
  ${validMaxWidths.map(
    maxWidth =>
      html`<kobber-box-layout max-width="${maxWidth}">${maxWidth}</kobber-box-layout>
        <kobber-box-layout max-width="${maxWidth}" class="example">
          <div class="content"></div>
        </kobber-box-layout>`,
  )}
  <kobber-box-layout max-width="content">content with custom padding-block</kobber-box-layout>
  <kobber-box-layout
    max-width="content"
    class="example"
    padding-block=${unsafeCSS(tokens.primitives.size[128] / 16) + "rem"}
  >
    <div class="content"></div>
  </kobber-box-layout>
`;

export const BoxLayoutStory: StoryObj<Args> = {
  name: "BoxLayout",
  render: (args, context) => render(args, context as any),
};
