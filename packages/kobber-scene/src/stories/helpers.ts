import { TemplateResult, css, render } from "lit";

export const templateResultToString = (template: TemplateResult) => {
  const parent = document.createElement("div");
  render(template, parent);
  return parent.innerHTML;
};

export const enumKeysToArray = (enumObject: { [s: number]: string }) =>
  Object.keys(enumObject).filter((value) => isNaN(Number(value)));

export const enumKeyToValue = (
  enumObject: { [s: number]: string },
  key: keyof typeof enumObject | undefined,
) => (key ? enumObject[key] : undefined);

export const enumValueToKey = (
  enumObject: { [s: number]: string },
  value: number | string | undefined,
): keyof typeof enumObject => {
  const found = Object.entries(enumObject).find(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_key, entryValue]) => entryValue === value,
  );
  if (!found) throw new Error("Invalid enum value");
  return found[0] as unknown as keyof typeof enumObject;
};

export const getBodyCss = () => css`
  body {
    padding: 0 !important;
    background-image: linear-gradient(
      135deg,
      #cccccc 12.5%,
      #eeeeee 12.5%,
      #eeeeee 50%,
      #cccccc 50%,
      #cccccc 62.5%,
      #eeeeee 62.5%,
      #eeeeee 100%
    );
    background-size: 5.66px 5.66px;
  }
`;
