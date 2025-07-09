import { mediaQuery } from "@gyldendal/kobber-base/themes/default/tokens.js";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Grid";
import "./GridColumn";
import "./GridColumnAspectRatio";
import { gridConfigs } from "./Grid.config";
import { GridConfigId } from "./config/types";
import "./story/ExampleCard";
import { renderIndicators } from "./story/renderIndicators";
import { globalStyles } from "../story/globalStyles";
import { init as initComponents } from "../base/init";

initComponents();

const gridConfigArray = Object.values(gridConfigs);

const gridConfigIds = gridConfigArray.map(({ id }) => id);

const meta: Meta = {
  title: "In development 🔵/Layouts/Grid",
  component: "kobber-grid",
  argTypes: {
    gridConfig: {
      name: "gridConfig",
      control: "select",
      options: gridConfigIds,
    },
  },
};

export default meta;

type Args = { gridConfig?: GridConfigId };
type Story = StoryObj<Args>;

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

const render = (args: Args) => {
  document.addEventListener("DOMContentLoaded", () => renderIndicators());

  return html`
    <style>
      .demo {
        padding-top: 64px;
      }
    </style>

    <div class="demo">
      <kobber-grid config="${args.gridConfig}">
        <kobber-grid-column-aspect-ratio span="2">
          <kobber-grid-example-card badge="1" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card badge="2" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card badge="3" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card badge="4" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card badge="5" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio span="2">
          <kobber-grid-example-card badge="6" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card badge="7" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card badge="8" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card badge="9" image="${placeholderImage}" heading="Lorem ipsum" body="Dolor sit amet" />
        </kobber-grid-column-aspect-ratio>
        <kobber-grid-column-aspect-ratio>
          <kobber-grid-example-card
            badge="10"
            image="${placeholderImage}"
            heading="Lorem ipsum"
            body="Dolor sit amet"
          />
        </kobber-grid-column-aspect-ratio>
      </kobber-grid>

      <kobber-grid
        grid-template-columns="${JSON.stringify({
          [mediaQuery.small]: "repeat(4, 1fr)",
          [mediaQuery.medium]: "repeat(6, 1fr)",
          [mediaQuery.large]: "repeat(12, 1fr)",
        })}"
      >
        <kobber-grid-column> Column 1 </kobber-grid-column>
        <kobber-grid-column> Column 2 </kobber-grid-column>
        <kobber-grid-column> Column 3 </kobber-grid-column>
      </kobber-grid>
    </div>
  `;
};

export const GridStory: Story = {
  render,
  name: "Grid",
  decorators: [story => html`${globalStyles}${story()}`],
  parameters: { layout: "fullscreen" },
  args: { gridConfig: gridConfigIds[0] },
};
