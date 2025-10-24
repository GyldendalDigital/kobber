import { type CSSResultGroup, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { type HeadingProps, headingName, sanitizeHeadingLevel } from "./Heading.core";
import { headingStyles } from "./Heading.styles";

@customElement(headingName)
export class Heading extends LitElement implements HeadingProps {
  static styles: CSSResultGroup = [componentStyles, headingStyles];

  @property()
  level: HeadingProps["level"];

  @property()
  size: HeadingProps["size"] = "large";

  @property()
  font: HeadingProps["font"] = "brand";

  @property()
  color: HeadingProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: HeadingProps["colorVariant"] = "tone-a";

  render() {
    const tag = sanitizeHeadingLevel(this.level);

    return html`
      <${unsafeStatic(tag)} class="${headingName}"
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
