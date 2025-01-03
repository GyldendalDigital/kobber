import { CSSResultGroup, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { headingStyles } from "./Heading.styles";
import { headingClassNames, headingName, HeadingProps, sanitizeHeadingLevel } from "./Heading.core";

@customElement(headingName)
export class Heading extends LitElement implements HeadingProps {
  static styles: CSSResultGroup = [componentStyles, headingStyles];

  @property({ type: String })
  level: HeadingProps["level"];

  @property({ type: String })
  variant: HeadingProps["variant"];

  @property({ type: String })
  font: HeadingProps["font"];

  render() {
    const tag = sanitizeHeadingLevel(this.level);

    return html`
      <${unsafeStatic(tag)} class="${headingClassNames(this).join(" ")}">
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}
