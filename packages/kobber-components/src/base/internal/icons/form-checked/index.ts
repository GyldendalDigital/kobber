import { CSSResultGroup, LitElement } from "lit";
import { html } from "lit/static-html.js";
import { internalIconsStyles } from "../InternalIcons.styles";
import { customElement } from "../../../utilities/customElementDecorator";

export const iconFormCheckedName = "icon-form_checked";

@customElement(iconFormCheckedName)
export class IconFormChecked extends LitElement {
  static styles: CSSResultGroup = [internalIconsStyles];

  render() {
    return html` <svg viewBox="0 0 20 20" aria-hidden role="presentation">
      <path
        d="M9.14153 15.3415C8.89822 15.3422 8.65719 15.2946 8.4324 15.2015C8.20762 15.1084 8.00355 14.9716 7.83203 14.799L4.51603 11.4825C4.34678 11.3061 4.21409 11.0979 4.12562 10.87C4.03715 10.6421 3.99464 10.3989 4.00054 10.1545C4.00644 9.91013 4.06064 9.6693 4.16001 9.44592C4.25938 9.22255 4.40196 9.02104 4.57953 8.853C4.92372 8.5262 5.38042 8.34431 5.85503 8.345C6.33153 8.345 6.78403 8.525 7.13003 8.852L8.03553 9.75725L8.94103 10.6625L12.6315 5.742C12.8053 5.5119 13.0299 5.32516 13.2879 5.19643C13.5459 5.06769 13.8302 5.00046 14.1185 5C14.522 5 14.906 5.128 15.229 5.37C15.4245 5.51558 15.5892 5.6985 15.7135 5.90818C15.8377 6.11786 15.9192 6.35012 15.953 6.5915C15.9884 6.83274 15.9755 7.07859 15.915 7.3148C15.8546 7.55101 15.7479 7.77287 15.601 7.9675L10.6275 14.6C10.454 14.83 10.2295 15.0167 9.97165 15.1453C9.71382 15.274 9.42968 15.3411 9.14153 15.3415Z"
        fill="currentColor"
      ></path>
    </svg>`;
  }
}
