import { customElement, property, state } from "lit/decorators.js";
import { labelClassNames, labelName, LabelProps } from "./Label.core";
import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { labelStyles } from "./Label.styles";

/**
 * Kobber Label web-component
 */

@customElement(labelName)
export class Label extends LitElement implements LabelProps {
  static styles: CSSResultGroup = [componentStyles, labelStyles];

  @property()
  variant?: LabelProps["variant"];

  @property()
  theme?: LabelProps["theme"];

  @property()
  size?: LabelProps["size"];

  @property()
  text?: LabelProps["text"];

  @property({ type: Boolean })
  showStatusCircle?: LabelProps["showStatusCircle"];

  @state()
  private label?: string | null;

  connectedCallback() {
    super.connectedCallback();

    this.label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");
  }

  render() {
    return html` <label
      class="${[
        ...labelClassNames({
          variant: this.variant,
          theme: this.theme,
          size: this.size,
          showStatusCircle: this.showStatusCircle,
        }),
        this.className,
      ].join(" ")}"
      aria-label=${this.label}
    >
      <slot name="status-circle"></slot>
      <slot></slot>
    </label>`;
  }
}
