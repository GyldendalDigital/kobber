import type { Args, Meta, StoryObj } from "@storybook/web-components-vite";
import { customElementName as ProgressBar } from "./ProgressBar";
import { customElementName as ProgressBarItem } from "./ProgressBarItem";
import { getProficiencyNameByPercentage } from "../base/utilities/progressHelpers";
import "@gyldendal/kobber-base/themes/default/tokens.css";
import { init as initComponents } from "../base/init";

initComponents();

const meta: Meta = {
  title: "In development 🔵/Progress-Bar",
  component: "kobber-progress-bar",
  args: {
    height: "default",
  },
  argTypes: {
    height: {
      control: "inline-radio",
      options: ["default", "low"],
    },
  },
  decorators: [
    (story, storyContext) => `
    <div 
      style="display: grid; grid-template-columns: repeat(3, 200px); gap: 0.5em;"
      class="${storyContext.globals.theme}"
    >
      ${story()}
    </div>`,
  ],
};

export default meta;

type Story = StoryObj;

const composeHumanReadableValue = (progressInPercent: number) =>
  `${progressInPercent}% (${getProficiencyNameByPercentage(progressInPercent)})`;

const getProgressSuffix = (progress: number) => {
  if (progress < 20) return "...";
  if (progress < 60) return ".";
  return "!";
};

const getFillColor = (args: Args) => {
  if (!args.__progressColor) {
    return "";
  }
  if (args.__progressColor === "default") {
    return "var(--kobber-component-progressbar-color-foreground-default-primary)";
  }
  if (args.__progressColor === "unknown") {
    return "var(--kobber-regional-progress-color-foreground-unknown)";
  }
  return `var(--kobber-component-progressbar-color-foreground-${args.__progressColor})`;
};

export const Single: Story = {
  render: args => {
    const backgroundColor = `${args.__progressColor ? `var(--kobber-component-progressbar-color-background-${args.__progressColor})` : ""}`;
    const filledColor = `var(${args.__progressBarFilledColorGreen ? "--kobber-component-progressbar-color-background-good" : ""})`;

    return `
    <${ProgressBar}
      style="grid-column: 2;"
      height="${args.height}" 
      background-color="${backgroundColor}"
      >
        <${ProgressBarItem} 
          ariaLabel="Måloppnåelse"
          value-now="45"
          fill-color="${getFillColor(args)}"
          filled-color="${filledColor}"
        ></${ProgressBarItem}>
    </${ProgressBar}>

    <label style="grid-column: 2;">
      Change value
      <input type="number" value="45" class="storybook-progress-bar-value" min="0" max="100" />
    </label>

    <script>
      const valueSelector = document.querySelector(".storybook-progress-bar-value");
      const progressBarItem = document.querySelector("${ProgressBarItem}");
      valueSelector.addEventListener("change", (event) => {
        if(progressBarItem) {
          progressBarItem.setAttribute("value-now", event.target.value);
        }
      });
    </script>

    <details style="grid-column: 1/-1;">
     <summary>Why not use a storybook control?</summary>
     Because storybook re-renders stories when controls change. This creates the illusion that we don't need to observe for attribute changes.<br />
     When component is used in real life, re-rendering does not occur, and observing needs to be in place.<br />
     By using this input instead of a storybook control, we see something closer to what real-world usage looks like.
    </details>
    `;
  },
  args: {
    __progressBarFilledColorGreen: true,
    __progressColor: "default",
  },
  argTypes: {
    __progressBarFilledColorGreen: {
      table: {
        category: "First bar",
      },
    },
    __progressColor: {
      control: "select",
      options: ["default", "unknown", "low", "some", "basics", "good", "high"],
      description: "Bar color examples.",
    },
  },
};

export const Double: Story = {
  render: args => {
    return `
      <${ProgressBar}
        height="${args.height}"
        ${args.spaceBetweenBars ? "space-between-bars" : ""}
        style="grid-column: 2;"
      >
        <${ProgressBarItem} 
          ariaLabel="Første"
          value-now="${args.__progressBarFirstValue}"
        ></${ProgressBarItem}>
        <${ProgressBarItem} 
          ariaLabel="Andre" 
          value-now="${args.__progressBarSecondValue}" 
          fill-color="${getFillColor(args)}"
        ></${ProgressBarItem}>
      </${ProgressBar}>
    `;
  },
  args: {
    spaceBetweenBars: true,
    __progressBarFirstValue: 45,
    __progressBarSecondValue: 40,
    __progressColor: "low",
    height: "low",
  },
  argTypes: {
    __progressBarFirstValue: {
      name: "Value",
      description: "In reality, the sum of the bars' values will never exceed 100&nbsp;%.",
      control: { type: "range", min: 0, max: 100 },
      table: {
        category: "First bar",
      },
    },
    __progressBarSecondValue: {
      name: "Value",
      control: { type: "range", min: 0, max: 100 },
      table: {
        category: "Second bar",
      },
    },
    __progressColor: {
      control: "select",
      options: ["default", "unknown", "low", "some", "basics", "good", "high"],
      table: {
        category: "Second bar",
      },
    },
  },
};

/**
 * A special use case, where there is just one bar, and the background should match the bar's color.
 */
export const Proficiency: Story = {
  args: {
    __progressBarFirstValue: 45,
  },
  argTypes: {
    height: {
      table: {
        disable: true,
      },
    },
  },
  render: args => `
    <p
      style="grid-column: 2;"
    >
      Progress:
      ${composeHumanReadableValue(args.__progressBarFirstValue) + getProgressSuffix(args.__progressBarFirstValue)}
    </p>
    <${ProgressBar}
      style="grid-column: 2;"
      background-color="var(--kobber-component-progressbar-color-background-${getProficiencyNameByPercentage(
        args.__progressBarFirstValue,
      )})"
    >
      <${ProgressBarItem} 
        ariaLabel="Progress"
        explainOtherUnitThanPercentage="${composeHumanReadableValue(args.__progressBarFirstValue)}"
        value-now="${args.__progressBarFirstValue}"
        fill-color="var(--kobber-component-progressbar-color-foreground-${getProficiencyNameByPercentage(args.__progressBarFirstValue)})"
      ></${ProgressBarItem}>
    </${ProgressBar}>`,
};
