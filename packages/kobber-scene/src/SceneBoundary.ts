import { consume } from "@lit/context";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Context, context, defaultContext } from "./context";
import { redapticEnumToSceneAlignment } from "./css-converters";
import { getPaddings } from "./css-helpers";
import { cssReset } from "./css-reset";
import { fluidHorizontalPadding } from "./fluidHorizontalPadding";
import {
  RedapticContentBoxFill,
  RedapticHorizontalAlignment,
  RedapticVerticalAlignment,
  RedapticWhiteSpace,
} from "./types";

@customElement("kobber-scene-boundary")
export class SceneBoundary extends LitElement {
  static styles = [
    cssReset,
    css`
      :host {
        display: grid;
        width: 100%;
        margin-left: auto;
        margin-right: auto;

        @media screen and (prefers-reduced-motion: no-preference) {
          transition: padding 0.25s ease;
        }
      }
    `,
  ];

  private getHostStyles = () => {
    const padding = getPaddings(
      this.sceneWhitespace,
      this.sceneHorizontalAlignments,
    );
    return !this.isFullWidth
      ? css`
          max-width: ${unsafeCSS(this.maxContentWidth)};
          padding-top: ${this.transform(padding.top)};
          padding-bottom: ${this.transform(padding.bottom)};
          padding-right: ${unsafeCSS(fluidHorizontalPadding(padding.right))};
          padding-left: ${unsafeCSS(fluidHorizontalPadding(padding.left))};
        `
      : css`
          padding-top: ${this.transform(!this.isFirstRow ? padding.top : 0)};
          padding-bottom: ${this.transform(
            this.applyPaddingBottom ? padding.bottom : 0,
          )};
        `;
  };

  private getInnerStyles = () => css`
    position: relative;
    display: grid;
    align-self: ${unsafeCSS(
      redapticEnumToSceneAlignment(this.verticalAlignments),
    )};
    ${unsafeCSS(
      this.hasContentBoxFill &&
        css`
          box-shadow: 0 0 ${this.transform("30px")} rgba(0, 0, 0, 0.3);
          padding: ${this.transform("27.2px")}
            ${unsafeCSS(fluidHorizontalPadding(25.6))};
          border-radius: ${this.transform("7px")};
          ${unsafeCSS(this.getTheme)};
        `,
    )};
  `;

  private get getTheme() {
    if (this.contentBoxFill === RedapticContentBoxFill.Dark) {
      return css`
        background-color: black;
        color: white;
      `;
    }
    if (this.contentBoxFill === RedapticContentBoxFill.White) {
      return css`
        background-color: white;
        color: black;
      `;
    }
  }

  private get hasContentBoxFill() {
    return (
      this.contentBoxFill === RedapticContentBoxFill.Dark ||
      this.contentBoxFill === RedapticContentBoxFill.White
    );
  }

  private get transform() {
    return this._context.cssDimensionTransformer;
  }

  @consume({ context, subscribe: true })
  private _context: Context = defaultContext;

  @property({ type: Boolean, attribute: "is-first-row" })
  isFirstRow?: boolean;

  @property({ type: Boolean, attribute: "is-full-width" })
  isFullWidth?: boolean;

  @property({ type: Boolean, attribute: "apply-padding-bottom" })
  applyPaddingBottom?: boolean;

  @property({ type: String, attribute: "max-content-width" })
  maxContentWidth?: string;

  @property({ type: Number, attribute: "content-box-fill" })
  contentBoxFill?: RedapticContentBoxFill;

  @property({ type: Number, attribute: "scene-whitespace" })
  sceneWhitespace: RedapticWhiteSpace = RedapticWhiteSpace.None;

  @property({ type: Number, attribute: "scene-horizontal-alignments" })
  sceneHorizontalAlignments: RedapticHorizontalAlignment =
    RedapticHorizontalAlignment.None;

  @property({ type: Number, attribute: "vertical-alignments" })
  verticalAlignments: RedapticVerticalAlignment =
    RedapticVerticalAlignment.None;

  render() {
    return html`
      <style>
        :host {
          ${this.getHostStyles()}
        }
        .inner {
          ${this.getInnerStyles()}
        }
      </style>
      <div class="inner">
        <slot />
      </div>
    `;
  }
}
