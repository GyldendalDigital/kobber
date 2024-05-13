import { layout, mediaQuery } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ContextProvider as LitContextProvider } from "@lit/context";
import { css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { context, defaultContext } from "./context";
import { gridConfigs } from "./gridConfig";
import { GridConfig, GridConfigId } from "./gridConfig/types";
import { StyledLitElement } from "../utils/StyledLitElement";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../utils/responsiveCssValue";
import { stringifyStyleObject } from "../utils/stringifyStyleObject";

@customElement("kobber-grid")
export class Grid extends StyledLitElement {
  static styles = css`
    :host {
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

  @state()
  private _config: GridConfig | undefined;

  @property()
  set config(value: GridConfigId) {
    const config = gridConfigs[value];
    this._config = config;
    this.provider.setValue({ config });
  }

  @property({ converter, attribute: "grid-template-columns" })
  override gridTemplateColumns?: ResponsiveCssValue = {
    [mediaQuery.small]: "repeat(4, 1fr)",
    [mediaQuery.medium]: "repeat(6, 1fr)",
    [mediaQuery.large]: "repeat(12, 1fr)",
  };

  @property({ converter, attribute: "gap" })
  gap?: ResponsiveCssValue = layout.gap["8-24"];

  @property({ converter, attribute: "padding-right" })
  paddingRight?: ResponsiveCssValue = layout.gap["16-32"];

  @property({ converter, attribute: "padding-left" })
  paddingLeft?: ResponsiveCssValue = layout.gap["16-32"];

  render() {
    const {
      containerType,
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
      ...rest
    } = this.getStyles(this._config?.gridProperties);
    const hostStyles = stringifyStyleObject(":host", {
      containerType,
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
    const gridStyles = stringifyStyleObject(".grid", rest);
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
