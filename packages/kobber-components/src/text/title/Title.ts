import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import type { TitleProps } from "./Title.core";
import { sanitizeTitleLevel, titleName } from "./Title.core";
import { titleStyles } from "./Title.styles";

@customElement(titleName)
export class Title extends LitElement implements TitleProps {
  static styles: CSSResultGroup = [componentStyles, titleStyles];

  @property()
  level: TitleProps["level"];

  @property()
  size: TitleProps["size"] = "large";

  @property()
  font: TitleProps["font"] = "brand";

  @property()
  color: TitleProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: TitleProps["colorVariant"] = "tone-a";

  render() {
    const tag = sanitizeTitleLevel(this.level);

    return html`
      <${unsafeStatic(tag)} class="${titleName}"
        data-level="${ifDefined(this.level)}"
        data-size="${ifDefined(this.size)}"
        data-font="${ifDefined(this.font)}"
        data-color="${ifDefined(this.color)}"
        data-color-variant="${ifDefined(this.colorVariant)}"
      >
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [titleName]: Title;
  }
}
