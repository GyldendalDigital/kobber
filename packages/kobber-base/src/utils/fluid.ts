const between = (
  fromSize: number,
  toSize: number,
  minViewportWidth: number,
  maxViewportWidth: number,
  unit: string
): string => {
  const slope = (fromSize - toSize) / (minViewportWidth - maxViewportWidth);
  const base = toSize - slope * maxViewportWidth;
  const fixedBase = base.toFixed(2);
  const vw = (100 * slope).toFixed(2);
  return `calc(${fixedBase}${unit} + ${vw}vw)`;
};

export const fluidClamp = (
  fromSize: number,
  toSize: number,
  minViewportWidth: number,
  maxViewportWidth: number,
  unit = "px"
) => {
  const preferred = between(
    fromSize,
    toSize,
    minViewportWidth,
    maxViewportWidth,
    unit
  );
  return `clamp(${fromSize}${unit}, ${preferred}, ${toSize}${unit})`;
};
