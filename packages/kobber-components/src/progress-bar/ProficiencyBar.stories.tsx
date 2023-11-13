import { Meta, StoryObj } from "@storybook/react";
import { ProficiencyBar } from "./ProficiencyBar";
import React from "react";
import { getProficiencyNameByPercentage } from "../utils/progressHelpers";

const labelledById = "aria-progress-id";

const getProgressSuffix = (progress: number) => {
    if (progress < 20) return "...";
    if (progress < 60) return ".";
    return "!";
};

const meta: Meta<typeof ProficiencyBar> = {
    title: "components/progress-bar/Proficiency",
    component: ProficiencyBar,
    argTypes: {
        progressInPercent: {
            control: { type: "range", min: 0, max: 100, step: 1 },
        },
        labelledById: {
            control:{
                disable:true
              }
        }
    },
    decorators: [
        (Story, storyContext) => (
            <div>
                <span id={labelledById}>
                    Progress: {getProficiencyNameByPercentage(storyContext.args.progressInPercent)}
                    {getProgressSuffix(storyContext.args.progressInPercent)}</span>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Proficiency: Story = {
    args: {
        labelledById,
        progressInPercent: 20
    },
};
