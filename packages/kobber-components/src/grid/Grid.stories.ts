import { ArgsStoryFn } from "@storybook/types";
import type { Meta, StoryObj } from "@storybook/web-components";
import { WebComponentsRenderer } from "@storybook/web-components";
import { html } from "lit";
import "./Grid";
import "./GridColumn";
import "./GridColumnAspectRatio";
import { gridConfigs } from "./gridConfig";
import "./story/ExampleCard";

const gridConfigArray = Object.values(gridConfigs);

const gridConfigIds = gridConfigArray.map(({ id }) => id);

const meta: Meta = {
  component: "kobber-grid",
  tags: ["autodocs"],
  argTypes: {
    gridConfig: {
      name: "gridConfig",
      control: "select",
      options: gridConfigIds,
    },
  },
};

export default meta;
type Story = StoryObj;

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

const render: ArgsStoryFn<WebComponentsRenderer> = args => {
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
    </style>

    <div class="demo">
      <kobber-grid config="${args.gridConfig}">
        <kobber-grid-column-aspect-ratio span="2">
          <kobber-example-card badge="1" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="2" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="3" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="4" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="5" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio span="2">
          <kobber-example-card badge="6" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="7" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="8" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="9" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-example-card badge="10" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
      </kobber-grid>
    </div>
  `;
};

export const GridStory: Story = {
  render,
  parameters: { layout: "fullscreen" },
};
