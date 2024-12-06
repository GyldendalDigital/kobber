import { html } from "lit";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

export const miniExample = html`
  <kobber-horizontal-layout>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="1"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
  </kobber-horizontal-layout>
`;

export const exampleIrregular = html`
  <kobber-horizontal-layout>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="1"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column span="2">
      <kobber-layout-example-card
        data-indicator-target
        badge="2"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 2"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="3"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="4"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="5"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
        ><a href="https://vg.no">En lang lenke til VG</a>
      </kobber-layout-example-card>
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column span="2">
      <kobber-layout-example-card
        data-indicator-target
        badge="6"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 2"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="7"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="8"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="9"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
        ><a href="https://vg.no">VG</a>
      </kobber-layout-example-card>
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="10"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column span="4">
      <kobber-layout-example-card
        data-indicator-target
        badge="11"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 4"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column span="3">
      <kobber-layout-example-card
        data-indicator-target
        badge="12"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Span 3"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="13"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
  </kobber-horizontal-layout>
`;

export const exampleRegular = html`
  <kobber-horizontal-layout>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="1"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="2"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="3"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
        ><a href="https://vg.no">VG</a>
      </kobber-layout-example-card>
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="4"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card data-indicator-target badge="5" image="${placeholderImage}" heading="Lorem ipsum" body=" "
        ><a href="https://vg.no">En lang lenke til VG</a>
      </kobber-layout-example-card>
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="6"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="7"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="8"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="9"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
        ><a href="https://vg.no">VG</a>
      </kobber-layout-example-card>
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="10"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="11"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="12"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
    <kobber-horizontal-layout-column>
      <kobber-layout-example-card
        data-indicator-target
        badge="13"
        image="${placeholderImage}"
        heading="Lorem ipsum"
        body="Carousel sit amet"
      />
    </kobber-horizontal-layout-column>
  </kobber-horizontal-layout>
`;
