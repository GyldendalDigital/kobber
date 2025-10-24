/**
 * Converts any string to wanted case.
 * @param string: String to be converted.
 * @param toCase: Wanted case for string, one of:
 * - snake
   - kebab
   - pascal
   - camel
   - for any other toCase param: return input String.
 * Method:
 * 1. Convert string to snake case.
 * 2. Convert snake case to wanted case.
 */

import { getFileExtension, getFilenameWithoutExtension } from ".";

const toSnakeCase = (str: string) => {
  const matchedString = String(str).match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
  );
  if (matchedString) {
    return matchedString.map(x => x.toLowerCase()).join("_");
  } else {
    return "";
  }
};

const snakeCaseToCamel = (str: string) =>
  str.toLowerCase().replace(/(_\w)/g, match => match[1]?.toUpperCase() ?? "");

const snakeCaseToPascal = (str: string) => {
  const camelCase = snakeCaseToCamel(str);
  if (camelCase[0]) {
    return camelCase[0].toUpperCase() + camelCase.substring(1);
  }
  return str;
};

const snakeCaseToKebab = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const changeCasesTo = (strings: string[], toCase: string) =>
  changeCaseTo(strings.join("-"), toCase);

export const changeCaseTo = (string: string, toCase: string) => {
  const stringInSnakeCase = toSnakeCase(string);
  if (stringInSnakeCase.length < 1) return string;

  switch (toCase) {
    case "snake":
      return stringInSnakeCase;
    case "kebab":
      return snakeCaseToKebab(stringInSnakeCase);
    case "pascal":
      return snakeCaseToPascal(stringInSnakeCase);
    case "camel":
      return snakeCaseToCamel(stringInSnakeCase);
    default:
      return string;
  }
};

export const changeFilenameCaseTo = (filename: string, toCase: string) => {
  const filenameWithoutExtension = getFilenameWithoutExtension(filename);
  const fileExtension = getFileExtension(filename);
  const casedFilenameWithoutExtension = changeCaseTo(filenameWithoutExtension, toCase);
  return `${casedFilenameWithoutExtension}.${fileExtension}`;
};
