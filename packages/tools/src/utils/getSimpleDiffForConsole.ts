import { diffLines } from "diff";

const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  gray: "\x1b[90m",
};

const resetColor = "\x1b[0m";

export const getSimpleDiffForConsole = (a: string, b: string, includeEqual = false) => {
  const diff = diffLines(stripAnsi(a), stripAnsi(b));
  return diff
    .map(part => {
      if (part.added) return colorize("+ ", part.value, colors.green);
      if (part.removed) return colorize("- ", part.value, colors.red);
      return includeEqual ? colorize("  ", part.value, colors.gray) : "";
    })
    .join("");
};

const colorize = (prepend: string, value: string, color: string) =>
  value
    .split("\n")
    .map(line => (line ? `${color}${prepend}${line}${resetColor}` : ""))
    .join("\n");

// biome-ignore lint/suspicious/noControlCharactersInRegex: ""
const stripAnsi = (str: string) => str.replace(/\x1b\[[0-9;]*m/g, "");
