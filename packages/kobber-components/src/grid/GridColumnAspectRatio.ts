import { type CSSResultGroup, css, html } from "lit";
import { property } from "lit/decorators.js";
import {
  responsiveValueConverter as converter,
  type ResponsiveCssValue,
} from "../base/utilities/responsiveCssValue";
import { stringifyStyleObject } from "../base/utilities/stringifyStyleObject";
import { GridColumn } from "./GridColumn";
import "./../aspect-ratio/AspectRatio";
import { customElement } from "../base/utilities/customElementDecorator";

@customElement("kobber-grid-column-aspect-ratio")
export class GridColumnAspectRatio extends GridColumn {
  static styles: CSSResultGroup = css`
    :host {
      display: grid;
    }

    .padding {
      display: grid;
    }
  `;

  @property()
  ["--span"]?: ResponsiveCssValue;

  @property({ converter, attribute: "aspect-ratio" })
  aspectRatio?: ResponsiveCssValue;

  private getSpanCssVariable = () =>
    stringifyStyleObject(":host", {
      ["--span"]: this.span ? this.span.toString() : "1",
    });

  render() {
    const {
      padding,
      paddingBlock,
      paddingBlockEnd,
      paddingBlockStart,
      paddingInline,
      paddingInlineEnd,
      paddingInlineStart,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      aspectRatio,
      ...rest
    } = this.getStyles(this.context.config?.gridColumnAspectRatioProperties);
    const paddingStyles = stringifyStyleObject(".padding", {
      padding,
      paddingBlock,
      paddingBlockEnd,
      paddingBlockStart,
      paddingInline,
      paddingInlineEnd,
      paddingInlineStart,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    });
    const hostStyles = stringifyStyleObject(":host", rest);
    return html`
      <style>
        ${this.getGridColumnStyles()}
        ${hostStyles}
        ${paddingStyles}
        ${this.getSpanCssVariable()}
      </style>
      <div class="padding">
        <kobber-aspect-ratio aspect-ratio=${JSON.stringify(aspectRatio)}>
          <slot />
        </kobber-aspect-ratio>
      </div>
    `;
  }
}
