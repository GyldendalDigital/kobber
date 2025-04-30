import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Carousel";
import "./CarouselButton";
import "../layouts/horizontal-layout/HorizontalLayout";
import "../layouts/horizontal-layout/HorizontalLayoutColumn";
import "../story/ExampleCard";
import { globalStyles } from "../story/globalStyles";
import { exampleIrregular, exampleRegular, miniExample } from "./story/example";
import "../utils/theme-context";

interface Args {
  hasManyItems: boolean;
}

const meta: Meta<Args> = {
  title: "In development 🧪/Carousel",
  component: "Carousel",
  args: {
    hasManyItems: true,
  },
  decorators: [
    (story, storyContext) =>
      html`<kobber-theme-context theme-id=${storyContext.globals.theme}>${story()}</kobber-theme-context>`,
  ],
};

export default meta;

const styles = html`<style>
  .demo {
    display: grid;
    width: 80%;
    min-height: 320px;
    position: relative;
    margin: auto;
  }
</style>`;

export const CarouselStory: StoryObj<Args> = {
  name: "Regular items",
  render: args => html`
    ${styles}
    <div class="demo">
      <kobber-carousel>
        <kobber-carousel-button slot="previous-button" variant="brand-secondary-main"></kobber-carousel-button>
        <kobber-carousel-button slot="next-button" variant="brand-secondary-main"></kobber-carousel-button>
        ${args.hasManyItems ? exampleRegular : miniExample}
      </kobber-carousel>
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
