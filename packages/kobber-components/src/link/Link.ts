import { isExternalLink } from "@gyldendal/kobber-base/utilities/index.js";
import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import KobberElementWithIcon from "../base/kobber-element-with-icon";
import componentStyles from "../base/styles/component.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import { isButton, type LinkProps, linkClassNames, linkName } from "./Link.core";
import { linkStyles } from "./Link.styles";
import "../text/text-label/TextLabel";

/** @deprecated Use NavLink instead */
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
        <kobber-text-label>
          <slot></slot>
        </kobber-text-label>
        ${!this.iconFirst ? html`<slot name="icon"></slot>` : ""}
      </${tag}>
    `;
  }
}
