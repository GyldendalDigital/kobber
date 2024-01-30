# Kobber scene

Components for rendering scene objects from CMS.

See [Scene.stories.tsx](./src/Scene.stories.tsx) for examples.

Can be imported as web components or react components:

`@gyldendal/kobber-scene/web-components`<br />
`@gyldendal/kobber-scene/react`

## CMS data

Enums that match data from CMS are defined in [types.ts](./src/types.ts)

## Optional presentation logic

The following rules are applied to thousands of scenes in Skolestudio:

* The sections `sc-feature-header` and `sc-card-carousel` are displayed in full width
* `sc-feature-header` affects the wrapping row's bottom padding
* Dynamic contents are displayed in full width and full height if there is no other content in the scene
* Dynamic contents are displayed in full width if there is no other content in the row

To apply the same rules, pass `scene.rows` through [groupRowsByPresentation](./src/groupRowsByPresentation.ts) and render each `rowGroup` as [in Skolestudio](https://gyldendaldigital.visualstudio.com/Skolestudio/_git/Skolestudio/?path=%2Fclient%2Fapps%2Fapp%2Fsrc%2Fcommon%2Fscene%2FScene.tsx&version=GBmaster&_a=contents).




