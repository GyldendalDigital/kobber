import { expect } from "@esm-bundle/chai";
import { primitives } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { SafeColorOptions, getContrast, getContrastCompliantColors } from "./contrast";

const getContrastCases = [
  { color1: "#000000", color2: "#ffffff", expected: 21 },
  { color1: "#ffffff", color2: "#000000", expected: 21 },
  { color1: "#000000", color2: "#000000", expected: 1 },
  { color1: "#000000", color2: "transparent", expected: 1 },
  { color1: "transparent", color2: "#000000", expected: 1 },
  { color1: primitives.color.aubergine[25], color2: primitives.color.carmine[150], expected: 1.42 },
];

it("getContrast", () => {
  getContrastCases.forEach(({ color1, color2, expected }) => {
    expect(getContrast(color1, color2), `${color1} + ${color2}`).to.equal(expected);
  });
});

const getSafeColorCases = [
  {
    // ok
    options: { backgroundColor: "#000000", textColor: "#ffffff" },
    expected: { backgroundColor: "#000000", textColor: "#ffffff" },
  },
  {
    // adjusts text color to white
    options: { backgroundColor: "#000000", textColor: "#000000" },
    expected: { backgroundColor: "#000000", textColor: "#ffffff" },
  },
  {
    // adjusts text color to black
    options: { backgroundColor: "#878787", textColor: "#272626" },
    expected: { backgroundColor: "#878787", textColor: "#000000" },
  },
  {
    // same, but no adjustments because of large font
    options: { backgroundColor: "#878787", textColor: "#272626", isLargeFont: true },
    expected: { backgroundColor: "#878787", textColor: "#272626" },
  },
  {
    // same, with adjustments because of compliance level AAA
    options: { backgroundColor: "#878787", textColor: "#272626", isLargeFont: true, complianceLevel: "AAA" },
    expected: { backgroundColor: "#878787", textColor: "#000000" },
  },
  {
    // adjusts background color to black
    options: { backgroundColor: "#a80000", textColor: "#969696", adjustmentStrategy: "adjustBackgroundColor" },
    expected: { backgroundColor: "#000000", textColor: "#969696" },
  },
  {
    // using alternative text color
    options: { backgroundColor: "#ee00ff", textColor: "#008f3e", textColorAlternative: "#002410" },
    expected: { backgroundColor: "#ee00ff", textColor: "#002410" },
  },
] satisfies { options: SafeColorOptions; expected: ReturnType<typeof getContrastCompliantColors> }[];

it("getSafeColors", () => {
  getSafeColorCases.forEach(({ options, expected }) => {
    expect(
      getContrastCompliantColors(options),
      `${options.backgroundColor} + ${options.textColor} -> ${expected.backgroundColor} + ${expected.textColor}`,
    ).to.eql(expected);
  });
});
