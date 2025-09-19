import { LitElement } from "lit";
import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { textBodyStyles } from "./TextBody.styles";
import { textBodyName, sanitizeTextBodyLevel } from "./TextBody.core";
import type { TextBodyProps } from "./TextBody.core";
import { customElement } from "../../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(textBodyName)
export class TextBody extends LitElement implements TextBodyProps {
  static styles: CSSResultGroup = [componentStyles, textBodyStyles];

  @property()
  level: TextBodyProps["level"];

  @property()
  size: TextBodyProps["size"] = "medium";

  @property()
  font: TextBodyProps["font"] = "brand";

  @property()
  color: TextBodyProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: TextBodyProps["colorVariant"] = "tone-a";

  @property()
  context: TextBodyProps["context"] = "short";

  render() {
    const tag = sanitizeTextBodyLevel(this.level);
    return html`
      <${unsafeStatic(tag)}
        class="${textBodyName}"
        data-level="${ifDefined(this.level)}"
        data-size="${ifDefined(this.size)}"
        data-font="${ifDefined(this.font)}"
        data-color="${ifDefined(this.color)}"
        data-color-variant="${ifDefined(this.colorVariant)}"
        data-context="${ifDefined(this.context)}"
      >
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [textBodyName]: TextBody;
  }
}
