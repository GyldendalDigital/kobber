export const uniqueBy = <T, K>(keyFn: (item: T) => K) => {
  const seen = new Set<K>();
  return (item: T): boolean => {
    const key = keyFn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  };
};
