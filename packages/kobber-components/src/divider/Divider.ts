import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { DividerVariant } from "./Divider.types";

@customElement("kobber-divider")
export class Divider extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property({ type: String })
  variant: DividerVariant = "main";

  // This is the static style that will always be applied
  static styles = css`
    :host {
      display: block;
    }
    .divider {
      width: 100%;
      height: 1px;
    }
  `;

  render() {
    const themeStyles = this.themedStyles();

    return html`
      <style>
        ${themeStyles}
      </style>
      <div class="divider ${this.variant}"></div>
    `;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("Should never occur");
      return css``;
    }

    // TODO: WAITING FOR TOKENS
    // const component = tokens.component.divider;

    return css`
      .divider {
        /* common for all variants */
        width: 100%;
        height: 1px;
      }
      .divider.main {
        background-color: #e5cfd3;
      }
      .divider.supplemental {
        background-color: #532d37;
      }
    `;
  };
}
