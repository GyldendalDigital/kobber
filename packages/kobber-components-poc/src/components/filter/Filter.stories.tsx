import {
  filterApi,
  getDisplayCount,
} from "@gyldendal/kobber-components-poc/api/filter";
import { Filter } from "@gyldendal/kobber-components-poc/react/filter";
import type { Meta, StoryObj } from "@storybook/react";
import { reactDecorator } from "../../integrations/storybook/reactDecorator";

type Args = Parameters<typeof filterApi>[0] & {
  text?: string;
  disabled?: boolean;
};

const meta: Meta<Args> = {
  title: "Filter",
  decorators: [reactDecorator],
  args: {
    text: "Filter text",
    count: 10,
    maxCount: 99,
    disabled: false,
    selected: false,
  },
};

export default meta;

type Story = StoryObj<Args>;

export const ApiStory: Story = {
  render: (args: Args) => {
    const api = filterApi(args);
    const displayCount = getDisplayCount(args.count, args.maxCount);
    return (
      <button
        type="button"
        className={api.root.className}
        disabled={args.disabled}
      >
        {args.text} <div className={api.counter.className}>{displayCount}</div>
      </button>
    );
  },
};

export const ReactStory: Story = {
  render: (args: Args) => {
    return (
      <Filter
        count={args.count}
        maxCount={args.maxCount}
        selected={args.selected}
        disabled={args.disabled}
      >
        {args.text}
      </Filter>
    );
  },
};
