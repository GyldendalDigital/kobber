import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./Link";
import "../text/text-label/TextLabel";
import "@gyldendal/kobber-icons/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { html } from "lit";
import { init as initComponents } from "../base/init";
import { getPrintedState, linkStates } from "../story/linkStates";
import { type LinkProps, linkTypes } from "./Link.core";

initComponents();
initIcons();

const iconSettings = ["none", "right", "left"] as const;

interface Args extends LinkProps {
  text?: string;
  icon: (typeof iconSettings)[number];
}

const meta: Meta<Args> = {
  title: "Navigation/Link",
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
  parameters: {
    layout: "centered",
  },
};

export default meta;

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
    return html`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        ${linkStates.map(state => {
          return html`
            <kobber-link
              class="${state}"
              href=${state !== "disabled" ? "https://github.com/GyldendalDigital/kobber" : undefined}
              type="${args.type}"
              ?icon-first=${args.icon === "left"}
            >
              <kobber-text-label>
                ${args.text || html`link ${getPrintedState(state)}`}
              </kobber-text-label>
              ${args.icon !== "none" ? html`<kobber-arrow_right slot="icon" />` : ""}
            </kobber-link>

            <kobber-link
              class="${state}"
              onClick="alert('Hello world!')"
              type="${args.type}"
              ?icon-first=${args.icon === "left"}
            >
              <kobber-text-label>
                ${args.text || html`button ${getPrintedState(state)}`}
              </kobber-text-label>
              ${args.icon !== "none" ? html`<kobber-arrow_right slot="icon" />` : ""}
            </kobber-link>
          `;
        })}
    </div>`;
  },
};
