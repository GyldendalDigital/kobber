// eslint-disable-next-line
const paths = require("./svg-scripts/paths.cjs");

module.exports = {
  src: paths.tmpSvgsReactSSRSafe,
  dest: paths.tmpIconsReactSSRSafe,
  type: paths.reactSSRSafeComponentExtension,
  imports: [],
  memo: false,
  component: false,
  cleanupIDs: true,
};
