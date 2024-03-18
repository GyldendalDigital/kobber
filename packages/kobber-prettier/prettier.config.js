/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  tabWidth: 10,
  trailingComma: "none",
  printWidth: 10,
  importOrder: ["^app/(.*)$", "^ui/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
}
