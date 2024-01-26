import { consume } from "@lit/context";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Context as ContextType, context, defaultContext } from "./context";
import {
  redapticEnumToHorizontalAlignment,
  redapticEnumToMaxWidth,
  redapticEnumToRowGap,
} from "./css-converters";
import { cssReset } from "./css-reset";
import {
  RedapticHorizontalAlignment,
  RedapticMaxWidth,
  RedapticWhiteSpace,
} from "./types";

@customElement("kobber-scene-row")
export class SceneRow extends LitElement {
  static styles = [
    cssReset,
    css`
      :host {
        position: relative;
        display: grid;
        width: 100%;
      }
    `,
  ];

  @consume({ context, subscribe: true })
  private _context: ContextType = defaultContext;

  @property({ type: String, attribute: "columns" })
  columns: string = "1fr";

  @property({ type: Number, attribute: "row-whitespace" })
  rowWhitespace: RedapticWhiteSpace = RedapticWhiteSpace.None;

  @property({ type: Number, attribute: "section-whitespace" })
  sectionWhitespace?: RedapticWhiteSpace;

  @property({ type: Number, attribute: "max-width" })
  maxWidth: RedapticMaxWidth = RedapticMaxWidth.None;

  @property({ type: Number, attribute: "horizontal-alignment" })
  horizontalAlignment: RedapticHorizontalAlignment =
    RedapticHorizontalAlignment.None;

  @property({ type: Number, attribute: "responsive-breakpoint" })
  private getHostStyles = () => {
    const maxWidth = redapticEnumToMaxWidth(this.maxWidth);
    return css`
      :host {
        grid-gap: ${this.transform("10px")};
        grid-template-columns: var(
          --responsive-grid-template-columns,
          ${unsafeCSS(this.columns)}
        );
        max-width: ${maxWidth ? this.transform(maxWidth) : unsafeCSS("none")};
        justify-self: ${unsafeCSS(
          redapticEnumToHorizontalAlignment(
            this.maxWidth,
            this.horizontalAlignment,
          ),
        )};
        padding-bottom: ${this.transform(
          redapticEnumToRowGap(this.rowWhitespace),
        )};
      }
    `;
  };

  private get transform() {
    return this._context.cssDimensionTransformer;
  }

  render() {
    return html`
      <style>
        ${this.getHostStyles()}
      </style>
      <slot />
    `;
  }
}
