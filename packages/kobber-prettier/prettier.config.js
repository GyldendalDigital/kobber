/** @type {import('prettier').Config} */
module.exports = {
    endOfLine: "lf",
    semi: false,
    singleQuote: false,
    arrowParens: "avoid",
    tabWidth: 4,
    trailingComma: "none",
    printWidth: 120,
    importOrder: ["^app/(.*)$", "^ui/(.*)$", "^[./]"],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true
}
