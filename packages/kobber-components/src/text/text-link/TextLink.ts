import { CSSResultGroup, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { textLinkStyles } from "./TextLink.styles";
import componentStyles from "../../base/styles/component.styles";
import { textLinkName, TextLinkProps } from "./TextLink.core";
import { ifDefined } from "lit/directives/if-defined.js";
import { isExternalLink } from "../../utils/stringUtilts";

@customElement(textLinkName)
export class TextLink extends LitElement implements TextLinkProps {
  static styles: CSSResultGroup = [componentStyles, textLinkStyles];

  @property()
  href?: HTMLAnchorElement["href"];

  @property()
  target?: HTMLAnchorElement["target"];

  render() {
    const isDisabled = this.hasAttribute("disabled") || !this.href || this.href.length === 0;
    const isExternal = isExternalLink(this.href);
    const target = this.target || (isExternal ? "_blank" : undefined);
    return html`
      <a
        class="${textLinkName} ${this.className}"
        href=${ifDefined(!isDisabled ? this.href : undefined)}
        target=${ifDefined(target)}
        disabled=${ifDefined(isDisabled ? "" : undefined)}
      >
        <slot></slot>
      </a>
    `;
  }
}
