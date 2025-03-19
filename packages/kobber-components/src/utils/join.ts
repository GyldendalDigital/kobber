export const concat3 = <A extends string, B extends string, C extends string>(aList: A[], bList: B[], cList: C[]) =>
  aList.flatMap(a => bList.flatMap(b => cList.map(c => `${a}-${b}-${c}` as Join3<A, B, C>)));

type Join3<A extends string, B extends string, C extends string> = `${A}-${B}-${C}`;

export const concat2 = <A extends string, B extends string>(aList: A[], bList: B[]) =>
  aList.flatMap(a => bList.map(b => `${a}-${b}` as Join2<A, B>));

type Join2<A extends string, B extends string> = `${A}-${B}`;
