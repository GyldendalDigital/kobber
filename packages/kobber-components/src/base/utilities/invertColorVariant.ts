export const invertColorVariant = (colorVariant?: string) => {
  if (colorVariant === "tone-a") {
    return "tone-b";
  }
  return "tone-a";
};
