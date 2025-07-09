import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../box-layout/BoxLayout";
import "../story/ExampleCard";
import "./HorizontalLayout";
import "./HorizontalLayoutColumn";
import { exampleIrregular } from "../../carousel/story/example";
import { renderIndicators } from "./story/renderIndicators";
import { globalStyles } from "../../story/globalStyles";
import { maxColumns } from "./HorizontalLayout.config";
import { init as initComponents } from "../../base/init";

initComponents();

const meta: Meta = {
  title: "In development 🔵/Layouts/HorizontalLayout (Carousel)",
  component: "HorizontalLayout",
  decorators: [(story, storyContext) => html`<div class="${storyContext.globals.theme}">${story()}</div>`],
};

export default meta;

const render = () => html`
  <style>
    .demo {
      display: grid;
      overflow: auto;
      width: 100%;
      justify-items: center;
      --max-span: ${maxColumns};
    }

    .space-for-indicators {
      height: ${64 / 16}rem;
    }
  </style>
  <div class="demo" data-indicator-container>
    <kobber-box-layout max-width="content"> Container width: auto. </kobber-box-layout>
    <div class="space-for-indicators"></div>
    ${exampleIrregular}
  </div>
`;

const initIndicators = (canvasElement: HTMLElement) => {
  const container = canvasElement.querySelector<HTMLElement>("[data-indicator-container]");
  if (!container) return;
  renderIndicators({ container });
};

export const HorizontalLayoutStory: StoryObj = {
  name: "HorizontalLayout",
  render,
  play: ({ canvasElement }) => initIndicators(canvasElement),
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
};
