import { CSSResultGroup, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { headingStyles } from "./Heading.styles";
import { headingClassNames, headingName, HeadingProps, sanitizeHeadingLevel } from "./Heading.core";
import { customElement } from "../../base/utilities/customElementDecorator";

@customElement(headingName)
export class Heading extends LitElement implements HeadingProps {
  static styles: CSSResultGroup = [componentStyles, headingStyles];

  @property()
  level: HeadingProps["level"];

  @property()
  element: HeadingProps["element"] = "display";

  @property({ attribute: "color-level" })
  colorLevel: HeadingProps["colorLevel"] = "primary";

  @property()
  size: HeadingProps["size"] = "small";

  render() {
    const tag = sanitizeHeadingLevel(this.level);

    return html`
      <${unsafeStatic(tag)} class="${headingClassNames().join(" ")}"
        data-level="${this.level}"
        data-element="${this.element}"
        data-color-level="${this.colorLevel}"
        data-size="${this.size}"
      >
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}
