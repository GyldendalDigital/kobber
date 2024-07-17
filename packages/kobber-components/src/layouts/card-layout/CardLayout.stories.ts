import { ArgsStoryFn } from "@storybook/types";
import type { Meta, StoryObj } from "@storybook/web-components";
import { WebComponentsRenderer } from "@storybook/web-components";
import { html } from "lit";
import "../box/Box";
import "../story/ExampleCard";
import "./CardLayout";
import "./CardLayoutColumnAspectRatio";
import { example } from "./story/example";
import { renderIndicators } from "./story/renderIndicators";
import Wiki from "./CardLayoutWiki.mdx";
import { globalStyles } from "../story/globalStyles";

interface Args {
  overrideContainerWidth: boolean;
  containerWidth: number;
}

const meta: Meta<Args> = {
  title: "layouts/CardLayout",
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
  parameters: {
    docs: {
      page: Wiki,
    },
  },
};

export default meta;

const render: ArgsStoryFn<WebComponentsRenderer, Args> = ({ overrideContainerWidth, containerWidth }) => html`
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
    <kobber-box max-width="content">
      Container width: ${overrideContainerWidth ? `${containerWidth}px` : "auto"}
    </kobber-box>
    <div class="space-for-indicators"></div>
    ${example}
  </div>
`;

const initIndicators = (canvasElement: HTMLElement) => {
  const container = canvasElement.querySelector<HTMLElement>("[data-indicator-container]");
  if (!container) return;
  renderIndicators({ container });
};

export const CardLayoutStory: StoryObj<Args> = {
  name: "CardLayout",
  render,
  play: ({ canvasElement }) => initIndicators(canvasElement),
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
  args: {
    overrideContainerWidth: false,
    containerWidth: 800,
  },
};
