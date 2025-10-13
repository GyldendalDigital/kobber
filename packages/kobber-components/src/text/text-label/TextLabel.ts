import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { sanitizeTextLabelLevel, type TextLabelProps, textLabelName } from "./TextLabel.core";
import { textLabelStyles } from "./TextLabel.styles";

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
