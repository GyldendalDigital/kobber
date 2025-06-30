import { changeCasesTo } from "../../utilities";

export interface Item {
  path: string[];
  name: string;
  fullNameCamelCase: string;
  styles: any;
}

export const flattenNestedTokens = (items: Record<string, any>, namePrefixes: string[] = []) =>
  Object.entries(items).map(flattenItem(namePrefixes)).flat();

const flattenItem =
  (path: string[]) =>
  ([name, value]: [string, any]): Item[] =>
    isTypographyStyle(value)
      ? [
          {
            path,
            name,
            fullNameCamelCase: changeCasesTo([...path, name], "camel"),
            styles: value,
          },
        ]
      : flattenNestedTokens(value, [...path, name]);

const isTypographyStyle = (value: any) => Object.keys(value).includes("fontSize");
