# Module: toCss

## Table of contents

### Interfaces

- [Styles](../wiki/toCss.Styles)

### Functions

- [toCss](../wiki/toCss#tocss)

## Functions

### toCss

▸ **toCss**(`selector`, `styles`): `string`

Converts an object with CSS properties and values to a CSS string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `styles` | `Readonly`\<[`Styles`](../wiki/toCss.Styles)\> |

#### Returns

`string`

**`Example`**

Example using media queries

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

#### Defined in

[packages/kobber-components/src/utils/toCss.ts:31](https://github.com/GyldendalDigital/kobber/blob/8fa9ef2/packages/kobber-components/src/utils/toCss.ts#L31)
