export const invertColorVariant = (colorVariant?: string | unknown) => {
  if (colorVariant === "tone-a") {
    return "tone-b";
  }
  return "tone-a";
};
