const invertColor = (hex: string) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // keep alpha if any
  const alpha = hex.slice(6, 8);
  hex = hex.slice(0, 6);

  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  // invert color components
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

  // pad each with zeros and add alpha
  return "#" + padZero(r) + padZero(g) + padZero(b) + alpha;
};

const padZero = (str: string, len?: number) => {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};

/** Recursively invert all tokens with value starting with # (hex color) */
export const invertColorTokens = (tokens: any) => {
  for (const key in tokens) {
    if (typeof tokens[key] === "object") {
      invertColorTokens(tokens[key]);
    } else if (typeof tokens[key] === "string") {
      if (key === "value" && tokens[key] && tokens[key].startsWith("#")) {
        tokens[key] = invertColor(tokens[key]);
      }
    }
  }
};
