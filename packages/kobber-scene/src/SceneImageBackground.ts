import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SceneBackground } from "./SceneBackground";
import { CmsBackgroundImageStyle } from "./types";

@customElement("kobber-scene-image-background")
export class SceneImageBackground extends SceneBackground {
  static styles = [
    ...SceneBackground.styles,
    css`
      .crop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip: rect(0, auto, auto, 0);
      }

      .image {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background-position: center center;
        transform: translateZ(0);
        will-change: transform;
      }
    `,
  ];

  @property({ type: String, attribute: "background-color" })
  backgroundColor: string = "white";

  @property({ type: String, attribute: "background-image-url" })
  backgroundImageUrl?: string;

  @property({ type: Number, attribute: "background-image-style" })
  backgroundImageStyle?: CmsBackgroundImageStyle =
    CmsBackgroundImageStyle.Stretch;

  @property({ type: String, attribute: "width" })
  width?: string = "100%";

  connectedCallback() {
    super.connectedCallback();
    this.role = "img";
  }

  private getCropStyles = () => {
    return css`
      background-color: ${unsafeCSS(this.backgroundColor)};
    `;
  };

  private getImageStyles = () => {
    return css`
      width: ${unsafeCSS(
        this.backgroundImageStyle === CmsBackgroundImageStyle.Fit
          ? this.width
          : "100%",
      )};
      background-image: ${unsafeCSS(`url(${this.backgroundImageUrl})`)};

      ${this.backgroundImageStyle === CmsBackgroundImageStyle.Stretch
        ? css`
            background-repeat: no-repeat;
            background-size: cover;
          `
        : this.backgroundImageStyle === CmsBackgroundImageStyle.Fit
          ? css`
              background-repeat: no-repeat;
              background-size: contain;
            `
          : css``};
    `;
  };

  render() {
    return html`
      <style>
        .crop {
          ${this.getCropStyles()}
        }

        .image {
          ${this.getImageStyles()}
        }
      </style>
      <div class="crop">
        <div class="image" />
      </div>
    `;
  }
}
