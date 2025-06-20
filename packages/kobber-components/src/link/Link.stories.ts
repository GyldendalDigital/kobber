import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Link";
import "@gyldendal/kobber-icons/web-components";
import { LinkProps, linkTypes } from "./Link.core";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";

initComponents();
initIcons();

const iconSettings = ["none", "right", "left"] as const;

interface Args extends LinkProps {
  text?: string;
  icon: (typeof iconSettings)[number];
}

const meta: Meta<Args> = {
  title: "Link",
  argTypes: {
    type: {
      options: linkTypes,
      control: { type: "select" },
    },
    icon: {
      options: iconSettings,
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
  decorators: [(Story, context) => html`<div class="${context.globals.theme}">${Story()}</div>`],
  parameters: {
    layout: "centered",
  },
};

export default meta;

const linkStates = ["idle", "active", "hover", "focus", "disabled"];

/**
 * Disabled er ikke en gyldig state for lenker. Disabled fjerner href-attributten.
 */
export const Link: StoryObj<Args> = {
  args: {
    text: "",
    type: "navigation",
    icon: iconSettings[0],
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
              ${args.icon === "left" ? "iconFirst" : ""}
            >
              ${args.text || `Lenke med tilstand ${state}`}
              ${args.icon !== "none" ? html`<kobber-arrow_right slot="icon" />` : ""}
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
              ${args.icon === "left" ? "iconFirst" : ""}
            >
              ${args.text || `Knapp med tilstand ${state}`}
              ${args.icon !== "none" ? html`<kobber-arrow_right slot="icon" />` : ""}
            </kobber-link>
          </p>`;
        })}
      </kobber-text-wrapper>
    </div>`;
  },
};
