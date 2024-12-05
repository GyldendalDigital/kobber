import { html } from "lit";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

export const example = html`
  <kobber-card-layout>
    <kobber-card-layout-column-aspect-ratio span="2">
      <kobber-layout-example-card
        data-indicator-target
        badge="1"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 2"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="2"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="3"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="4"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="5"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio span="2">
      <kobber-layout-example-card
        data-indicator-target
        badge="6"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 2"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="7"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="8"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="9"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="10"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio span="4">
      <kobber-layout-example-card
        data-indicator-target
        badge="11"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 4"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio span="3">
      <kobber-layout-example-card
        data-indicator-target
        badge="12"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 3"
      />
    </kobber-card-layout-column-aspect-ratio>
    <kobber-card-layout-column-aspect-ratio>
      <kobber-layout-example-card
        data-indicator-target
        badge="13"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Dolor sit amet"
      />
    </kobber-card-layout-column-aspect-ratio>
  </kobber-card-layout>
`;
