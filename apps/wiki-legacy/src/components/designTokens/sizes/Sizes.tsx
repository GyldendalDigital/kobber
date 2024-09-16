import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import type { FunctionComponent } from "react";
import styles from "./sizes.module.css";
import { Page } from "../../page/Page";
import { RichText } from "../../richText/RichText";
import { Table, Td } from "../../table/Table";
import { UnitFormatter } from "../../unitFormatter/UnitFormatter";

const Size = (name: string, value: number) => (
  <tr key={name}>
    <td className={`${styles.td} ${styles.tdNoTextBreak}`}>{`primitives.size.${name}`}</td>
    <td className={`${styles.td} ${styles.tdNoTextBreak}`}>
      <UnitFormatter>{value}</UnitFormatter>
    </td>
    <td className={styles.td}>
      <div
        role="img"
        aria-label="Illustrasjon av størrelse"
        style={{
          background: tokens.primitives.color.violet[900],
          width: `${value}px`,
          height: `${tokens.primitives.size[18]}px`,
        }}
      />
    </td>
  </tr>
);

export const Sizes = () => (
  <Page
    heading="Sizes"
    code={JSON.stringify(
      {
        primitives: {
          size: tokens.primitives.size,
        },
        semantic: {
          layout: tokens.semantic.layout,
        },
      },
      null,
      "  ",
    )}
  >
    <RichText>
      <h2>Size units</h2>
      <p>
        Størrelsesskalaen vår er basert på en rotverdi på <strong>1rem</strong> som tilsvarer 16px ved 1440px
        skjermbredde. Korresponderende pikselverdier listes ut sammen med rem-verdiene, men størrelser skal aldri
        implementeres i piksler. Alle størrelser skal settes med responsive enheter.
      </p>
    </RichText>
    <RichText>
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table className={styles.table}>
          {Object.entries(tokens.primitives.size).map(([sizeName, sizeValue]) => Size(sizeName, sizeValue))}
        </table>
      </div>
    </RichText>
    <RichText>
      <h2>Spacing & layout</h2>
      <p>
        Padding og avstander på sider og inne i komponenter følger et fast mønster, for å sørge for at elementer havner
        på linje selv om vi ikke bruker et overordnet grid (ennå).
      </p>
    </RichText>
    <RichText>
      <h3>Page</h3>
      <p>
        Avstander på overordnet sidemal. Padding og gap for toppelementene på siden. Bruk alltid samme padding i header,
        main-seksjoner og footer.
      </p>
      <Table>
        <LayoutRow
          name="semantic.layout.page.padding"
          pixels={{ padding: tokens.semantic.layout.page.padding }}
          selected="padding"
          height={200}
        />
        <LayoutRow
          name="semantic.layout.page.gap"
          pixels={{
            padding: tokens.semantic.layout.page.padding,
            horizontalGap: tokens.semantic.layout.page.gap,
          }}
          selected="horizontalGap"
          height={200}
        />
      </Table>
    </RichText>
    <RichText>
      <h3>Container</h3>
      <Table>
        <LayoutRows
          namePrefix={"semantic.layout.container.padding."}
          items={tokens.semantic.layout.container.padding}
          pixels={{}}
          selected="padding"
          height={140}
        />
        <LayoutRows
          namePrefix={"semantic.layout.container.gap."}
          items={tokens.semantic.layout.container.gap}
          pixels={{
            padding: tokens.semantic.layout.page.padding,
          }}
          selected="verticalGap"
          height={140}
        />
      </Table>
    </RichText>
  </Page>
);

interface LayoutRowsProps {
  selected: "padding" | "horizontalGap" | "verticalGap";
  namePrefix: string;
  items: {
    [key: string]: number;
  };
  pixels: {
    padding?: number;
    horizontalGap?: number;
    verticalGap?: number;
  };
  height: number;
}

const LayoutRows: FunctionComponent<LayoutRowsProps> = ({ namePrefix, selected, items, pixels, height }) => (
  <>
    {Object.entries(items)
      .sort(([, a], [, b]) => a - b)
      .map(([key, value]) => {
        return (
          <LayoutRow
            key={key}
            name={`${namePrefix}${key}`}
            pixels={{ ...pixels, [selected]: value }}
            selected={selected}
            height={height}
          />
        );
      })}
  </>
);

interface LayoutRowProps {
  name: string;
  selected: LayoutRowsProps["selected"];
  pixels: LayoutRowsProps["pixels"];
  height: number;
}

const LayoutRow: FunctionComponent<LayoutRowProps> = ({ name, selected, pixels, height }) => {
  const padding = pixels.padding ?? 0;
  return (
    <tr>
      <Td wide>{name}</Td>
      <Td noWrap>
        <UnitFormatter>{pixels[selected]}</UnitFormatter>
      </Td>
      <Td>
        <div
          role="img"
          aria-label="Demonstrasjon av layout"
          style={{
            position: "relative",
            width: 240,
            height: height,
            border: `solid ${padding}px ${
              selected === "padding" ? tokens.primitives.color.violet[400] : tokens.primitives.color.violet[200]
            }`,
          }}
        >
          {pixels.horizontalGap && (
            <div
              style={{
                position: "absolute",
                top: `calc(50% - ${pixels.horizontalGap / 2}px)`,
                width: "100%",
                height: pixels.horizontalGap,
                backgroundColor:
                  selected === "horizontalGap"
                    ? tokens.primitives.color.violet[400]
                    : tokens.primitives.color.violet[200],
              }}
            />
          )}
          {pixels.verticalGap && (
            <div
              style={{
                position: "absolute",
                left: `calc(50% - ${pixels.verticalGap / 2}px)`,
                width: pixels.verticalGap,
                height: "100%",
                backgroundColor:
                  selected === "verticalGap"
                    ? tokens.primitives.color.violet[400]
                    : tokens.primitives.color.violet[200],
              }}
            />
          )}
        </div>
      </Td>
    </tr>
  );
};
