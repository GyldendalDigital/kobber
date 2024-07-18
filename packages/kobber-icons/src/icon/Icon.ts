import { LitElement, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { Theme, themeContext } from "@gyldendal/kobber-components/src/utils/theme-context";
import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import icons from "@gyldendal/kobber-icons/symbols/kobber-icons.svg";
import { IconType } from "@gyldendal/kobber-icons/symbols/kobber-icons-lists";
import { Task } from "@lit/task";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

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

  @property() sprite: string = icons;

  private _productTask = new Task(this, {
    task: async ([sprite]) => {
      const response = await fetch(sprite);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.text();
    },
    args: () => [this.sprite],
  });

  render() {
    const themeStyles = this.themedStyles();

    return this._productTask.render({
      pending: () => html`...`,
      complete: sprite => html`
        <style>
          ${themeStyles}
        </style>

        ${unsafeSVG(sprite)}

        <svg>
          <use href="#${this.type}" />
        </svg>
      `,
      error: e => html`<p>Error: ${e}</p>`,
    });
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
