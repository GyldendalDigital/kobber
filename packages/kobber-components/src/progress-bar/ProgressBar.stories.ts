import type { Args, Meta, StoryObj } from "@storybook/web-components";
import { customElementName as ProgressBar } from "./ProgressBar";
import { customElementName as ProgressBarItem } from "./ProgressBarItem";
import { getProficiencyNameByPercentage } from "../utils/progressHelpers";
import "@gyldendal/kobber-base/themes/default/tokens.css";

const meta: Meta = {
  title: "Progress-Bar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    __progressBarFirstValue: 45,
    height: "default",
  },
  argTypes: {
    height: {
      control: "inline-radio",
      options: ["default", "low"],
    },
    __progressBarFirstValue: {
      name: "Value",
      description: "In reality, the sum of the bars' values will never exceed 100&nbsp;%.",
      control: { type: "range", min: 0, max: 100 },
      table: {
        category: "First bar",
      },
    },
  },
  decorators: [
    (story, storyContext) => `
    <div 
      style="display: grid; grid-template-columns: repeat(3, 200px)"
      class="${storyContext.globals.theme}"
    >
      ${story()}
    </div>`,
  ],
};

export default meta;

type Story = StoryObj;

const labelledById = "aria-progress-id";

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
    return "var(--kobber-semantic-progress-color-foreground-unknown)";
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
          value-now="${args.__progressBarFirstValue}"
          fill-color="${getFillColor(args)}"
          filled-color="${filledColor}"
        ></${ProgressBarItem}>
    </${ProgressBar}>
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
    __progressBarSecondValue: 40,
    __progressColor: "low",
    height: "low",
  },
  argTypes: {
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
    <span id="${labelledById}">
      Progress:</span>
      <span>
      ${composeHumanReadableValue(args.__progressBarFirstValue) + getProgressSuffix(args.__progressBarFirstValue)}
      </span>
    </p>
    <${ProgressBar}
      style="grid-column: 2;"
      background-color="var(--kobber-component-progressbar-color-background-${getProficiencyNameByPercentage(
        args.__progressBarFirstValue,
      )})"
    >
      <${ProgressBarItem} 
        ariaLabelledby="${labelledById}"
        explainOtherUnitThanPercentage="${composeHumanReadableValue(args.__progressBarFirstValue)}"
        value-now="${args.__progressBarFirstValue}"
        fill-color="var(--kobber-component-progressbar-color-foreground-${getProficiencyNameByPercentage(args.__progressBarFirstValue)})"
      ></${ProgressBarItem}>
    </${ProgressBar}>`,
};
