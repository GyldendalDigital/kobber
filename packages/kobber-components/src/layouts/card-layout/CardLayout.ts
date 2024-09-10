import { ResizeController } from "@lit-labs/observers/resize-controller.js";
import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StyledLitElement } from "../../utils/StyledLitElement";
import { stringifyStyleObject } from "../../utils/stringifyStyleObject";
import {
  gap,
  getAspectRatioHeightValue,
  maxInnerWidth,
  minCardWidth,
  minColumnWidth,
  outerPadding,
  ValidAspectRatioHeight,
  validMaxColumns,
} from "./config";

const getGridTemplateColumns = (maxColumns: number) => {
  return `repeat(
      auto-fill,
      minmax(
        min(
          100%,
          max(
            ${minColumnWidth},
            ${100 / maxColumns}%
          )
        ),
        1fr
      )
    )`;
};

@customElement("kobber-card-layout")
export class CardLayout extends StyledLitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: grid;
      width: 100%;
      min-width: 0;
      justify-items: center;
      padding: ${unsafeCSS(gap)} ${unsafeCSS(outerPadding)};
    }

    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
    }

    .grid {
      display: grid;
      width: 100%;
      min-width: calc(${minCardWidth / 16}rem + (2 * ${unsafeCSS(gap)}));
      max-width: ${maxInnerWidth / 16}rem;
    }

    .max-columns-4 {
      grid-template-columns: ${unsafeCSS(getGridTemplateColumns(4))};
    }

    .max-columns-6 {
      grid-template-columns: ${unsafeCSS(getGridTemplateColumns(6))};
    }

    ::slotted(kobber-card-layout-column-aspect-ratio) {
      grid-column: span min(var(--span), var(--max-span));
      --aspect-ratio-width: min(var(--span), var(--max-span));
    }

    .gap-measurement {
      position: fixed;
      top: 0;
      left: 0;
      width: calc(${unsafeCSS(gap)} * 2);
      pointer-events: none;
    }
  `;

  private _gapMeasurement: HTMLElement;

  private _resizeController = new ResizeController(this, {
    callback: ([entry]) => entry?.borderBoxSize[0],
  });

  private _getHostWidth = () => this._resizeController.value?.inlineSize ?? this.getBoundingClientRect()?.width;

  connectedCallback() {
    super.connectedCallback();
    this._gapMeasurement = document.createElement("div");
    this._gapMeasurement.className = "gap-measurement";
    this.shadowRoot?.appendChild(this._gapMeasurement);
  }

  // When CSS container queries are supported everywhere, we can replace this with CSS.
  // Add `container-type: inline-size` to :host

  private _getMaxSpans = () => {
    const hostWidth = this._getHostWidth();
    if (hostWidth === undefined) return "";
    if (!this._gapMeasurement) return;
    const gapWidth = this._gapMeasurement.getBoundingClientRect()?.width;
    if (hostWidth < minCardWidth * 2 + gapWidth * 3) {
      return 1;
    }
    if (hostWidth < minCardWidth * 3 + gapWidth * 4) {
      return 2;
    }
    if (hostWidth < minCardWidth * 4 + gapWidth * 5) {
      return 3;
    }
    if (hostWidth < minCardWidth * 5 + gapWidth * 6) {
      return 4;
    }
    if (hostWidth < minCardWidth * 6 + gapWidth * 7) {
      return 5;
    }
    return 6;
  };

  private _maxColumns: number = 4;

  @property({ type: Number, attribute: "max-columns" })
  set maxColumns(value: number | string) {
    const number = typeof value === "number" ? value : parseInt(value);
    if (!validMaxColumns.includes(number)) {
      throw new Error(`Max columns must be ${validMaxColumns.join(" or ")}, received ${value}`);
    }
    this._maxColumns = number;
  }

  get maxColumns() {
    return this._maxColumns;
  }

  private _aspectRatioHeight: ValidAspectRatioHeight | string = ValidAspectRatioHeight.Default;

  @property({ attribute: "aspect-ratio-height" })
  set aspectRatioHeight(value: ValidAspectRatioHeight | string) {
    if (
      !Object.values(ValidAspectRatioHeight).includes(value as ValidAspectRatioHeight) &&
      isNaN(value as unknown as number)
    ) {
      throw new Error(`Aspect ratio height ${value} is not valid`);
    }
    this._aspectRatioHeight = value;
  }

  get aspectRatioHeight() {
    return this._aspectRatioHeight;
  }

  private getAspectRatioHeightStyles = () => css`
    ::slotted(kobber-card-layout-column-aspect-ratio) {
      --aspect-ratio-height: ${unsafeCSS(getAspectRatioHeightValue(this.aspectRatioHeight))};
    }
  `;

  render = () => {
    const styles = stringifyStyleObject(":host", this.getStyles());
    return html`
      <style>
        ${styles}
        ${this.getAspectRatioHeightStyles()}
      </style>
      <div class="grid max-columns-${this._maxColumns}" style="--max-span: ${this._getMaxSpans()}">
        <slot />
      </div>
    `;
  };
}
