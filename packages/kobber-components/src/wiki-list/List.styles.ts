import { css } from "lit";

export const listStyles = css`
  :host {
    display: inline-flex;
    align-items: flex-start;
    align-content: flex-start;
    list-style-type: none;
    border-radius: var(--kobber-component-list-listcontainer-border-radius);

    /* "bottom-border" in list items */
    gap: var(--kobber-component-list-listcontainer-border-width);
    background-color: var(--kobber-component-list-listcontainer-border-color);

    /*box-shadow: var(--kobber-semantic-elevation-container-shadow-depth1-x)
        var(--kobber-semantic-elevation-container-shadow-depth1-y)
        var(--kobber-semantic-elevation-container-shadow-depth1-blur)
        var(--kobber-semantic-elevation-container-shadow-depth1-color); */

    /* TODO: fix box shadow above and figure out which color token to use */
    /* box-shadow: 0 0 15px var(--kobber-component-list-listcontainer-border-color); */
    box-shadow: 0 0 15px var(--kobber-semantic-elevation-container-shadow-depth1-color);
  }

  :host([direction="vertical"]) {
    flex-direction: column;
  }

  :host([direction="horizontal"]) {
    flex-direction: row;
  }
`;
