import { CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { linkStyles } from "./Link.styles";
import componentStyles from "../../base/styles/component.styles";
import { isExternalLink, linkName, LinkProps } from "./Link.core";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(linkName)
export class Link extends LitElement implements LinkProps {
  static styles: CSSResultGroup = [componentStyles, linkStyles];

  @property()
  href?: HTMLAnchorElement["href"];

  @property()
  target?: HTMLAnchorElement["target"];

  render() {
    const isExternal = isExternalLink(this.href);
    const target = this.target || (isExternal ? "_blank" : undefined);
    return html`
      <a class="${linkName} ${this.className}" href=${ifDefined(this.href)} target=${ifDefined(target)}>
        <slot></slot>
        ${isExternal
          ? html`<svg viewBox="0 0 20 20">
              <g clip-path="url(#bva)">
                <path
                  fill="currentColor"
                  d="M6.876 13.748a.628.628 0 0 1-.442-1.067L17.867 1.247h-4.115a.625.625 0 0 1 0-1.25h5.625a.625.625 0 0 1 .578.387l.007.022a.61.61 0 0 1 .04.216v5.625a.625.625 0 0 1-1.25 0V2.132L7.318 13.566a.626.626 0 0 1-.442.182Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M1.876 19.998a1.877 1.877 0 0 1-1.875-1.875v-12.5a1.877 1.877 0 0 1 1.875-1.875h7.5a.625.625 0 0 1 0 1.25h-7.5a.625.625 0 0 0-.625.625v12.5c0 .345.28.625.625.625h12.5a.625.625 0 0 0 .625-.625v-7.5a.625.625 0 1 1 1.25 0v7.5a1.877 1.877 0 0 1-1.875 1.875h-12.5Z"
                ></path>
              </g>
              <defs>
                <clipPath id="bva">
                  <path fill="currentColor" d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs>
            </svg>`
          : null}
      </a>
    `;
  }
}
