import { LitElement } from "lit";
import type { CSSResultGroup } from "lit";
import { property, queryAssignedNodes } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { displayStyles } from "./Display.styles";
import { displayName, sanitizeDisplayLevel } from "./Display.core";
import type { DisplayProps } from "./Display.core";
import { customElement } from "../../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(displayName)
export class Display extends LitElement implements DisplayProps {
  static styles: CSSResultGroup = [componentStyles, displayStyles];

  @property()
  level: DisplayProps["level"];

  @property()
  size: DisplayProps["size"] = "large";

  @property()
  font: DisplayProps["font"] = "alt1";

  @queryAssignedNodes({ slot: "extended" })
  private _extendedNodes!: Array<Node>;

  private _hasExtended = false;

  private evaluateExtendedContent() {
    const nodes = this._extendedNodes || [];
    this._hasExtended = nodes.some(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        return (node.textContent || "").trim().length > 0;
      }
      return true;
    });
  }

  protected updated(): void {
    this.evaluateExtendedContent();
  }

  render() {
    const tag = sanitizeDisplayLevel(this.level);

    return html`
      <${unsafeStatic(tag)} class="${displayName}"
        data-level="${ifDefined(this.level)}"
        data-size="${ifDefined(this.size)}"
        data-font="${ifDefined(this.font)}"
      >
        <slot></slot>
        ${
          this._hasExtended
            ? html`<em><slot name="extended" @slotchange=${() => this.requestUpdate()}></slot></em>`
            : html`<slot name="extended" hidden @slotchange=${() => this.requestUpdate()}></slot>`
        }
      </${unsafeStatic(tag)}>
    `;
  }
}
