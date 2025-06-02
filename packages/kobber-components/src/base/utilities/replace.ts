/**
 * @example type MyType = Replace<"foo bar", " ", "_">; // "foo_bar"
 *
 * https://stackoverflow.com/a/71353081
 */
type Replace<
  T extends string,
  S extends string,
  D extends string,
  A extends string = "",
> = T extends `${infer L}${S}${infer R}` ? Replace<R, S, D, `${A}${L}${D}`> : `${A}${T}`;

const replace = <T extends string, S extends string, D extends string>(
  value: T,
  search: S,
  replace: D,
): Replace<T, S, D> => value.replace(search, replace) as Replace<T, S, D>;

export type ReplaceSpaceWithDash<T extends string> = Replace<T, " ", "-">;
export const replaceSpaceWithDash = <T extends string>(value: T) => replace(value, " ", "-");
