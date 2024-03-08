import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { colorDefault } from "./button-color-default.styles";
import { colorInfo } from "./button-color-info.styles";
import { levelSecondary } from "./button-level-secondary.styles";
import { levelPrimary } from "./button-level-primary.styles";

@customElement("kobber-button")
export class Button extends LitElement {
  @property()
  color: "default" | "info" = "default";

  @property()
  level: "primary" | "secondary" = "primary";

  render() {
    return html`<button class=${classMap({ [this.color]: true, [this.level]: true })}><slot /></button>`;
  }

  static styles = [
    levelPrimary,
    levelSecondary,
    colorDefault,
    colorInfo,
    css`
    button {
      /* Common for all variants */
      border: none;
      border-radius: var(--kobber-component-button-border-radius, 1000px);
      padding: var(--kobber-component-button-padding-block, 8px)
        var(--kobber-component-button-padding-inline, 16px);
      font-size: calc(var(--kobber-typography-action-button-font-size, 16) * 1px);
      font-family: var(--kobber-typography-action-button-font-family, "Arial");
      text-decoration: var(
        --kobber-typography-action-button-font-decoration,
        none
      );
      font-weight: var(--kobber-typography-action-button-font-weight, 500);
      font-style: var(--kobber-typography-action-button-font-style, normal);
      font-stretch: var(--kobber-typography-action-button-font-stretch, normal);

      /* Different for each variant */
      background-color: var(--button-color-background);
      color: var(--button-color-foreground);
      border: var(--button-border-size) solid var(--button-color-border);

      &:hover {
        background-color: var(--button-color-background-hover);
        color: var(--button-color-foreground-hover);
        border: var(--button-border-size) solid var(--button-color-border);
      }
      
      &:focus {
        background-color: var(--button-color-background-focus);
        color: var(--button-color-foreground-focus);
        outline: none;
        box-shadow: 0 0 0 4px var(--button-color-border-focus);
        border: var(--button-border-size) solid var(--button-color-border);
      }

      &:active {
        background-color: var(--button-color-background-active);
        color: var(--button-color-foreground-active);
        border: var(--button-border-size) solid var(--button-color-border);
      }

      &:disabled {
        background-color: var(--button-color-background-disabled);
        color: var(--button-color-foreground-disabled);
        font-style: var(--kobber-typography-action-disabled-button-font-style);
        border: var(--button-border-size) solid var(--button-color-border);
      }
    }
  `];
}
