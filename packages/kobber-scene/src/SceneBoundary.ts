import { consume } from "@lit/context";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Context, context, defaultContext } from "./context";
import { cmsEnumToSceneAlignment } from "./css-converters";
import { cssReset } from "./css-reset";
import { fluidHorizontalPadding } from "./fluidHorizontalPadding";
import { CmsContentBoxFill, CmsVerticalAlignment, Padding } from "./types";

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

  private getHostStyles = () => css`
    max-width: ${unsafeCSS(this.maxContentWidth)};
    padding: ${unsafeCSS(this._paddingToCssString())};
  `;

  private _paddingToCssString = () =>
    this.padding.map((value) => (value === undefined ? 0 : value)).join(" ");

  private getInnerStyles = () => css`
    position: relative;
    display: grid;
    align-self: ${unsafeCSS(cmsEnumToSceneAlignment(this.verticalAlignments))};
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
    if (this.contentBoxFill === CmsContentBoxFill.Dark) {
      return css`
        background-color: black;
        color: white;
      `;
    }
    if (this.contentBoxFill === CmsContentBoxFill.White) {
      return css`
        background-color: white;
        color: black;
      `;
    }
  }

  private get hasContentBoxFill() {
    return (
      this.contentBoxFill === CmsContentBoxFill.Dark ||
      this.contentBoxFill === CmsContentBoxFill.White
    );
  }

  private get transform() {
    return this._context.cssDimensionTransformer;
  }

  @consume({ context, subscribe: true })
  private _context: Context = defaultContext;

  @property({ type: Object, attribute: "padding" })
  padding: Padding = [undefined, undefined, undefined, undefined];

  @property({ type: String, attribute: "max-content-width" })
  maxContentWidth?: string;

  @property({ type: Number, attribute: "content-box-fill" })
  contentBoxFill?: CmsContentBoxFill;

  @property({ type: Number, attribute: "vertical-alignments" })
  verticalAlignments: CmsVerticalAlignment = CmsVerticalAlignment.None;

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
