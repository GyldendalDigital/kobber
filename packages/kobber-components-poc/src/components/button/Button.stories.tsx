import { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonType } from "./react/button";
import { Collection, Level, Purpose, Tone } from "./types";
import { reactDecorator } from "../../integrations/storybook/reactDecorator";
import { ButtonIcon, ButtonText } from "./index.react";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import * as Icons from "@gyldendal/kobber-icons/react";

// collection?: CollectionType;
// purpose?: PurposeType;
// level?: LevelType;
// tone?: ToneType;

initIcons();

interface Args extends ButtonType {
  test: boolean;
}

const meta: Meta<Args> = {
  title: "Experimental/Button2",
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
    <Button
      collection={args.collection}
      purpose={args.purpose}
      level={args.level}
      tone={args.tone}
    >
      <ButtonText>Kobber</ButtonText>
      <ButtonIcon>
        <Icons.Camera size="large" />
      </ButtonIcon>
    </Button>
  </>
);

export const Default: StoryObj<Args> = {
  name: "Default",
  render,
};
