const hexRegex = /^#[a-fA-F0-9]{6}$/;
const hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
const rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
const rgbaRegex =
  /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;

/** Not supporting color names like "red" */
export const isValidColor = (color: string) => {
  if (color === "transparent") return true;
  if (hexRegex.test(color)) return true;
  if (hexRgbaRegex.test(color)) return true;
  if (rgbRegex.test(color)) return true;
  if (rgbaRegex.test(color)) return true;

  return false;
};

/**
 * Borrowed from
 * {@link https://github.com/styled-components/polished/blob/main/src/color/parseToRgb.js | polished}
 */
export const parseToRgb = (color: string): RgbColor | RgbaColor => {
  if (color.match(hexRegex)) {
    return {
      red: parseInt(`${color[1]}${color[2]}`, 16),
      green: parseInt(`${color[3]}${color[4]}`, 16),
      blue: parseInt(`${color[5]}${color[6]}`, 16),
    };
  }

  if (color.match(hexRgbaRegex)) {
    const alpha = parseFloat((parseInt(`${color[7]}${color[8]}`, 16) / 255).toFixed(2));
    return {
      red: parseInt(`${color[1]}${color[2]}`, 16),
      green: parseInt(`${color[3]}${color[4]}`, 16),
      blue: parseInt(`${color[5]}${color[6]}`, 16),
      alpha,
    };
  }

  const rgbMatched = rgbRegex.exec(color);
  if (rgbMatched) {
    return {
      red: parseInt(`${rgbMatched[1]}`, 10),
      green: parseInt(`${rgbMatched[2]}`, 10),
      blue: parseInt(`${rgbMatched[3]}`, 10),
    };
  }

  const rgbaMatched = rgbaRegex.exec(color.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt(`${rgbaMatched[1]}`, 10),
      green: parseInt(`${rgbaMatched[2]}`, 10),
      blue: parseInt(`${rgbaMatched[3]}`, 10),
      alpha:
        parseFloat(`${rgbaMatched[4]}`) > 1 ? parseFloat(`${rgbaMatched[4]}`) / 100 : parseFloat(`${rgbaMatched[4]}`),
    };
  }

  // fallback to transparent
  return { red: 0, green: 0, blue: 0 };
};

type RgbColor = {
  red: number;
  green: number;
  blue: number;
};

type RgbaColor = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};
