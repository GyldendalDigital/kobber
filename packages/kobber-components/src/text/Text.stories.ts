import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit/static-html.js";
import "./text-wrapper/TextWrapper";
import "./heading/Heading";
import "./title/Title";
import "./text-body/TextBody";
import "./text-label/TextLabel";
import "./display/Display";
import "./lead/Lead";
import "./text-link/TextLink";
import "./text-list/TextList";
import "./text-list-element/TextListElement";
import "../content-blocks/text-module/TextModule";
import {
  headingColors,
  headingColorVariants,
  headingFonts,
  headingSizes,
} from "./heading/Heading.core";
import "@gyldendal/kobber-icons/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { init as initComponents } from "../base/init";
import { invertColorVariant } from "../base/utilities/invertColorVariant";
import { getPrintedState, linkStates } from "../story/linkStates";
import { displayFonts, displaySizes } from "./display/Display.core";
import { leadColors, leadColorVariants } from "./lead/Lead.core";
import {
  textBodyColors,
  textBodyColorVariants,
  textBodyContexts,
  textBodyFonts,
  textBodySizes,
} from "./text-body/TextBody.core";
import {
  textLabelColors,
  textLabelColorVariants,
  textLabelSizes,
} from "./text-label/TextLabel.core";
import { textListSizeFallback, textListSizes } from "./text-list/TextList.core";
import { titleColors, titleColorVariants, titleFonts, titleSizes } from "./title/Title.core";

initComponents();
initIcons();

const meta: Meta = {
  title: "Styles and Foundation/Text",
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
      <kobber-display font="alt2">
        Designsystemet Kobber
        <div slot="extended">Et verktøy for samspill og synergier</div>
      </kobber-display>

      <kobber-heading>
        Velkommen til Kobber<br />
        <em>Gyldendals designsystem</em>
      </kobber-heading>

      <kobber-title>
        Design, bygg, og skap gode løsninger med Gyldendals designsystem.
      </kobber-title>

      <kobber-lead>
        Phosfluorescently innovate real-time experiences vis-a-vis unique opportunities. Interactively disintermediate
        sustainable niches before long-term <em>high-impact</em> resources. Interactively deliver 2.0 infomediaries via
        timely.
      </kobber-lead>

      <kobber-text-label>
        Tag
      </kobber-text-label>

      <kobber-text-body>
        Rapidiously strategize integrated intellectual capital vis-a-vis
        <em>progressive</em> mindshare.
      </kobber-text-body>
      <kobber-text-body>
        Uniquely <kobber-text-link href="https://github.com/GyldendalDigital/kobber">reconceptualize</kobber-text-link>
        robust e-tailers without ethical action items. Compellingly restore resource-leveling experiences without
        exceptional technology. Assertively target 2.0 networks through state of the art e-services. Continually
        innovate ubiquitous relationships and visionary internal or "organic" sources. Interactively iterate sustainable
        users via diverse paradigms.
      </kobber-text-body>
      <kobber-text-body>
        Energistically <kobber-text-link href="#">implement</kobber-text-link> installed base models vis-a-vis
        innovative mindshare. Conveniently cultivate pandemic methods of empowerment and unique networks.
        Enthusiastically negotiate one-to-one catalysts for change with principle-centered potentialities. Dynamically
        e-enable next-generation applications rather than leveraged testing procedures. Dynamically reconceptualize B2B
        sources rather.
      </kobber-text-body>
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
      <kobber-text-body>
        Quickly grow intermandated infomediaries with innovative processes. Intrinsicly cultivate covalent core
        competencies through fully tested collaboration and idea-sharing. Credibly whiteboard bleeding-edge e-services
        via real-time collaboration and idea-sharing. Compellingly myocardinate transparent e-business after superior
        users. Authoritatively reintermediate economically sound
        <em>collaboration and idea-sharing</em> after cross-media benefits.
      </kobber-text-body>
      <kobber-text-body>
        Phosfluorescently negotiate high-payoff catalysts for change without interactive partnerships. Proactively seize
        business vortals vis-a-vis just in time products. Uniquely formulate parallel human capital without
        backward-compatible quality vectors. Objectively maintain quality initiatives vis-a-vis efficient deliverables.
        Seamlessly aggregate unique communities before diverse resources.
      </kobber-text-body>
      <kobber-text-body>
        Assertively parallel task plug-and-play best practices through long-term high-impact data. Quickly integrate
        e-business e-commerce rather.
      </kobber-text-body>
    </kobber-text-wrapper>
  `,
};

export const Heading: Story = {
  argTypes: {
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
    return html`
      ${headingFonts.map(
        font =>
          html` <div
            style="
              display: grid; 
              gap: 1em;
              grid-template-columns: 8em repeat(${headingColors.length}, 1fr); 
            "
          >
            <div
              style="
                display: flex;
                align-items: end;
                gap: 1em;
                flex-direction: column;
                justify-content: center;
              ">
                ${headingSizes.map(size => html` <p style="margin-top: 2em;">${size} ${font}</p>`)}
            </div>
            ${headingColors.map(
              color =>
                html`<div
                  style="display: grid; 
                    gap: 1em;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    grid-template-areas: 
                      'color-theme-tone-a color-theme-tone-b'
                      'sample-tone-a-large sample-tone-b-large'
                      'sample-tone-a-medium sample-tone-b-medium';
                  ">
              ${headingSizes.map(
                size =>
                  html` ${headingColorVariants.map(
                    colorVariant => html`
                          ${
                            font === "brand" && size === "large"
                              ? html`<p style="grid-area: color-theme-${colorVariant};">
                                ${color}, ${colorVariant}
                              </p>`
                              : ""
                          }
                          <kobber-heading
                            level="${args.h1 ? "h1" : "h2"}"
                            font="${font}"
                            color="${color}"
                            color-variant="${colorVariant}"
                            size="${size}"
                            style="grid-area: sample-${colorVariant}-${size};"
                          >
                            Heading
                          </kobber-heading>`,
                  )}`,
              )}
            </div>`,
            )}
      </div>`,
      )}`;
  },
};

export const Title: Story = {
  argTypes: {
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
    return html`
      <div style="
              display: grid;
              grid-template-columns: repeat(${titleColors.length * titleColorVariants.length}, 1fr);
              grid-template-rows: repeat(${titleSizes.length * titleFonts.length}, 1fr);
              gap: 1rem;
             ">
        ${titleFonts.map(font =>
          titleSizes.map(size =>
            titleColors.map(color =>
              titleColorVariants.map(
                colorVariant => html`
                  <div>
                    <kobber-title
                      title="${color} ${colorVariant} ${size} ${font}"
                      level="${args.h1 ? "h1" : "h2"}"
                      size="${size}"
                      font="${font}"
                      color="${color}"
                      color-variant="${colorVariant}"
                    >
                      ${ifHighlighted(args.text || "Title", args.highlighted)}
                    </kobber-title>
                  </div>
                `,
              ),
            ),
          ),
        )}
      </div>
    `;
  },
};

export const TextBody: Story = {
  argTypes: {
    highlighted: {
      control: "boolean",
    },
  },
  args: {
    text: "",
    highlighted: false,
  },
  render: args => {
    return html`
      <div style="
              display: grid;
              grid-template-columns: repeat(${textBodyColors.length * textBodyColorVariants.length * textBodyContexts.length}, 1fr);
              grid-template-rows: repeat(${textBodySizes.length * textBodyFonts.length}, 1fr);
              gap: 1rem;
             ">
        ${textBodyFonts.map(font =>
          textBodySizes.map(size =>
            textBodyColors.map(color =>
              textBodyColorVariants.map(colorVariant =>
                textBodyContexts.map(
                  context => html`
                    <kobber-text-body
                      title="${color} ${colorVariant} ${context} ${size} ${font}"
                      size="${size}"
                      font="${font}"
                      color="${color}"
                      color-variant="${colorVariant}"
                      context="${context}"
                    >
                      ${ifHighlighted(args.text || "Text body", args.highlighted)}
                    </kobber-text-body>
                  `,
                ),
              ),
            ),
          ),
        )}
      </div>
    `;
  },
};

export const TextLabel: Story = {
  argTypes: {
    highlighted: { control: "boolean" },
  },
  args: {
    text: "",
    highlighted: false,
  },
  render: args => {
    return html`
      <div style="
              display: grid;
              grid-template-columns: repeat(${textLabelColors.length * textLabelColorVariants.length}, 1fr);
              grid-template-rows: repeat(${textLabelSizes.length}, 1fr);
              gap: 1rem;
             ">
        ${textLabelSizes.map(size =>
          textLabelColors.map(color =>
            textLabelColorVariants.map(
              colorVariant => html`
                <div>
                  <kobber-text-label
                    title="${color} ${colorVariant} ${size}"
                    size="${size}"
                    color="${color}"
                    color-variant="${colorVariant}"
                  >
                    ${ifHighlighted(args.text || "Text label", args.highlighted)}
                  </kobber-text-label>
                </div>
              `,
            ),
          ),
        )}
      </div>
    `;
  },
};

export const Display: Story = {
  argTypes: {
    h1: {
      control: "boolean",
    },
  },
  args: {
    text: "",
    text2: "",
    h1: false,
  },
  render: args => {
    return html`
      <div style="
              display: flex;
              flex-direction: column;
              gap: 1rem;
             ">
        ${displaySizes.map(size =>
          displayFonts.map(
            font =>
              html`
                  <div>
                    <kobber-display
                      title="${size} ${font}"
                      level="${args.h1 ? "h1" : "h2"}"
                      size="${size}"
                      font="${font}"
                    >
                      ${args.text || "Display"}
                      <div slot="extended">${args.text2 || "Extended"}</div>
                    </kobber-display>
                  </div>
                `,
          ),
        )}
      </div>
    `;
  },
};

export const Lead: Story = {
  argTypes: {
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
  render: args => {
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
    return html`<div style="display: flex; flex-direction: column; gap: 1rem;">
        ${linkStates.map(state => {
          return html`
            <kobber-text-link
              class="${state}"
              href=${state !== "disabled" ? "https://github.com/GyldendalDigital/kobber" : ""}
            >
              ${args.text || html`link ${args.icon ? html`<kobber-external_link_arrow />` : null} ${getPrintedState(state)}`}
            </kobber-text-link>
          `;
        })}
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

const ifHighlighted = (textValue: string, highlighted: boolean) =>
  highlighted ? html`<em>${textValue}</em>` : textValue;

/**
 * TextList er laget som div'er med roles. Grunnene er følgende:
 * - designernes ønske om mer fingranulert kontroll over stiling enn det ol/ul tillater (nå og i fremtiden)
 * - UU-messig er det problempotensiale når ol/ul har slot som children (istedet for li).
 * TextList må wrappes i en TextBody for at fonter, fontfarger og størrelser skal fungere.
 */
export const TextList: Story = {
  render: () => {
    return html`
          <div style="
              display: grid;
              grid-template-columns: repeat(${textBodyColors.length * textBodyColorVariants.length}, 1fr);
              grid-template-rows: repeat(${textListSizes.length * textBodyFonts.length}, 1fr);
              gap: 1rem;
             ">
        ${textBodyFonts.map(font =>
          textListSizes.map(size =>
            textBodyColors.map(color =>
              textBodyColorVariants.map(
                colorVariant => html`
                  <kobber-text-module
                    color="${color}"
                    color-variant="${invertColorVariant(colorVariant)}"
                  >
                    <kobber-text-body
                      title="${color} ${colorVariant} ${size} ${font}"
                      size="${size}"
                      font="${font}"
                      color="${color}"
                      color-variant="${colorVariant}"
                    >
                      <kobber-text-list size="${size}">
                        <kobber-text-list-element>
                          Punkt
                          <kobber-text-list slot="nested" size="${size}">
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                          </kobber-text-list>
                        </kobber-text-list-element>
                        <kobber-text-list-element>
                          Punkt
                          <kobber-text-list slot="nested" size="${size}">
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                          </kobber-text-list>
                        </kobber-text-list-element>
                        <kobber-text-list-element>
                          Punkt
                          <kobber-text-list slot="nested" size="${size}">
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                            <kobber-text-list-element>
                              Underpunkt
                            </kobber-text-list-element>
                          </kobber-text-list>
                        </kobber-text-list-element>
                      </kobber-text-list>
                    </kobber-text-body>
                  </kobber-text-module>
                `,
              ),
            ),
          ),
        )}
      </div>
    `;
  },
};

export const TextListElement: Story = {
  argTypes: {
    size: {
      options: textListSizes,
      control: "inline-radio",
    },
  },
  args: {
    size: textListSizeFallback,
    text: "",
  },
  render: args => {
    return html`
      <kobber-text-body size="${args.size}" level="div">
        <kobber-text-list size="${args.size}">
          <kobber-text-list-element>
            ${args.text || "Punkt"}
            <kobber-text-list slot="nested" type="unordered">
              <kobber-text-list-element>
                ${args.text || "Underpunkt"}
              </kobber-text-list-element>
            </kobber-text-list>
          </kobber-text-list-element>
        </kobber-text-list>
        <kobber-text-list type="unordered" size="${args.size}">
          <kobber-text-list-element>
            ${args.text || "Punkt"}
            <kobber-text-list slot="nested" type="ordered">
              <kobber-text-list-element>
                ${args.text || "Underpunkt"}
              </kobber-text-list-element>
            </kobber-text-list>
          </kobber-text-list-element>
        </kobber-text-list>
      </kobber-text-body>
    `;
  },
};
