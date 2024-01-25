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
  ActivityHorizontalAlignment,
  ActivityMaxWidth,
  ActivityWhiteSpace,
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

  private getHostStyles = () => {
    const maxWidth = redapticEnumToMaxWidth(this.maxWidth);
    return css`
      :host {
        grid-gap: ${this.transform("10px")};
        grid-template-columns: ${unsafeCSS(
          this.columns
            ?.split(",")
            .map((column) => `${column}fr`)
            .join(" "),
        )};
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

      @media (max-width: 640px) {
        :host {
          grid-template-columns: 1fr;
        }
      }
    `;
  };

  private get transform() {
    return this._context.cssDimensionTransformer;
  }

  @consume({ context, subscribe: true })
  private _context: ContextType = defaultContext;

  @property({ type: String, attribute: "columns" })
  columns?: string;

  @property({ type: Number, attribute: "row-whitespace" })
  rowWhitespace: ActivityWhiteSpace = ActivityWhiteSpace.None;

  @property({ type: Number, attribute: "section-whitespace" })
  sectionWhitespace?: ActivityWhiteSpace;

  @property({ type: Number, attribute: "max-width" })
  maxWidth: ActivityMaxWidth = ActivityMaxWidth.None;

  @property({ type: Number, attribute: "horizontal-alignment" })
  horizontalAlignment: ActivityHorizontalAlignment =
    ActivityHorizontalAlignment.None;

  render() {
    return html`
      <style>
        ${this.getHostStyles()}
      </style>
      <slot />
    `;
  }
}
