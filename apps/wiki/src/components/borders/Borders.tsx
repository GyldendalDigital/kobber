import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import { Page } from "../page/Page";
import { RichText } from "../richText/RichText";
import { Table, Td } from "../table/Table";
import { UnitFormatter } from "../unitFormatter/UnitFormatter";

export const Borders = () => (
  <Page
    heading="Borders"
    code={JSON.stringify(
      {
        primitives: {
          border: tokens.primitives.border,
        },
      },
      null,
      "  "
    )}
  >
    <RichText>
      <h2>Width</h2>
      <Table>
        {Object.entries(tokens.primitives.border.width).map(
          ([key, value], index) => (
            <tr key={index}>
              <Td>primitives.border.width.{key}</Td>
              <Td wide>
                <UnitFormatter>{value}</UnitFormatter>
              </Td>
              <Td>
                <div
                  role="img"
                  aria-label="Illustrasjon"
                  style={{
                    width: 240,
                    height: 140,
                    border: `solid 2px ${tokens.primitives.color.gray[300]}`,
                  }}
                />
              </Td>
            </tr>
          )
        )}
      </Table>
    </RichText>
    <RichText>
      <h2>Radius</h2>
      <p>
        Forslag til regler: Pill brukes kun til klikkbare elementer. 24 brukes
        hovedsakelig til klikkbare elementer, eller elementer der hovedinnholdet
        er et klikkbart element. 16 og 8 brukes til ikke-klikkbare ting, som
        fremhevede fargeflater o.l.
      </p>
      <Table>
        {Object.entries(tokens.primitives.border.radius).map(
          ([key, value], index) => (
            <tr key={index}>
              <Td>primitives.border.radius.{key}</Td>
              <Td wide>
                <UnitFormatter>{value}</UnitFormatter>
              </Td>
              <Td>
                <div
                  role="img"
                  aria-label="Illustrasjon"
                  style={{
                    width: 240,
                    height: 140,
                    borderRadius: value,
                    backgroundColor: tokens.primitives.color.gray[300],
                  }}
                />
              </Td>
            </tr>
          )
        )}
      </Table>
    </RichText>
  </Page>
);
