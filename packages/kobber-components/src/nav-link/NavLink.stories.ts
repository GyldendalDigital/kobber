import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./NavLink";
import "@gyldendal/kobber-icons/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { init as initComponents } from "../base/init";
import { getPrintedState, linkStates } from "../story/linkStates";
import { type NavLinkProps, navLinkTypes } from "./NavLink.core";

initComponents();
initIcons();

const iconSettings = ["none", "right", "left"] as const;

interface Args extends NavLinkProps {
  text?: string;
  icon: (typeof iconSettings)[number];
}

const meta: Meta<Args> = {
  title: "Navigation/Nav Link",
  argTypes: {
    type: {
      options: navLinkTypes,
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
export const NavLink: StoryObj<Args> = {
  args: {
    text: "",
    type: undefined,
    icon: iconSettings[0],
  },
  render: args => {
    return html`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        ${linkStates.map(state => {
          return html`
            <kobber-nav-link
              class="${state}"
              href=${ifDefined(state !== "disabled" ? "https://github.com/GyldendalDigital/kobber" : undefined)}
              type="${ifDefined(args.type)}"
              ?icon-first=${args.icon === "left"}
            >
              ${args.icon === "left" ? html`<kobber-arrow_right />` : ""}
              ${args.text || html`nav link ${getPrintedState(state)}`}
              ${args.icon === "right" ? html`<kobber-arrow_right />` : ""}
            </kobber-nav-link>

            <kobber-nav-link
              class="${state}"
              onClick="alert('Hello world!')"
              type="${ifDefined(args.type)}"
              ?icon-first=${args.icon === "left"}
            >
              ${args.icon === "left" ? html`<kobber-arrow_right />` : ""}
              ${args.text || html`nav button ${getPrintedState(state)}`}
              ${args.icon === "right" ? html`<kobber-arrow_right />` : ""}
            </kobber-nav-link>
          `;
        })}
    </div>`;
  },
};

/**
 * Bruker native elementer (a og button) i stedet for web component. Vil også funke med f.eks. RouterLink i Next.js og React Router.
 */
export const NativeElement: StoryObj<Args & { isButton: boolean }> = {
  args: {
    text: "Gå til Kobber på GitHub",
    type: undefined,
    icon: iconSettings[0],
    isButton: false,
  },

  render: args => {
    return args.isButton
      ? html`
<button
  class="kobber-nav-link"
  data-type="${ifDefined(args.type)}"
  onClick="alert('Hello world!')"
>
  ${args.icon === "right" ? html`<kobber-arrow_right />` : null}
  ${args.text}
  ${args.icon === "left" ? html`<kobber-arrow_right />` : ""}
</button>`
      : html`
<a
  class="kobber-nav-link"
  data-type="${ifDefined(args.type)}"
  href=${"https://github.com/GyldendalDigital/kobber"}
>
  ${args.icon === "right" ? html`<kobber-arrow_right />` : ""}
  ${unsafeHTML(args.text)}
  ${args.icon === "left" ? html`<kobber-arrow_right />` : ""}
</a>`;
  },
};
