import * as typographyStyles from "@gyldendal/kobber-base/themes/default/typography.module.css";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import { type FunctionComponent, type ReactNode } from "react";
import { TypographyTable } from "./TypographyTable";
import * as styles from "./typography.module.css";
import { RichText } from "../richText/RichText";
import { Page } from "../page/Page";

interface FontExampleProps {
  weight: keyof typeof tokens.primitives.font.weight;
  italic?: boolean;
  children: ReactNode;
}

const FontExample: FunctionComponent<FontExampleProps> = ({
  children,
  weight,
  italic = false,
}) => {
  return (
    <div
      className={`${styles.box} ${typographyStyles.headingM}`}
      style={{
        fontWeight: tokens.primitives.font.weight[weight],
        fontStyle: italic ? "italic" : undefined,
      }}
    >
      {children}
    </div>
  );
};

export const Typography: FunctionComponent = () => {
  return (
    <Page
      heading="Typography"
      code={JSON.stringify(
        {
          typography: tokens.typography,
        },
        null,
        "  ",
      )}
    >
      <RichText>
        <h2>General</h2>
        <p>
          Definere noen generelle regler, for eksempel:
          <br />
          Linjehøyde 150% i mengetekst, linjehøyde 120% i titler og detaljer.
          <br />
          SemiBold til overskrifter, ikke Bold.
          <br />
          Medium på CTA.
        </p>
      </RichText>
      <RichText>
        <h2>Fonts</h2>
        <p>
          Fonts Vi bruker fontfamilien Inter i vektene regular (
          {tokens.primitives.font.weight.regular}), medium (
          {tokens.primitives.font.weight.medium}) og semibold (
          {tokens.primitives.font.weight.semibold}), og tilsvarende vekter i
          italic.
        </p>
        {Object.entries(tokens.primitives.font.weight).map(([key]) => {
          const weight = key as keyof typeof tokens.primitives.font.weight;
          return (
            <div key={key} className={styles.fontExampleRow}>
              <FontExample weight={weight}>Inter {weight}</FontExample>
              <FontExample weight={weight} italic>
                Inter {weight} italic
              </FontExample>
            </div>
          );
        })}
      </RichText>
      <RichText>
        <h2>Headings</h2>
        <p>Text styles som brukes til overskrifter på ulike nivåer.</p>
        <TypographyTable filter={(item) => item.path[0] === "heading"} />
      </RichText>
      <RichText>
        <h2>Content</h2>
        <p>Text styles som brukes til mengdetekst og innholdselementer.</p>
        <TypographyTable filter={(item) => item.path[0] === "content"} />
      </RichText>
      <RichText>
        <h3>Guidelines: Paragraphs & rich text</h3>
        <p>
          Regler for tekstavsnitt og lenker, uthevet tekst og kursiv i løpende
          tekst.
        </p>

        <div className={styles.box}>
          <p>
            Tekstavsnitt som dette har en{" "}
            <strong>maksbredde på 36rem (864px)</strong> for å sikre god
            lesbarhet og forhindre at tekstlinjene blir lenger enn ca 75–80
            tegn.
          </p>
          <p>
            Tekstavsnitt som dette har en{" "}
            <strong>maksbredde på 36rem (576px)</strong> for å sikre god
            lesbarhet og forhindre at tekstlinjene blir lenger enn ca 75–80
            tegn.
          </p>
          <p>
            I løpende tekst vil noen ord eller tekststrenger kunne opptre som{" "}
            <strong>uthevet tekst</strong>, eller satt i <em>kursiv</em>, eller{" "}
            <strong>
              <em>begge deler</em>
            </strong>{" "}
            på én gang. Noen ganger er det også behov for lenker i løpende
            tekst, og de vil se ut som <a href="/">dette</a> (besøkt) og{" "}
            <a href={`/?d=${new Date().toISOString()}`}>dette</a> (ubesøkt).
            Ideelt burde vi også vise en indikasjon på om lenka er{" "}
            <a href="/">intern</a> eller{" "}
            <a href="https://aksel.nav.no">ekstern</a>.
          </p>
          <p>
            Slik tar vi høyde for alle tekstgrep som kan komme via rike
            tekstfelter i Redaptic.
          </p>
        </div>
      </RichText>

      <RichText>
        <h2>Action items</h2>
        <p>
          Text styles som brukes til komponenter som knapper, inputfelter, osv.
        </p>
        <TypographyTable filter={(item) => item.path[0] === "action"} />
      </RichText>
    </Page>
  );
};
