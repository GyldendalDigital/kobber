import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit/static-html.js";
import "./text-wrapper/TextWrapper";
import "./heading/Heading";
import "./lead/Lead";
import "./text-link/TextLink";
import {
  headingColors,
  headingSizes,
  headingColorVariants,
  headingFonts,
} from "./heading/Heading.core";
import "@gyldendal/kobber-icons/web-components";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { getPrintedState, linkStates } from "../story/linkStates";
import { leadColors, leadColorVariants } from "./lead/Lead.core";

initComponents();
initIcons();

const meta: Meta = {
  title: "Styles and Foundation/Text",
  decorators: [(Story, context) => html`<div class="${context.globals.theme}">${Story()}</div>`],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const All: Story = {
  parameters: {
    layout: "padded", // Default not-centered value, as per https://storybook.js.org/docs/configure/story-layout
  },
  render: () => html`
    <kobber-text-wrapper>
      <kobber-heading>
        Velkommen til kobber<br />
        <em>Gyldendals designsystem</em>
      </kobber-heading>

      <kobber-lead>
        Phosfluorescently innovate real-time experiences vis-a-vis unique opportunities. Interactively disintermediate
        sustainable niches before long-term <em>high-impact</em> resources. Interactively deliver 2.0 infomediaries via
        timely.
      </kobber-lead>

      <p>
        Rapidiously strategize integrated intellectual capital vis-a-vis
        <em>progressive</em> mindshare.
      </p>
      <p>
        Uniquely <kobber-text-link href="https://github.com/GyldendalDigital/kobber">reconceptualize</kobber-text-link>
        robust e-tailers without ethical action items. Compellingly restore resource-leveling experiences without
        exceptional technology. Assertively target 2.0 networks through state of the art e-services. Continually
        innovate ubiquitous relationships and visionary internal or "organic" sources. Interactively iterate sustainable
        users via diverse paradigms.
      </p>
      <p>
        Energistically <kobber-text-link href="#">implement</kobber-text-link> installed base models vis-a-vis
        innovative mindshare. Conveniently cultivate pandemic methods of empowerment and unique networks.
        Enthusiastically negotiate one-to-one catalysts for change with principle-centered potentialities. Dynamically
        e-enable next-generation applications rather than leveraged testing procedures. Dynamically reconceptualize B2B
        sources rather.
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
        <em>collaboration and idea-sharing</em> after cross-media benefits.
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

/**
 * Primary er pp-mori, secondary er Lyon Display.
 */
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
      args.highlighted ? html`<em>${textValue}</em>` : textValue;

    return html`
      <kobber-text-wrapper class="kobber-text-wrapper">
        ${headingColors.map(
          color => html`
            ${headingSizes.map(
              size =>
                html` <div></div>
            <em style="font-size: 1.2em;">${color} - ${size}</em>
            <div
            style="
              display: grid;
              border: 1px solid;
              padding: 1em;"
            >
            ${headingColorVariants.map(colorVariant =>
              headingFonts.map(
                font => html`
                  <div
                    style="margin-bottom: 0.5rem; background-color: ${
                      colorVariant === "tone-b" ? "darkgray" : "transparent"
                    };"
                  >
                    <p style="">${colorVariant} ${font}</p>
                    <kobber-heading
                      highlighted
                      level="${args.h1 ? "h1" : "h2"}"
                      size="${size}"
                      font="${font}"
                      color="${color}"
                      colorVariant="${colorVariant}"
                    >
                      ${text(args.text || "Heading")}
                    </kobber-heading>
                  </div>
                `,
              ),
            )}
            </div>
          </div>`,
            )}
          `,
        )}
      </kobber-text-wrapper>
    `;
  },
};

/**
 * 
                    html`
                      <p style="grid-area: ${colorVariant};">${colorVariant}</p>
                      <kobber-heading
                        level="${args.h1 ? "h1" : "h2"}"
                        size="${size}"
                        font="${"brand"}"
                        color="${color}"
                        colorVariant="${colorVariant}"
                        style="grid-area: sample-${colorVariant};"
                      >
                        ${text(args.text || "Heading")}
                      </kobber-heading>
                      <p style="grid-area: ${font};">${font}</p>
                      <kobber-heading
                        level="${args.h1 ? "h1" : "h2"}"
                        size="${size}"
                        font="${font}"
                        color="${color}"
                        colorVariant="${colorVariant}"
                        style="grid-area: sample-${colorVariant};"
                      >
                        ${text(args.text || "Heading")}
                      </kobber-heading>
                    `,
                  )
 * Bruker farge fra "component.article", og typografi fra "title medium".
 */
export const Lead: Story = {
  argTypes: {
    text: {
      control: "text",
    },
    color: {
      control: "inline-radio",
      options: leadColors,
    },
    colorVariant: {
      control: "inline-radio",
      options: leadColorVariants,
      name: "color-variant",
    },
  },
  args: {
    text: "Lead er en ingress som brukes som en kort innledningstekst som oppsummerer eller introduserer innholdet.",
    color: leadColors[0],
    colorVariant: leadColorVariants[0],
  },
  render: (args) => {
    return html`<div style="max-width: 600px;">
      <kobber-lead color="${args.color}" color-variant="${args.colorVariant}"> ${args.text} </kobber-lead>
    </div>`;
  },
};

/**
 * Disabled er ikke en gyldig state for lenker. Da fjerner man heller href-attributten.
 */
export const Link: Story = {
  argTypes: {
    icon: {
      control: "boolean",
    },
  },
  args: {
    icon: false,
  },
  render: args => {
    return html`<div style="max-width: 600px;">
      <kobber-text-wrapper>
        ${linkStates.map(state => {
          return html`<p>
            <kobber-text-link
              class="${state}"
              href=${state !== "disabled" ? "https://github.com/GyldendalDigital/kobber" : ""}
            >
              Lenke ${args.icon ? html`<kobber-external_link_arrow />` : null}
            </kobber-text-link>
            med tilstand ${getPrintedState(state)}
          </p>`;
        })}
      </kobber-text-wrapper>
    </div>`;
  },
};

/**
 * Wrapper bolker med tekst og gir gap på 1rem (16 px).
 */
export const Wrapper: Story = {
  render: () => {
    return html`<div style="width: 100%">
      <kobber-text-wrapper>
        <h1>Hvorfor et designsystem?</h1>
        <p>
          Designsystemet muliggjør en raskere og mer effektiv praksis for konsistent merkevarebygging, produktutvikling
          og kommunikasjon. Det skaper en tydeligere felles retning, og bidrar til økt kjennskap til og gjenkjennelighet
          av Gyldendal.
        </p>
        <p>
          Det skal bidra til å styrke fellesskapsfølelsen på tvers av hele Gyldendal, ved å legge til rette for bedre
          samarbeid, transparens, synergier og deling av kompetanse og metoder på tvers av fagfelt, avdelinger og
          produkter.
        </p>
      </kobber-text-wrapper>
    </div>`;
  },
};

const pxToRem = (px: number) => `${px / 16}rem`;
