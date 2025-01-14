import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./text-wrapper/TextWrapper";
import "./text-highlight/TextHighlight";
import "./heading/Heading";
import "./ingress/Ingress";
import "./link/Link";
import { headingPrimarySizes, headingSecondarySizes } from "./heading/Heading.core";
import { textHighlightColors } from "./text-highlight/TextHighlight.core";
import { template, semantics, component } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { storySummary } from "../story/story-summary";
import { textWrapperStyles } from "./text-wrapper/TextWrapper.styles";
import { linkStyles } from "./link/Link.styles";
import { textHighlightStyles } from "./text-highlight/TextHighlight.styles";
import { getContrast, isContrastCompliant } from "../utils/contrast";
import { ingressStyles } from "./ingress/Ingress.styles";
import { headingStyles } from "./heading/Heading.styles";
import { linkExtendedColors } from "./link/Link.core";

const meta: Meta = {
  title: "Text",
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
      <div style="display: flex; gap: 2rem; margin-top: 3rem;">
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

      ${storySummary({
        summary: `Primary er PP Mori, secondary er Lyon Display.`,
        code: headingStyles.cssText,
      })}
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
      </div>

      ${storySummary({
        summary: `Bruker farge fra "component.article", og typografi fra "title medium".`,
        code: ingressStyles.cssText,
      })}`;
  },
};

export const Highlight: Story = {
  parameters: {
    layout: "none",
  },
  render: args => {
    return html`<div style="margin-top: 4rem">
        <kobber-text-wrapper>
          ${textHighlightColors.map((color, i) => {
            const highlightValue = component.button.background.color[color].main.primary.fallback;
            const backgroundValue = semantics.navigation.color.brightest;
            const textValue = component.article.body.text.color.base;

            const backgroundContrast = getContrast(backgroundValue, highlightValue);
            const backgroundContrastCompliant = isContrastCompliant(backgroundValue, highlightValue, false, "AA");

            const textContrast = getContrast(textValue, highlightValue);

            return html`<div style="padding: 1rem; border: 1px solid lightgray; border-radius: 0.5rem;">
              <p style="font-family: monospace; font-size: 0.8rem;">
                Farge: ${color} <br />
                Kontrast mot bakgrunn: ${backgroundContrast} ${backgroundContrastCompliant ? "👍" : "👎"} <br />
                Kontrast mot brødtekst: ${textContrast} <br />
              </p>
              <p>Dette er den <kobber-text-highlight color="${color}">fremhevede</kobber-text-highlight> teksten.</p>
            </div>`;
          })}
        </kobber-text-wrapper>
      </div>

      ${storySummary({
        summary: `Carmine og Rettsdata er vel de eneste som egner seg for highlighting.`,
        code: textHighlightStyles.cssText,
      })}`;
  },
};

const linkStates = ["idle", "active", "hover", "focus"];

export const Link: Story = {
  argTypes: {
    external: {
      control: "boolean",
    },
    button: {
      control: "boolean",
    },
    color: {
      options: linkExtendedColors,
      control: { type: "select" },
    },
  },
  args: {
    external: false,
    button: false,
    color: undefined,
  },
  render: args => {
    return html`<div style="max-width: 600px;">
        <kobber-text-wrapper>
          ${linkStates.map(state => {
            return html`<p>
              <kobber-link
                class="${state}"
                href="${args.external ? "https://github.com/GyldendalDigital/kobber" : "#"}"
                color="${args.color}"
              >
                ${args.external ? "Ekstern" : "Intern"} lenke
              </kobber-link>
              med tilstand <code>${state}</code>
            </p>`;
          })}
        </kobber-text-wrapper>
        <br />
        <br />
        <kobber-text-wrapper>
          ${linkStates.map(state => {
            return html`<p>
              <kobber-link class="${state}" onclick="console.log(123)" color="${args.color}">
                ${args.external ? "Ekstern" : "Intern"} knapp
              </kobber-link>
              med tilstand <code>${state}</code>
            </p>`;
          })}
        </kobber-text-wrapper>
      </div>

      ${storySummary({
        summary: `Disabled er ikke en gyldig state for lenker. Da fjerner man heller href-attributten.`,
        code: linkStyles.cssText,
      })}`;
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
    </div>

  ${storySummary({
    summary: `Wrapper bolker med tekst og gir gap på ${pxToRem(template["text-wrapper"].gap.horizontal)} (${template["text-wrapper"].gap.horizontal}px)`,
    code: textWrapperStyles.cssText,
  })}`;
  },
};

const pxToRem = (px: number) => `${px / 16}rem`;
