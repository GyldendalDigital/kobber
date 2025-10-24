export const toFixedWidth = (value: string, width = 16): string =>
  value.length >= width ? value.slice(0, width) : value.padEnd(width, " ");

import { sortRowsAlphabetically } from "./array";

export const createCsvString = async (header: string[], rows: string[][]) => {
  if (!rows[0]) return;
  const sanitizedRows = rows.map(columns => columns.map(wrapInQuotes));
  const orderedTable = sortRowsAlphabetically(sanitizedRows);
  const stringifiedTable = orderedTable.map(toCsvRow).join("\n");
  return [toCsvRow(header), stringifiedTable].join("\n");
};

const wrapInQuotes = (value: string) => `"${value}"`;

const toCsvRow = (row: string[]) => row.join(",");
