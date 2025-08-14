import { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { linkStyles } from "./Link.styles";
import componentStyles from "../base/styles/component.styles";
import { isButton, linkClassNames, linkName, LinkProps } from "./Link.core";
import { ifDefined } from "lit/directives/if-defined.js";
import { literal, html } from "lit/static-html.js";
import KobberElementWithIcon from "../base/kobber-element-with-icon";
import { customElement } from "../base/utilities/customElementDecorator";
import { isExternalLink } from "@gyldendal/kobber-base/utilities/index.js";

@customElement(linkName)
export class Link extends KobberElementWithIcon implements LinkProps {
  static styles: CSSResultGroup = [componentStyles, linkStyles];

  @property({ type: Boolean, attribute: "icon-first" })
  iconFirst = false;

  @property()
  href?: LinkProps["href"];

  @property({ type: Boolean })
  disabled = false;

  @property()
  target?: LinkProps["target"];

  @property()
  type?: LinkProps["type"];

  render() {
    const tag = isButton(this.href, this.onclick) ? literal`button` : literal`a`;
    const isDisabled = this.hasAttribute("disabled") || !this.href || this.href.length === 0;
    const isExternal = isExternalLink(this.href);
    const target = this.target || (isExternal ? "_blank" : undefined);

    return html`
      <${tag} class="${linkClassNames({
        type: this.type,
        hasIcon: this._hasIcon,
        iconOnly: this._iconOnly,
        iconFirst: this.iconFirst,
      }).join(" ")} ${this.className}" 
        href=${ifDefined(!isDisabled ? this.href : undefined)}
        target=${ifDefined(target)}>
        ${this.iconFirst ? html`<slot name="icon"></slot>` : ""}
        <slot></slot>
        ${!this.iconFirst ? html`<slot name="icon"></slot>` : ""}
      </${tag}>
    `;
  }
}
