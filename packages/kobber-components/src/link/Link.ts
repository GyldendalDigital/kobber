import { CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { linkStyles } from "./Link.styles";
import componentStyles from "../base/styles/component.styles";
import { isButton, linkClassNames, linkName, LinkProps } from "./Link.core";
import { ifDefined } from "lit/directives/if-defined.js";
import { literal, html } from "lit/static-html.js";
import { isExternalLink } from "../utils/stringUtils";
import KobberElementWithIcon from "../base/kobber-element-with-icon";

@customElement(linkName)
export class Link extends KobberElementWithIcon implements LinkProps {
  static styles: CSSResultGroup = [componentStyles, linkStyles];

  @property({ type: Boolean })
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
        <slot></slot>
        <slot name="icon"></slot>
      </${tag}>
    `;
  }
}
