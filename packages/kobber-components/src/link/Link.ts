import { CSSResultGroup, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { linkStyles } from "./Link.styles";
import componentStyles from "../base/styles/component.styles";
import { isButton, linkClassNames, linkName, LinkProps } from "./Link.core";
import { ifDefined } from "lit/directives/if-defined.js";
import { literal, html } from "lit/static-html.js";
import { isExternalLink } from "../utils/stringUtilts";

@customElement(linkName)
export class Link extends LitElement implements LinkProps {
  static styles: CSSResultGroup = [componentStyles, linkStyles];

  @property()
  href?: HTMLAnchorElement["href"];

  @property()
  target?: HTMLAnchorElement["target"];

  @property()
  type?: LinkProps["type"];

  render() {
    const tag = isButton(this.href, this.onclick) ? literal`button` : literal`a`;
    const isDisabled = this.hasAttribute("disabled") || !this.href || this.href.length === 0;
    const isExternal = isExternalLink(this.href);
    const target = this.target || (isExternal ? "_blank" : undefined);
    return html`
      <${tag} class="${linkClassNames({ type: this.type }).join(" ")} ${this.className}" 
        href=${ifDefined(!isDisabled ? this.href : undefined)}
        target=${ifDefined(target)}>
        <slot></slot>

        ${isExternal ? html`<icon-external_link_arrow />` : null}
      </${tag}>
    `;
  }
}
