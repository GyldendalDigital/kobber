import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
  
  @customElement("kobber-scene")
  export class Scene extends LitElement {
    static styles = css`
      :host {
      }

      .scene {
        border: solid 10px red;
      }
    `;
  
    render() {
      return html`
        <div class="scene">
          <slot />
        </div>
      `;
    }
  }
  