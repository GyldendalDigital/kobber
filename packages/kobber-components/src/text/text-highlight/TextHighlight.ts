import { CSSResultGroup, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import KobberElement from "../../base/kobber-element";
import { textHighlightStyles } from "./TextHighlight.styles";
import componentStyles from "../../base/styles/component.styles";
import {
  textHighlightClassNames,
  TextHighlightColor,
  textHighlightName,
  TextHighlightProps,
} from "./TextHighlight.core";

@customElement(textHighlightName)
export class TextHighlight extends KobberElement implements TextHighlightProps {
  static styles: CSSResultGroup = [componentStyles, textHighlightStyles()];

  @property()
  color?: TextHighlightColor;

  render() {
    return html`
      <span
        class="${[
          ...textHighlightClassNames({
            color: this.color,
          }),
          this.className,
        ].join(" ")}"
      >
        <slot></slot>
      </span>
    `;
  }
}
