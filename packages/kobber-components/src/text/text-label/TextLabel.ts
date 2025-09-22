import { LitElement } from "lit";
import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { textLabelStyles } from "./TextLabel.styles";
import { textLabelName, sanitizeTextLabelLevel, type TextLabelProps } from "./TextLabel.core";
import { customElement } from "../../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(textLabelName)
export class TextLabel extends LitElement implements TextLabelProps {
  static styles: CSSResultGroup = [componentStyles, textLabelStyles];

  @property()
  level: TextLabelProps["level"];

  @property()
  size: TextLabelProps["size"] = "medium";

  @property()
  color: TextLabelProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: TextLabelProps["colorVariant"] = "tone-a";

  render() {
    const tag = sanitizeTextLabelLevel(this.level);
    return html`
      <${unsafeStatic(tag)}
        class="${textLabelName}"
        data-size="${ifDefined(this.size)}"
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
    [textLabelName]: TextLabel;
  }
}
