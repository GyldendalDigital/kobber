import { layout, mediaQuery } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ContextProvider as LitContextProvider } from "@lit/context";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { context, defaultContext } from "./context";
import { GridConfigId, gridConfigs } from "./gridConfig";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../utils/responsiveCssValue";
import { stringifyStyleObject } from "../utils/stringifyStyleObject";

@customElement("kobber-grid")
export class Grid extends LitElement {
  static styles = css`
    :host {
      container-type: inline-size;
      display: grid;
      width: 100%;
      justify-items: center;
    }

    .grid {
      display: grid;
      width: 100%;
      min-width: 0;
      max-width: ${layout.maxWidth / 16}rem;
    }
  `;

  @state()
  private _configId: GridConfigId | undefined;

  @property({ attribute: false })
  private _provider = new LitContextProvider(this, {
    context,
    initialValue: defaultContext,
  });

  public get provider() {
    return this._provider;
  }

  public set provider(value) {
    this._provider = value;
  }

  @property()
  config?: GridConfigId;

  @property({ converter, attribute: "grid-template" })
  gridTemplate?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-columns" })
  gridAutoColumns?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-flow" })
  gridAutoFlow?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-auto-rows" })
  gridAutoRows?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template-areas" })
  gridTemplateAreas?: ResponsiveCssValue;

  @property({ converter, attribute: "grid-template-columns" })
  gridTemplateColumns?: ResponsiveCssValue = {
    [mediaQuery.small]: "repeat(4, 1fr)",
    [mediaQuery.medium]: "repeat(6, 1fr)",
    [mediaQuery.large]: "repeat(12, 1fr)",
  };

  @property({ converter, attribute: "grid-template-rows" })
  gridTemplateRows?: ResponsiveCssValue;

  @property({ converter, attribute: "align-conent" })
  alignContent?: ResponsiveCssValue;

  @property({ converter, attribute: "justify-content" })
  justifyContent?: ResponsiveCssValue;

  @property({ converter, attribute: "gap" })
  gap?: ResponsiveCssValue = layout.gap["8-24"];

  @property({ converter, attribute: "justify-items" })
  justifyItems?: ResponsiveCssValue;

  @property({ converter, attribute: "align-items" })
  alignItems?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-top" })
  paddingTop?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-right" })
  paddingRight?: ResponsiveCssValue = layout.gap["16-32"];

  @property({ converter, attribute: "padding-bottom" })
  paddingBottom?: ResponsiveCssValue;

  @property({ converter, attribute: "padding-left" })
  paddingLeft?: ResponsiveCssValue = layout.gap["16-32"];

  attributeChangedCallback(name: unknown, _old: unknown, value: unknown) {
    if (name === "config") {
      this.applyConfig(value as GridConfigId);
    }
  }

  applyConfig = (configId: GridConfigId) => {
    this._configId = configId;
    const styles = gridConfigs[this._configId].gridStyles ?? {};
    this.gridTemplateColumns = styles.gridTemplateColumns ?? this.gridTemplateColumns;
    this.gridAutoColumns = styles.gridAutoColumns ?? this.gridAutoColumns;
    this.gap = styles.gap ?? this.gap;
    this.paddingTop = styles.paddingTop ?? this.paddingTop;
    this.paddingRight = styles.paddingRight ?? this.paddingRight;
    this.paddingBottom = styles.paddingBottom ?? this.paddingBottom;
    this.paddingLeft = styles.paddingTop ?? this.paddingLeft;
    this.provider.setValue({ config: this._configId });
  };

  hostStyles = () => ({
    paddingTop: this.paddingTop,
    paddingRight: this.paddingRight,
    paddingBottom: this.paddingBottom,
    paddingLeft: this.paddingLeft,
  });

  gridStyles = () => ({
    gridTemplate: this.gridTemplate,
    gridAutoColumns: this.gridAutoColumns,
    gridAutoFlow: this.gridAutoFlow,
    gridAutoRows: this.gridAutoRows,
    gridTemplateColumns: this.gridTemplateColumns,
    gridTemplateAreas: this.gridTemplateAreas,
    gridTemplateRows: this.gridTemplateRows,
    alignContent: this.alignContent,
    justifyContent: this.justifyContent,
    gap: this.gap,
    justifyItems: this.justifyItems,
    alignItems: this.alignItems,
  });

  render() {
    const hostStyles = stringifyStyleObject(":host", this.hostStyles());
    const gridStyles = stringifyStyleObject(".grid", this.gridStyles());
    return html`
      <style>
        ${hostStyles}
        ${gridStyles}
      </style>
      <div class="grid">
        <slot />
      </div>
    `;
  }
}
