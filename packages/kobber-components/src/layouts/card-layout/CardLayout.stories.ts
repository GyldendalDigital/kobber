import type { Meta, StoryObj } from "@storybook/web-components";
import { TemplateResult, html } from "lit";
import "../box-layout/BoxLayout";
import "../story/ExampleCard";
import "./CardLayout";
import "./CardLayoutColumnAspectRatio";
import { example } from "./story/example";
import { example6columns } from "./story/example6columns";
import { renderIndicators } from "./story/renderIndicators";
import Wiki from "./CardLayoutWiki.mdx";
import { globalStyles } from "../../story/globalStyles";

interface Args {
  overrideContainerWidth: boolean;
  containerWidth: number;
  cardHtml: TemplateResult;
}

const initIndicators = (canvasElement: HTMLElement) => {
  const container = canvasElement.querySelector<HTMLElement>("[data-indicator-container]");
  if (!container) return;
  renderIndicators({ container });
};

const meta: Meta<Args> = {
  title: "GU/Layouts/CardLayout",
  component: "CardLayout",
  tags: ["autodocs"],
  argTypes: {
    overrideContainerWidth: {
      name: "Override container width",
      control: "boolean",
    },
    containerWidth: {
      name: "Container element width",
      control: { type: "range", min: 0, max: 1600, step: 16 },
    },
  },
  play: ({ canvasElement }) => initIndicators(canvasElement),
  parameters: {
    docs: {
      page: Wiki,
    },
    layout: "fullscreen",
    overrideContainerWidth: false,
    containerWidth: 800,
  },
  decorators: [story => html`${globalStyles}${story()}`],
};

export default meta;

const render = ({ cardHtml, overrideContainerWidth, containerWidth }: Args) => html`
  <style>
    .demo {
      display: grid;
      width: 100%;
      justify-items: center;
      width: ${overrideContainerWidth ? `${containerWidth / 16}rem` : "auto"};
      outline: ${overrideContainerWidth ? "solid 1px black" : "none"};
    }

    .space-for-indicators {
      height: ${64 / 16}rem;
    }
  </style>
  <div class="demo" data-indicator-container>
    <kobber-box-layout max-width="content">
      Container width: ${overrideContainerWidth ? `${containerWidth}px` : "auto"}
    </kobber-box-layout>
    <div class="space-for-indicators"></div>
    ${cardHtml}
  </div>
`;

export const CardLayoutStory: StoryObj<Args> = {
  name: "CardLayout",
  render,
  args: { cardHtml: example },
};

export const CardLayout6ColumnStory: StoryObj<Args> = {
  name: "CardLayout 6 columns",
  render,
  args: { cardHtml: example6columns },
};
