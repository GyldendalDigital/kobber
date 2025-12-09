import { init as initIcons } from "@gyldendal/kobber-icons/init";
import type { Meta, StoryObj } from "@storybook/react";
import { reactDecorator } from "../../integrations/storybook/reactDecorator";
import { ButtonIcon, ButtonText } from "./index.react";
import { Button, type ButtonType } from "./react/button";
import { Collection, Level, Purpose, Tone } from "./types";

initIcons();

interface Args extends ButtonType {
  test: boolean;
}

const meta: Meta<Args> = {
  title: "Experimental/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    collection: {
      name: "Collection",
      control: { type: "inline-radio" },
      options: ["none", ...Collection],
      mapping: {
        none: undefined,
        ...Collection,
      },
    },
    purpose: {
      name: "Purpose",
      control: { type: "inline-radio" },
      options: ["none", ...Purpose],
      mapping: {
        none: undefined,
        ...Purpose,
      },
    },
    level: {
      name: "Level",
      control: { type: "inline-radio" },
      options: ["none", ...Level],
      mapping: {
        none: undefined,
        ...Level,
      },
    },
    tone: {
      name: "Tone",
      control: { type: "inline-radio" },
      options: ["none", ...Tone],
      mapping: {
        none: undefined,
        ...Tone,
      },
    },
  },
  args: {
    collection: "brand",
    purpose: undefined,
    level: "primary",
    tone: "tone-a",
  },
  decorators: [reactDecorator],
};

export default meta;

const render = (args: Args) => (
  <>
    <Button collection={args.collection} purpose={args.purpose} level={args.level} tone={args.tone}>
      <ButtonText>Kobber</ButtonText>
      <ButtonIcon icon="kobber-arrow_right" />
    </Button>
  </>
);

export const Default: StoryObj<Args> = {
  name: "Default",
  render,
};

type Story = StoryObj<typeof meta>;

export const ButtonIconText: Story = {
  args: {
    collection: "brand",
    purpose: undefined,
    level: "primary",
    tone: "tone-a",
  },
  render: (args: Args) => (
    <>
      <Button
        collection={args.collection}
        purpose={args.purpose}
        level={args.level}
        tone={args.tone}
      >
        <ButtonText>Kobber</ButtonText>
        <ButtonIcon icon="kobber-arrow_right" />
      </Button>
    </>
  ),
};

export const ButtonCombos: Story = {
  args: {
    collection: "brand",
    purpose: undefined,
    level: "primary",
    tone: "tone-a",
  },
  tags: ["!dev"],
  render: (args: Args) => (
    <div style={{ display: "flex", gap: "0.5em" }}>
      <Button
        collection={args.collection}
        purpose={args.purpose}
        level={args.level}
        tone={args.tone}
      >
        <ButtonText>Kobber</ButtonText>
      </Button>
      <Button
        collection={args.collection}
        purpose={args.purpose}
        level={args.level}
        tone={args.tone}
        aria-label="kobber"
      >
        <ButtonIcon icon="kobber-arrow_right" />
      </Button>
      <Button
        collection={args.collection}
        purpose={args.purpose}
        level={args.level}
        tone={args.tone}
      >
        <ButtonText>Kobber</ButtonText>
        <ButtonIcon icon="kobber-arrow_right" />
      </Button>
    </div>
  ),
};
