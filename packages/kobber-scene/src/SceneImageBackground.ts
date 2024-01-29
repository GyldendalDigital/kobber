import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SceneBackground } from "./SceneBackground";
import { RedapticBackgroundImageStyle } from "./types";

@customElement("kobber-scene-image-background")
export class SceneImageBackground extends SceneBackground {
  static styles = [
    ...SceneBackground.styles,
    css`
      .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip: rect(0, auto, auto, 0);

        &:before {
          content: "";
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          background-position: center center;
          transform: translateZ(0);
          will-change: transform;
        }
      }
    `,
  ];

  @property({ type: String, attribute: "background-color" })
  backgroundColor: string = "white";

  @property({ type: String, attribute: "background-image-url" })
  backgroundImageUrl?: string;

  @property({ type: Number, attribute: "background-image-style" })
  backgroundImageStyle?: RedapticBackgroundImageStyle =
    RedapticBackgroundImageStyle.Stretch;

  @property({ type: String, attribute: "width" })
  width?: string = "100%";

  connectedCallback() {
    super.connectedCallback();
    this.role = "img";
  }

  private getStyles = () => {
    return css`
      background-color: ${unsafeCSS(this.backgroundColor)};

      &:before {
        width: ${unsafeCSS(
          this.backgroundImageStyle === RedapticBackgroundImageStyle.Fit
            ? this.width
            : "100%",
        )};
        background-image: ${unsafeCSS(`url(${this.backgroundImageUrl})`)};

        ${this.backgroundImageStyle === RedapticBackgroundImageStyle.Stretch
          ? css`
              background-repeat: no-repeat;
              background-size: cover;
            `
          : this.backgroundImageStyle === RedapticBackgroundImageStyle.Fit
            ? css`
                background-repeat: no-repeat;
                background-size: contain;
              `
            : css``};
      }
    `;
  };

  render() {
    return html`
      <style>
        .image {
          ${this.getStyles()}
        }
      </style>
      <div class="image" />
    `;
  }
}
