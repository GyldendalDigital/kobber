import { ArgsStoryFn } from "@storybook/types";
import type { Meta, StoryObj } from "@storybook/web-components";
import { WebComponentsRenderer } from "@storybook/web-components";
import { html } from "lit";
import "../box-layout/BoxLayout";
import { example as cardLayoutExample } from "../card-layout/story/example";
import {
  exampleRegular as carouselExampleRegular,
  miniExample as carouselExampleMini,
} from "../../carousel/story/example";
import "../story/ExampleSurface";
import { globalStyles } from "../../story/globalStyles";

interface Args {
  carouselHasManyItems: boolean;
}

const meta: Meta<Args> = {
  component: "Patterns",
  args: {
    carouselHasManyItems: true,
  },
  decorators: [(story, storyContext) => html`<div class="${storyContext.globals.theme}">${story()}</div>`],
};

export default meta;

const render: ArgsStoryFn<WebComponentsRenderer, Args> = args => {
  return html`
    <style>
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        min-width: 320px;
      }

      .demo {
        display: grid;
        width: 80%;
        justify-items: center;
        grid-template-columns: 100%;
        margin: auto;
      }
    </style>
    <div class="demo">
      <kobber-box-layout max-width="fixed-page-header">
        <kobber-example-surface>Header</kobber-example-surface>
      </kobber-box-layout>
      <kobber-box-layout max-width="content">Content</kobber-box-layout>
      <div class="space-for-indicators"></div>
      ${cardLayoutExample}
      <kobber-box-layout max-width="content">Carousel</kobber-box-layout>
      <kobber-carousel> ${args.carouselHasManyItems ? carouselExampleRegular : carouselExampleMini} </kobber-carousel>
      <kobber-box-layout max-width="content">More content</kobber-box-layout>
      ${cardLayoutExample}
    </div>
  `;
};

export const GridStory: StoryObj<Args> = {
  render,
  name: "Page",
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
};
