import StyleDictionary from "style-dictionary";

export const registerFormats = (formats: StyleDictionary.Named<StyleDictionary.Format>[]) => {
  formats.forEach(f => StyleDictionary.registerFormat(f));
  console.log(`Formats registered: ${formats.map(f => f.name).join(", ")}`);
};
