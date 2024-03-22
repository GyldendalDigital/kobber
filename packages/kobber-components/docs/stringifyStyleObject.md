# Module: stringifyStyleObject

## Functions

### stringifyStyleObject

▸ **stringifyStyleObject**(`selector`, `styles`): `string`

Converts an object with CSS properties and values to a CSS string using <a href="https://stylis.js.org/">stylis</a>.<br />
Useful for adding responsive properties to web components.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `styles` | `Readonly`\<`CssDeclarations`\> |

#### Returns

`string`

**`Example`**

Example using media queries.

```ts
toCss(
  ".grid",
  {
    "grid-template-columns": {
      "(max-width: 639px)": "repeat(4, 1fr)",
      "(min-width: 640px)": "repeat(6, 1fr)"
    }
  })
```

Outputs this string, which can then be rendered into a `<style>`-element.

```css
.grid {
  display: grid;
}

@media (max-width: 639px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

**`Example`**

Can be used as responsive properties in Lit elements:

```ts
@customElement("my-grid")
export class Grid extends LitElement {

  @property({ attribute: "grid-template-columns" })
  gridTemplateColumns?: ResponsiveCssValue;

}
```

```html
<my-grid
  .gridTemplateColumns={{
    "(max-width: 639px)": "repeat(4, 1fr)",
    "(min-width: 640px)": "repeat(6, 1fr)",
  }}
></my-grid>
```

#### Defined in

packages/kobber-components/src/utils/stringifyStyleObject.ts:71
