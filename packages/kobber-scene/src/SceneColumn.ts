import { consume } from "@lit/context";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Context, context, defaultContext } from "./context";
import {
  redapticEnumToColumnAlignment,
  redapticEnumToColumnGap,
} from "./css-converters";
import { cssReset } from "./css-reset";
import { RedapticVerticalAlignment, RedapticWhiteSpace } from "./types";

@customElement("kobber-scene-column")
export class SceneColumn extends LitElement {
  static styles = [
    cssReset,
    css`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        min-width: 0;
      }
    `,
  ];

  private getHostStyles = () => css`
    :host {
      row-gap: ${this.transform(
        `${redapticEnumToColumnGap(this.sectionWhitespace)}px`,
      )};
      align-self: ${unsafeCSS(
        redapticEnumToColumnAlignment(this.verticalAlignments),
      )};
    }
  `;

  private get transform() {
    return this._context.cssDimensionTransformer;
  }

  @consume({ context, subscribe: true })
  private _context: Context = defaultContext;

  @property({ type: Number, attribute: "section-whitespace" })
  sectionWhitespace: RedapticWhiteSpace = RedapticWhiteSpace.None;

  @property({ type: Number, attribute: "vertical-alignments" })
  verticalAlignments: RedapticVerticalAlignment =
    RedapticVerticalAlignment.None;

  render() {
    return html`
      <style>
        ${this.getHostStyles()}
      </style>
      <slot />
    `;
  }
}
