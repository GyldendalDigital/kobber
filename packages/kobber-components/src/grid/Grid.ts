import { layout, mediaQuery } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { ContextProvider as LitContextProvider } from "@lit/context";
import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { context, defaultContext } from "./Grid.context";
import { gridConfigs } from "./Grid.config";
import { GridConfig, GridConfigId } from "./config/types";
import { StyledLitElement } from "../base/utilities/StyledLitElement";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../base/utilities/responsiveCssValue";
import { stringifyStyleObject } from "../base/utilities/stringifyStyleObject";
import { customElement } from "../base/utilities/customElementDecorator";

const defaultGridStyles = {
  maxWidth: `${layout.contentMaxWidth / 16}rem`,
};

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
      min-width: 0;
      width: 100%;
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

  get config() {
    return this.config;
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
      padding,
      ...rest
    } = this.getStyles(this._config?.gridProperties);
    const hostStyles = stringifyStyleObject(":host", {
      containerType,
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
      padding,
    });
    const gridStyles = stringifyStyleObject(".grid", { ...defaultGridStyles, ...rest });
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
