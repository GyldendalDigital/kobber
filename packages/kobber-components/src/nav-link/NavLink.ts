import { type CSSResultGroup, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import componentStyles from "../base/styles/component.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import { isButton, type NavLinkProps, navLinkName } from "./NavLink.core";
import { navLinkStyles } from "./NavLink.styles";

@customElement(navLinkName)
export class NavLink extends LitElement implements NavLinkProps {
  static styles: CSSResultGroup = [
    componentStyles,
    navLinkStyles,
    css`
      :host {
        cursor: pointer;
      }
    `,
  ];

  @property()
  type?: NavLinkProps["type"];

  @property()
  href?: NavLinkProps["href"];

  @property()
  target?: NavLinkProps["target"];

  @property()
  rel?: NavLinkProps["rel"];

  @property({ type: Boolean })
  disabled = false;

  render() {
    const tag = isButton(this.href, this.onclick) ? literal`button` : literal`a`;
    const isDisabled = this.hasAttribute("disabled") || !this.href || this.href.length === 0;

    return html`
      <${tag} class="${navLinkName} ${this.className}" 
        href=${ifDefined(!isDisabled ? this.href : undefined)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel)}
        data-type=${ifDefined(this.type)}
        >
          <slot></slot>
      </${tag}>
    `;
  }
}
