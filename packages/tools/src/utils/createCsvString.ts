export const createCsvString = async (header: string[], rows: string[][]) => {
  if (!rows[0]) return;
  const sanitizedRows = rows.map(columns => columns.map(wrapInQuotes));
  const orderedTable = sortLexicographically(sanitizedRows);
  const stringifiedTable = orderedTable.map(toCsvRow).join("\n");
  return [toCsvRow(header), stringifiedTable].join("\n");
};

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
