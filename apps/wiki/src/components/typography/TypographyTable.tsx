import type { FunctionComponent } from "react";
import "../../css/inter.css";
import typographyItems from "@gyldendal/kobber-base/themes/default/typography-tokens-flattened.json";
import * as typographyStyles from "@gyldendal/kobber-base/themes/default/typography.module.css";
import * as styles from "./typography.module.css";
import { Table, Td, Th } from "../table/Table";

interface Item {
  path: string[];
  name: string;
  fullNameCamelCase: string;
  styles: any;
}

interface Props {
  filter: (item: Item) => boolean;
}

export const TypographyTable: FunctionComponent<Props> = ({ filter }) => {
  const items = typographyItems.filter(filter);
  return (
    <Table>
      <thead>
        <tr>
          <Th>Text style</Th>
          <Th colSpan={2}>Font size</Th>
          <Th>Line height</Th>
          <Th>Font weight</Th>
          <Th>Font style</Th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <Variant key={index} item={item} />
        ))}
      </tbody>
    </Table>
  );
};

interface VariantProps {
  item: Item;
}

const Variant: FunctionComponent<VariantProps> = ({ item }) => (
  <tr>
    <Td
      className={`${styles.tdWithFormatting} ${
        typographyStyles[item.fullNameCamelCase]
      }`}
    >
      {[...item.path, item.name].join(" ")}
    </Td>
    <Td responsiveLabel="Font size">{item.styles.fontSize}px</Td>
    <Td responsiveLabel="Font size">{item.styles.fontSize / 16}rem</Td>
    <Td responsiveLabel="Line height">{item.styles.lineHeight}px</Td>
    <Td responsiveLabel="Font weight">{item.styles.fontWeight}</Td>
    <Td responsiveLabel="Font style">{item.styles.fontStyle}</Td>
  </tr>
);
