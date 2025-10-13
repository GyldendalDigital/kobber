export const reduceToObject = (
  accumulator: Record<string, string>,
  object: Record<string, string>,
): Record<string, string> => {
  const entry = Object.entries(object)[0];
  if (!entry) return accumulator;
  const [k, v] = entry;
  accumulator[k] = v as string;
  return accumulator;
};

export const sortRowsAlphabetically = (rows: string[][]) => {
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
