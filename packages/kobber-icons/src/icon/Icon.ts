import { LitElement, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { IconType } from "../../symbols/kobber-icons-lists";
import icons from "../../symbols/kobber-icons.svg";
import { Theme, themeContext } from "../../../kobber-components/src/utils/theme-context";
import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.js";

/**
 * @summary Icon component to be used with kobber-icons.
 * Proposed usage: Through Icon component.
 * Can be used alongside local component for icons not in kobber, if the goal is to end up only with icons from kobber.
 * Other possibilities: Use only icon sprite in a local component, with or without list for type checking.
 * Or in a local component that merges multiple type lists from multiple sprites, if the goal is to always use icons that are not in kobber.
 *
 */

@customElement("kobber-icon")
export class Icon extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme = { id: "kobber-theme-default", tokens: defaultTokens };

  @property()
  type: IconType;

  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>

      <svg>
        <use href="${icons}#${this.type}" />
      </svg>
    `;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("should never occur");
      return css``;
    }

    // TODO:
    // - fix units (px vs rem)
    return css`
      svg {
        height: ${tokens.semantic.image.icon.size.default.height / 16}em;
        width: ${tokens.semantic.image.icon.size.default.width / 16}em;
      }
    `;
  };
}
