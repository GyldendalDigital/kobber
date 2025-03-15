export const traverseN = <T extends object>(obj: T, depth: number, prefix: string[] = []): string[] => {
  if (depth === 0) {
    return [prefix.join("-")];
  }

  return (Object.keys(obj) as (keyof T)[]).flatMap(key => {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      return traverseN(value, depth - 1, [...prefix, String(key)]);
    }
    return [prefix.concat(String(key)).join("-")];
  });
};
