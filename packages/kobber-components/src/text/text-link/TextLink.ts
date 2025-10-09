import { isExternalLink } from "@gyldendal/kobber-base/utilities/index.js";
import { type CSSResultGroup, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { type TextLinkProps, textLinkName } from "./TextLink.core";
import { textLinkStyles } from "./TextLink.styles";

@customElement(textLinkName)
export class TextLink extends LitElement implements TextLinkProps {
  static styles: CSSResultGroup = [componentStyles, textLinkStyles];

  @property()
  href?: HTMLAnchorElement["href"];

  @property()
  target?: HTMLAnchorElement["target"];

  @property({ type: Boolean })
  disabled = false;

  render() {
    const isDisabled = this.hasAttribute("disabled") || !this.href || this.href.length === 0;
    const isExternal = isExternalLink(this.href);
    const target = this.target || (isExternal ? "_blank" : undefined);
    return html`
      <a
        class="${textLinkName} ${this.className}"
        href=${ifDefined(!isDisabled ? this.href : undefined)}
        target=${ifDefined(target)}
        aria-disabled=${!!isDisabled}
      >
        <slot></slot>
      </a>
    `;
  }
}
