export const invertColorVariant = (colorVariant?: string | unknown) => {
  if (colorVariant === "tone-b") {
    return "tone-a";
  }
  return "tone-b";
};
