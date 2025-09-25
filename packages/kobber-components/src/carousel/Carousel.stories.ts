import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./Carousel";
import "./CarouselButton";
import "../layouts/horizontal-layout/HorizontalLayout";
import "../layouts/horizontal-layout/HorizontalLayoutColumn";
import "../story/ExampleCard";
import { obsoleteStyles } from "../story/obsoleteStyles";
import { exampleIrregular, exampleRegular, miniExample } from "./story/example";
import "../theme-context-provider/ThemeContext";
import { init as initComponents } from "../base/init";

initComponents();

interface Args {
  hasManyItems: boolean;
}

const meta: Meta<Args> = {
  title: "In development 🔵/Carousel",
  component: "Carousel",
  args: {
    hasManyItems: true,
  },
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

/**
 * 
To add buttons to the carousel, use `<kobber-carousel-button />` and set `slot` to `previous-button` or `next-button`.

`<kobber-carousel-button />` is just an extension of `<kobber-button />`, see kobber-button for supported attributes.

 */
export const CarouselStory: StoryObj<Args> = {
  name: "Regular items",
  render: args => html`
    ${styles}
    <div class="demo">
      <kobber-carousel>
        <kobber-carousel-button slot="previous-button"></kobber-carousel-button>
        <kobber-carousel-button slot="next-button"></kobber-carousel-button>
        ${args.hasManyItems ? exampleRegular : miniExample}
      </kobber-carousel>
    </div>
  `,
  decorators: [story => html`${obsoleteStyles}${story()}`],
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
  decorators: [story => html`${obsoleteStyles}${story()}`],
  parameters: { layout: "fullscreen" },
};
