/** biome-ignore-all lint/suspicious/noExplicitAny: "" */

export const createCsvString = async (header: string[], rows: Record<string, any>[]) => {
  if (!rows[0]) return;
  const table = rows.map(row => stringifyRow(row, header));
  const orderedTable = sortLexicographically(table);
  const stringifiedTable = orderedTable.map(toCsvRow).join("\n");
  return [toCsvRow(header), stringifiedTable].join("\n");
};

const stringifyRow = (row: Record<string, any>, header: string[]) =>
  header
    .map(key => row[key])
    .map(wrapInQuotes)
    .filter(value => value !== undefined);

const wrapInQuotes = (value: string) => `"${value}"`;

const toCsvRow = (row: string[]) => row.join(",");

const sortLexicographically = (rows: string[][]) => {
  return rows.slice().sort((rowA, rowB) => {
    for (let i = 0; i < rowA.length; i++) {
      const columnA = rowA[i];
      const columnB = rowB[i];
      if (!columnA || !columnB) return 0;
      if (columnA < columnB) return -1;
      if (columnA > columnB) return 1;
    }
    return 0;
  });
};
