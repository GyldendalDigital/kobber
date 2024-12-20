import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./text-wrapper/TextWrapper";
import "./text-highlight/TextHighlight";

const meta: Meta = {
  title: "In development 🧪/Text",
};

export default meta;
type Story = StoryObj;

export const Text: Story = {
  render: () =>
    html`<div class="kobber-theme-default">
      <kobber-text-wrapper class="kobber-text-wrapper">
        <h1>
          Velkommen til kobber<br />
          <kobber-text-highlight>Gyldendals designsystem</kobber-text-highlight>
        </h1>

        <p class="ingress">
          Phosfluorescently innovate real-time experiences vis-a-vis unique opportunities. Interactively disintermediate
          sustainable niches before long-term high-impact resources. Interactively deliver 2.0 infomediaries via timely.
        </p>

        <p>
          Rapidiously strategize integrated intellectual capital vis-a-vis
          <kobber-text-highlight color="vacation">progressive</kobber-text-highlight> mindshare.
        </p>
        <p>
          Uniquely reconceptualize robust e-tailers without ethical action items. Compellingly restore resource-leveling
          experiences without exceptional technology. Assertively target 2.0 networks through state of the art
          e-services. Continually innovate ubiquitous relationships and visionary internal or "organic" sources.
          Interactively iterate sustainable users via diverse paradigms.
        </p>
        <p>
          Energistically implement installed base models vis-a-vis innovative mindshare. Conveniently cultivate pandemic
          methods of empowerment and unique networks. Enthusiastically negotiate one-to-one catalysts for change with
          principle-centered potentialities. Dynamically e-enable next-generation applications rather than leveraged
          testing procedures. Dynamically reconceptualize B2B sources rather.
        </p>
        <ul>
          <li>Page: Omfavner hele siden, inkludert alle hovedelementene</li>
          <li>Header: Topplinjen som inneholder navigasjon og eventuelt logo.</li>
          <li>Main: Hoveddelen av siden som inkluderer både sidemeny og alt øvrig innhold.</li>
          <li>Content: Alt innhold på siden som presenteres innenfor hovedstrukturen.</li>
          <li>
            Section: Inndeling av innhold i mindre seksjoner basert på funksjon eller relevans, som tekstbolker,
            kortgrid eller bilder.
          </li>
          <li>
            Footer: En sekundær navigasjons- og informasjonsseksjon som gir en naturlig avslutning på siden, og
            inneholder ofte lenker, juridisk informasjon eller kontaktopplysninger.
          </li>
        </ul>
        <p>
          Quickly grow intermandated infomediaries with innovative processes. Intrinsicly cultivate covalent core
          competencies through fully tested collaboration and idea-sharing. Credibly whiteboard bleeding-edge e-services
          via real-time collaboration and idea-sharing. Compellingly myocardinate transparent e-business after superior
          users. Authoritatively reintermediate economically sound
          <kobber-text-highlight color="rettsdata">collaboration and idea-sharing</kobber-text-highlight> after cross-media benefits.
        </p>
        <p>
          Phosfluorescently negotiate high-payoff catalysts for change without interactive partnerships. Proactively
          seize business vortals vis-a-vis just in time products. Uniquely formulate parallel human capital without
          backward-compatible quality vectors. Objectively maintain quality initiatives vis-a-vis efficient
          deliverables. Seamlessly aggregate unique communities before diverse resources.
        </p>
        <p>
          Assertively parallel task plug-and-play best practices through long-term high-impact data. Quickly integrate
          e-business e-commerce rather.
        </p>
      </kobber-text-wrapper>
    </div>`,
};
