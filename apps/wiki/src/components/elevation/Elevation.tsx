import type { FunctionComponent } from "react";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import { Page } from "../page/Page";
import { RichText } from "../richText/RichText";

export const Elevation: FunctionComponent = () => {
  return (
    <Page
      heading="Elevation"
      code={JSON.stringify(
        {
          semantic: {
            elevation: tokens.semantic.elevation,
          },
        },
        null,
        "  ",
      )}
    >
      <RichText>
        <h3>Button shadow</h3>
        {Object.entries(tokens.semantic.elevation).map(([key], index) => (
          <div key={index}>{key}</div>
        ))}
      </RichText>
      <RichText>
        <h3>Modal shadow</h3>
      </RichText>
      <RichText>
        <h3>Modal overlay</h3>
      </RichText>
      <RichText>
        <h3>Other shadows</h3>
      </RichText>
      <RichText>
        <h3>Elevation levels: Z-index</h3>
      </RichText>
    </Page>
  );
};
