import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./text-wrapper/TextWrapper";
import "./text-highlight/TextHighlight";
import "./heading/Heading";
import "./ingress/Ingress";
import "./link/Link";
import { headingPrimarySizes, headingSecondarySizes } from "./heading/Heading.core";
import { textHighlightColors } from "./text-highlight/TextHighlight.core";
import { template } from "@gyldendal/kobber-base/themes/default/tokens.js";

const meta: Meta = {
  title: "In development 🧪/Text",
  decorators: [(Story, context) => html`<div class="${context.globals.theme}">${Story()}</div>`],
};

export default meta;
type Story = StoryObj;

export const All: Story = {
  render: () => html`
    <kobber-text-wrapper>
      <kobber-heading>
        Velkommen til kobber<br />
        <kobber-text-highlight>Gyldendals designsystem</kobber-text-highlight>
      </kobber-heading>

      <kobber-ingress>
        Phosfluorescently innovate real-time experiences vis-a-vis unique opportunities. Interactively disintermediate
        sustainable niches before long-term <kobber-text-highlight>high-impact</kobber-text-highlight> resources.
        Interactively deliver 2.0 infomediaries via timely.
      </kobber-ingress>

      <p>
        Rapidiously strategize integrated intellectual capital vis-a-vis
        <kobber-text-highlight>progressive</kobber-text-highlight> mindshare.
      </p>
      <p>
        Uniquely
        <kobber-link href="https://github.com/GyldendalDigital/kobber" target="_blank">reconceptualize</kobber-link>
        robust e-tailers without ethical action items. Compellingly restore resource-leveling experiences without
        exceptional technology. Assertively target 2.0 networks through state of the art e-services. Continually
        innovate ubiquitous relationships and visionary internal or "organic" sources. Interactively iterate sustainable
        users via diverse paradigms.
      </p>
      <p>
        Energistically <kobber-link href="#">implement</kobber-link> installed base models vis-a-vis innovative
        mindshare. Conveniently cultivate pandemic methods of empowerment and unique networks. Enthusiastically
        negotiate one-to-one catalysts for change with principle-centered potentialities. Dynamically e-enable
        next-generation applications rather than leveraged testing procedures. Dynamically reconceptualize B2B sources
        rather.
      </p>
      <ul>
        <li>Page: Omfavner hele siden, inkludert alle hovedelementene</li>
        <li>Header: Topplinjen som inneholder navigasjon og eventuelt logo.</li>
        <li>Main: Hoveddelen av siden som inkluderer både sidemeny og alt øvrig innhold.</li>
        <li>Content: Alt innhold på siden som presenteres innenfor hovedstrukturen.</li>
        <li>
          Section: Inndeling av innhold i mindre seksjoner basert på funksjon eller relevans, som tekstbolker, kortgrid
          eller bilder.
        </li>
        <li>
          Footer: En sekundær navigasjons- og informasjonsseksjon som gir en naturlig avslutning på siden, og inneholder
          ofte lenker, juridisk informasjon eller kontaktopplysninger.
        </li>
      </ul>
      <p>
        Quickly grow intermandated infomediaries with innovative processes. Intrinsicly cultivate covalent core
        competencies through fully tested collaboration and idea-sharing. Credibly whiteboard bleeding-edge e-services
        via real-time collaboration and idea-sharing. Compellingly myocardinate transparent e-business after superior
        users. Authoritatively reintermediate economically sound
        <kobber-text-highlight color="rettsdata">collaboration and idea-sharing</kobber-text-highlight> after
        cross-media benefits.
      </p>
      <p>
        Phosfluorescently negotiate high-payoff catalysts for change without interactive partnerships. Proactively seize
        business vortals vis-a-vis just in time products. Uniquely formulate parallel human capital without
        backward-compatible quality vectors. Objectively maintain quality initiatives vis-a-vis efficient deliverables.
        Seamlessly aggregate unique communities before diverse resources.
      </p>
      <p>
        Assertively parallel task plug-and-play best practices through long-term high-impact data. Quickly integrate
        e-business e-commerce rather.
      </p>
    </kobber-text-wrapper>
  `,
};

export const Heading: Story = {
  argTypes: {
    text: {
      control: "text",
    },
    highlighted: {
      control: "boolean",
    },
    h1: {
      control: "boolean",
    },
  },
  args: {
    text: "",
    highlighted: false,
    h1: false,
  },
  render: args => {
    const text = (textValue: string) =>
      args.highlighted ? html`<kobber-text-highlight>${textValue}</kobber-text-highlight>` : textValue;

    return html`
      <div style="display: flex; gap: 2rem;">
        <kobber-text-wrapper class="kobber-text-wrapper">
          Primary
          ${headingPrimarySizes.map(
            size => html`
              <kobber-heading level="${args.h1 ? "h1" : "h2"}" variant="${size}" font="primary">
                ${text(args.text || size)}
              </kobber-heading>
            `,
          )}
        </kobber-text-wrapper>

        <kobber-text-wrapper class="kobber-text-wrapper">
          Secondary
          ${headingSecondarySizes.map(
            size => html`
              <kobber-heading level="${args.h1 ? "h1" : "h2"}" variant="${size}" font="secondary">
                ${text(args.text || size)}
              </kobber-heading>
            `,
          )}
        </kobber-text-wrapper>
      </div>
    `;
  },
};

export const Ingress: Story = {
  argTypes: {
    text: {
      control: "text",
    },
  },
  args: {
    text: "Kobber er Gyldendals verktøykasse for design- og merkevare. Det er et designsystem bestående av gjenbrukbare, fleksible ressurser slik som digitale komponenter, malverk, retningslinjer og kode. Samtidig tydeliggjør det vår merkevarestrategi, våre felles verdier og de opplevelsene vi har som mål å tilby våre sluttbrukere.",
  },
  render: args => {
    return html`<div style="max-width: 600px;">
      <kobber-ingress> ${args.text} </kobber-ingress>
    </div>`;
  },
};

export const Highlight: Story = {
  argTypes: {
    text: {
      control: "text",
    },
  },
  args: {
    text: "Highlight",
  },
  render: args => {
    return html`
      <kobber-text-wrapper>
        ${textHighlightColors.map(
          (color, i) =>
            html`<kobber-text-highlight color="${color}"
              >${color} ${args.text} ${i === 0 ? " (default)" : ""}</kobber-text-highlight
            >`,
        )}
      </kobber-text-wrapper>
    `;
  },
};

const linkStates = ["idle", "active", "hover", "focus"];

export const Link: Story = {
  argTypes: {
    external: {
      control: "boolean",
    },
  },
  args: {
    external: false,
  },
  render: args => {
    return html`<div style="max-width: 600px;">
      <kobber-text-wrapper>
        ${linkStates.map(
          state =>
            html`<p>
              <kobber-link
                class="${state}"
                href="${args.external ? "https://github.com/GyldendalDigital/kobber" : "/"}"
              >
                ${args.external ? "Ekstern" : "Intern"} lenke
              </kobber-link>
              med tilstand <code>${state}</code>
            </p>`,
        )}
      </kobber-text-wrapper>
    </div>`;
  },
};

export const Wrapper: Story = {
  render: () => {
    return html`<div style="max-width: 600px;">
      <kobber-text-wrapper>
        <h1>Hvorfor et designsystem?</h2>
        <p>
          Designsystemet muliggjør en raskere og mer effektiv praksis for konsistent merkevarebygging, produktutvikling og kommunikasjon. Det skaper en tydeligere felles retning, og bidrar til økt kjennskap til og gjenkjennelighet av Gyldendal.
        </p>
        <p>
        Det skal bidra til å styrke fellesskapsfølelsen på tvers av hele Gyldendal, ved å legge til rette for bedre samarbeid, transparens, synergier og deling av kompetanse og metoder på tvers av fagfelt, avdelinger og produkter.
        </p>
      </kobber-text-wrapper>
      <br />
      <pre style="border: 1px solid grey; border-radius: 1rem; padding: 1rem;">
        Wrapper bolker med tekst og gir gap ${pxToRem(template["text-wrapper"].gap.horizontal)} (${template["text-wrapper"].gap.horizontal}px)
      </pre>
    </div> `;
  },
};

const pxToRem = (px: number) => `${px / 16}rem`;
