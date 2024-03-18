/** @type {import('prettier').Config} */
module.exports = {
    endOfLine: "lf",
    semi: true,
    singleQuote: false,
    arrowParens: "avoid",
    tabWidth: 2,
    printWidth: 120,
    importOrder: ["^packages/(.*)$", "^apps/(.*)$", "^[./]"],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true
}
