import React, { CSSProperties } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar, Props } from "./ProgressBar";

const meta: Meta<
    Props & {
        __progressBarFirstValue: number;
        __progressBarFilledColorGreen: boolean;
        __progressBarSecondValue: number;
        __progressColor: string;
    }
> = {
    title: "components/progress-bar",
    component: ProgressBar,
    args: {
        __progressBarFirstValue: 45,
        height: "default",
    },
    tags: ["autodocs"],
    argTypes: {
        height: {
            control: "inline-radio",
            options: ["default", "low"]
        },
        __progressBarFirstValue: {
            name: "Value",
            description:
                "In reality, the sum of the bars' values will never exceed 100&nbsp;%.",
            control: { type: "range", min: 0, max: 100 },
            table: {
                category: "First bar",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
    render: (args) => {
        args.progressBars = [
            {
                valueNow: args.__progressBarFirstValue,
                fillColorVar: args.__progressColor ? `--component-progressbar-color-foreground-${args.__progressColor}` : "",
                filledColorVar: args.__progressBarFilledColorGreen ? "--component-progressbar-color-background-good" : "",
                "aria-label": "Første"
            },
        ];
        return <ProgressBar {...args} style={{
            "--progress-bar-background-color": args.__progressColor ? `var(--component-progressbar-color-background-${args.__progressColor})` : ""
        } as CSSProperties}/>;
    },
    args: {
        __progressBarFilledColorGreen: true,
        __progressColor: "default"
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
            description: "Bar color examples."
        },

    }
};

export const Double: Story = {
    render: (args) => {
        args.progressBars = [
            {
                valueNow: args.__progressBarFirstValue,
                "aria-label": "Første"
            },
            {
                valueNow: args.__progressBarSecondValue,
                "aria-label": "Andre",
                fillColorVar: args.__progressColor ? `--component-progressbar-color-foreground-${args.__progressColor}` : "",
            },
        ];
        return <ProgressBar {...args} />;
    },
    args: {
        showFullLength: false,
        __progressBarSecondValue: 55,
        __progressColor: "default"
    },
    argTypes: {
        showFullLength: {
            name: "Show full length (preferably when bars' sum is 100%)",
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
        }
    }
};
