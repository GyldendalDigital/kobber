import { consume } from "@lit/context";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Context, context, defaultContext } from "./context";
import { cmsEnumToColumnAlignment, cmsEnumToColumnGap } from "./css-converters";
import { cssReset } from "./css-reset";
import { CmsVerticalAlignment, CmsWhiteSpace } from "./types";

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
        `${cmsEnumToColumnGap(this.sectionWhitespace)}px`,
      )};
      align-self: ${unsafeCSS(
        cmsEnumToColumnAlignment(this.verticalAlignments),
      )};
    }
  `;

  private get transform() {
    return this._context.cssDimensionTransformer;
  }

  @consume({ context, subscribe: true })
  private _context: Context = defaultContext;

  @property({ type: Number, attribute: "section-whitespace" })
  sectionWhitespace: CmsWhiteSpace = CmsWhiteSpace.None;

  @property({ type: Number, attribute: "vertical-alignments" })
  verticalAlignments: CmsVerticalAlignment = CmsVerticalAlignment.None;

  render() {
    return html`
      <style>
        ${this.getHostStyles()}
      </style>
      <slot />
    `;
  }
}
