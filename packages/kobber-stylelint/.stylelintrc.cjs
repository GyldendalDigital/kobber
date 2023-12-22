/**
 * @type {import("stylelint").Config}
 */
module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "block-no-empty": [
      true,
      {
        message: "Delete empty CSS rules - keep your CSS maintainable",
      },
    ],
    "color-hex-length": [
      "short",
      {
        message: "Keep color definitions short",
      },
    ],
    "declaration-empty-line-before": "never",
    "declaration-no-important": [
      true,
      {
        message:
          "Avoid using !important, as it messes with specificity - what is the root cause for needing it?",
      },
    ],
    "declaration-property-unit-disallowed-list": {
      "/^bottom/": ["px"],
      display: ["inline-flex", "inline-grid"],
      "/^height/": ["px"],
      "/^left/": ["px"],
      "/^gap/": ["px"],
      "/^margin/": ["px"],
      "/^padding/": ["px"],
      "/^right/": ["px"],
      "/^top/": ["px"],
      "/^width/": ["px"],
    },
    "declaration-property-unit-allowed-list": {
      "border-radius": ["%", "em", "px"],
      "/^border/": ["px"],
      "/^font/": ["em", "rem"],
      "line-height": [""],
      perspective: ["px"],
      "stroke-width": ["px"],
    },
    "function-name-case": [
      "lower",
      {
        message: "Use lowercase, it is easier to read in the code",
      },
    ],
    "function-url-scheme-disallowed-list": [
      "data",
      {
        message:
          "Embedding images in CSS hurts performance. Learn more at https://csswizardry.com/2017/02/base64-encoding-and-performance",
      },
    ],
    "keyframes-name-pattern": "^([a-zA-Z]+(-{1,2}|_{1,2})?[a-z0-9]+)*$",
    "length-zero-no-unit": [
      true,
      {
        message: "Delete the unit when value is 0 - keep your CSS readable",
      },
    ],
    "order/properties-order": [
      [
        "content",
        {
          groupName: "positioning",
          properties: [
            "position",
            "inset",
            "top",
            "inset-block-start",
            "inset-block",
            "right",
            "inset-inline",
            "inset-inline-start",
            "bottom",
            "inset-block-end",
            "left",
            "inset-inline-end",
          ],
        },
        "display",
        {
          groupName: "flex-grid-container",
          properties: [
            "align-content",
            "align-items",
            "flex-direction",
            "flex-flow",
            "flex-wrap",
            "grid",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-column-gap",
            "grid-gap",
            "grid-row-gap",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows",
            "justify-content",
            "justify-items",
            "place-content",
            "place-items",
          ],
        },
        {
          groupName: "line-clamp-specials",
          properties: ["box-orient", "line-clamp"],
        },
        {
          groupName: "margins",
          properties: [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "margin-block",
            "margin-inline",
          ],
        },
        {
          groupName: "borders",
          properties: [
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-radius",
          ],
        },
        {
          groupName: "paddings",
          properties: [
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "padding-block",
            "padding-inline",
          ],
        },
        {
          groupName: "dimensions",
          order: "flexible",
          properties: ["height", "width"],
        },
        {
          groupName: "flex-grid-items",
          properties: [
            "align-self",
            "flex",
            "flex-basis",
            "flex-grow",
            "flex-shrink",
            "grid-area",
            "grid-column",
            "grid-column-end",
            "grid-column-start",
            "grid-row",
            "grid-row-end",
            "grid-row-start",
            "justify-self",
            "order",
            "place-self",
          ],
        },
      ],
      {
        unspecified: "bottom",
      },
    ],
    "property-disallowed-list": [
      "clear",
      "float",
      "outline",
      "user-select",
      "will-change",
    ],
    "property-no-unknown": [
      true,
      {
        // Allow property used for css-fonts-4 variable fonts
        ignoreProperties: ["font-named-instance"],
      },
    ],
    "selector-attribute-quotes": "never",
    "selector-class-pattern": [
        // Disallow styling class names prefixed with js_
      "^(?!js)([a-zA-Z]+(-{1,2}|_{1,2})?[a-z0-9]+)$",
      {
        message:
          "Do not add styles to this non-styling class - instead, add your own class. Learn more at https://philipwalton.com/articles/decoupling-html-css-and-javascript/#classes-with-more-than-one-responsibility",
        resolveNestedSelectors: true,
      },
    ],
    "selector-max-id": [
      0,
      {
        message: "Avoid IDs in selectors - they mess up specificity",
      },
    ],
    "selector-max-type": [
      0,
      {
        message:
          "Avoid using element names in selectors - use semantic class names",
      },
    ],
    "selector-max-universal": [
      0,
      {
        message:
          "Avoid using * - write more understandable and maintainable selectors. Learn more at https://www.clairecodes.com/blog/2019-04-21-my-misconceptions-about-the-universal-selector",
      },
    ],
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute"],
        message:
          "Avoid using element names in selectors - use BEM to make semantic class names",
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["/^global$/", "/^local$/"],
      },
    ],
    "value-keyword-case": [
      "lower",
      {
        message: "Use lowercase, it is easier to read in the code",
      },
    ],
  },
};
