module.exports = {
  extends: "@gyldendal/kobber-stylelint",
  // ignore rules that doesn't make sense in generated file index.css
  rules: {
    "csstools/value-no-unknown-custom-properties": null, // custom properties may be defined elsewhere (i.e. inline)
    "comment-empty-line-before": null,
    "order/properties-order": null,
    "declaration-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "rule-empty-line-before": null,
    "no-duplicate-selectors": null,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "declaration-block-no-duplicate-custom-properties": null,
    "selector-attribute-quotes": null,
    "selector-max-type": null,
    "property-allowed-list": null,// ["/^--/", "outline"], // didn't work as expected
    "property-disallowed-list": null,
    "selector-no-qualifying-type": null,
  },
};
