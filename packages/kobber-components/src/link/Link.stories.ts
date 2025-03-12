import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { storySummary } from "../story/story-summary";
import { linkStyles } from "./Link.styles";
import "./Link";
import "@gyldendal/kobber-icons/web-components";
import { linkIconPositions, linkIcons, LinkProps, linkTypes } from "./Link.core";

interface Args extends LinkProps {
  text?: string;
}

const meta: Meta<Args> = {
  title: "Link",
  argTypes: {
    type: {
      options: linkTypes,
      control: { type: "select" },
    },
    icon: {
      options: [undefined, ...linkIcons],
      control: { type: "radio" },
    },
    iconPosition: {
      options: linkIconPositions,
      control: { type: "radio" },
      if: { arg: "icon", truthy: true },
    },
  },
  decorators: [(Story, context) => html`<div class="${context.globals.theme}">${Story()}</div>`],
  parameters: {
    layout: "centered",
  },
};

export default meta;

const linkStates = ["idle", "active", "hover", "focus", "disabled"];

export const Link: StoryObj<Args> = {
  args: {
    text: "",
    type: "navigation",
    icon: undefined,
    iconPosition: "right",
  },
  render: args => {
    return html`<div style="max-width: 600px;">
        <kobber-text-wrapper>
          ${linkStates.map(state => {
            return html`<p>
              <kobber-link
                class="${state}"
                href=${state !== "disabled" ? "https://github.com/GyldendalDigital/kobber" : undefined}
                type="${args.type}"
                ${args.icon ? `icon=${args.icon}` : undefined}
                ${args.iconPosition ? `icon=${args.iconPosition}` : undefined}
              >
                ${args.text || `Lenke med tilstand ${state}`}
              </kobber-link>
            </p>`;
          })}
        </kobber-text-wrapper>
        <br />
        <br />
        <kobber-text-wrapper>
          ${linkStates.map(state => {
            return html`<p>
              <kobber-link
                class="${state}"
                onClick="alert('Hello world!')"
                type="${args.type}"
                ${args.icon ? `icon=${args.icon}` : undefined}
                ${args.iconPosition ? `icon=${args.iconPosition}` : undefined}
              >
                ${args.text || `Knapp med tilstand ${state}`}
              </kobber-link>
            </p>`;
          })}
        </kobber-text-wrapper>
      </div>

      ${storySummary({
        summary: `Disabled er ikke en gyldig state for lenker. Disabled fjerner href-attributten.`,
        code: linkStyles.cssText,
      })}`;
  },
};
