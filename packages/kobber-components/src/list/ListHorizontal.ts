/**
 * Attempt to follow a progressive enhancement approach, by expecting an ul with li children in the slot,
 * making the component usable without JavaScript.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement | Progressive Enhancement}
 */
class ListHorizontal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const lightDomCss = document.createElement("style");
    lightDomCss.innerHTML = `
        ${customElementName} li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: var(--kobber-component-list-listitem-gap);
          width: var(--kobber-component-list-listitem-large-container-size-width);
          height: var(--kobber-component-list-listitem-large-container-size-height);
          padding: var(--kobber-component-list-listitem-large-container-padding)px;

          &:hover {
            color: red;
          }
        }
        `;
    this.append(lightDomCss);
    this.shadowRoot!.innerHTML = `
      <style>
        ::slotted(ul), ::slotted(ol) {
          display: inline-flex;
          align-items: flex-start;
          align-content: flex-start;
          list-style-type: none;
          padding: 0;
          border-radius: var(--kobber-component-list-listcontainer-border-radius);
          border-width: var(--kobber-component-list-listcontainer-border-width);
          border-color: var(--kobber-component-list-listcontainer-border-color);
          box-shadow: 
            var(--kobber-semantic-elevation-container-shadow-depth1-x) 
            var(--kobber-semantic-elevation-container-shadow-depth1-y) 
            var(--kobber-semantic-elevation-container-shadow-depth1-blur)px 
            var(--kobber-semantic-elevation-container-shadow-depth1-color);
          
          /* TODO: fix box shadow above and figure out which color token to use */
          box-shadow: 0 0 15px var(--kobber-component-list-listcontainer-border-color);
          box-shadow: 0 0 15px var(--kobber-semantic-elevation-container-shadow-depth1-color);
        }
      </style>
      <slot></slot>
    `;
  }
}

export const customElementName = "kobber-list-horizontal";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, ListHorizontal);
}
