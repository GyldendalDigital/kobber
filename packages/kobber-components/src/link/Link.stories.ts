import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { storySummary } from "../story/story-summary";
import { linkStyles } from "./Link.styles";
import "./Link";
import "@gyldendal/kobber-icons/web-components";

const meta: Meta = {
  title: "Link",
  decorators: [(Story, context) => html`<div class="${context.globals.theme}">${Story()}</div>`],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

const linkStates = ["idle", "active", "hover", "focus", "disabled"];

export const Link: Story = {
  argTypes: {
    external: {
      control: "boolean",
    },
    highlighted: {
      control: "boolean",
    },
  },
  args: {
    external: false,
    highlighted: false,
  },
  render: args => {
    return html`<div style="max-width: 600px;">
        <kobber-text-wrapper>
          ${linkStates.map(state => {
            return html`<p>
              <kobber-link
                class="${state}"
                href=${state !== "disabled" && args.external ? "https://github.com/GyldendalDigital/kobber" : undefined}
                type="${args.highlighted ? "highlight" : "base"}"
              >
                ${args.external ? "Ekstern" : "Intern"} lenke
              </kobber-link>
              med tilstand <code>${state}</code>
            </p>`;
          })}
        </kobber-text-wrapper>
        <br />
        <br />
        <kobber-text-wrapper>
          ${linkStates.map(state => {
            return html`<p>
              <kobber-link class="${state}" type="${args.highlighted ? "highlight" : "base"}" onclick="alert('Klikk!')">
                ${args.external ? "Ekstern" : "Intern"} knapp
              </kobber-link>
              med tilstand <code>${state}</code>
            </p>`;
          })}
        </kobber-text-wrapper>
      </div>

      ${storySummary({
        summary: `Disabled er ikke en gyldig state for lenker. Da fjerner man heller href-attributten.`,
        code: linkStyles.cssText,
      })}`;
  },
};
