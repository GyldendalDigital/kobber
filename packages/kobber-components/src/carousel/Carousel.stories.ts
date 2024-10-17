import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Carousel";
import "../layouts/horizontal-layout/HorizontalLayout";
import "../layouts/horizontal-layout/HorizontalLayoutColumn";
import "../story/ExampleCard";
import { globalStyles } from "../story/globalStyles";
import { exampleIrregular, exampleRegular, miniExample } from "./story/example";

interface Args {
  hasManyItems: boolean;
}

const meta: Meta<Args> = {
  component: "Carousel",
  tags: ["autodocs"],
  args: {
    hasManyItems: true,
  },
  decorators: [(story, storyContext) => html`<div class="${storyContext.globals.theme}">${story()}</div>`],
};

export default meta;

const styles = html`<style>
  .demo {
    display: grid;
    width: 80%;
    position: relative;
    margin: auto;
  }
</style>`;

export const CarouselStory: StoryObj<Args> = {
  name: "Regular items",
  render: args => html`
    ${styles}
    <div class="demo">
      <kobber-carousel> ${args.hasManyItems ? exampleRegular : miniExample} </kobber-carousel>
    </div>
  `,
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
};

export const IrregularCarouselStory: StoryObj<Args> = {
  name: "Irregular items",
  render: args => html`
    ${styles}
    <div class="demo">
      <kobber-carousel> ${args.hasManyItems ? exampleIrregular : miniExample} </kobber-carousel>
    </div>
  `,
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
};
