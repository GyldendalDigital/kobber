# @gyldendal/kobber-icons

## 0.6.9

### Patch Changes

- Correct Content Wrapper based on real usage, and correct checkbox icon color
- Updated dependencies
  - @gyldendal/kobber-base@0.6.9

## 0.6.8

### Patch Changes

- Add ContentWrapper and TextModule components
- Updated dependencies
  - @gyldendal/kobber-base@0.6.8

## 0.6.7

### Patch Changes

- Add new kobber-base tokens, and re-enable kobber-icons' dts definitions
- Updated dependencies
  - @gyldendal/kobber-base@0.6.7

## 0.6.6

### Patch Changes

- New components Display, Title, TextLabel and TextBody
- Updated dependencies
  - @gyldendal/kobber-base@0.6.6

## 0.6.5

### Patch Changes

- Add new icons, remove kobber-eslint and kobber-prettier
- Updated dependencies
  - @gyldendal/kobber-base@0.6.5

## 0.6.4

### Patch Changes

- Add new icons
- Updated dependencies
  - @gyldendal/kobber-base@0.6.4

## 0.6.3

### Patch Changes

- kobber-audio-recorder macos-safari-bugfix
- Updated dependencies
  - @gyldendal/kobber-base@0.6.3

## 0.6.2

### Patch Changes

- Correct Button icon-only styles for Safari
- Remove Kobber prefix for web components
- Correct Checkbox and Radio hover styles
- Disable lit-plugin css rule

## 0.6.1

### Patch Changes

- Update readmes and upgrade packages
- Updated dependencies
  - @gyldendal/kobber-base@0.6.1

## 0.6.0

### Minor Changes

Breaking changes:

- Remove react-SSR-safe icons. React consumers should now import icons from @gyødendal/kobber-icons/react.
- Remove prefix "Kobber" from react components. The readme examples show component usage without these prefixes, and kobber-icons don't have them. The prefix is redundant in react components, but must be present in web components, as custom elemens must contain a dash in the element name.
- Give color attributes more semantic names: color-theme, color-level and color-variant, which is easier to read and more consistent across components. This includes splitting the complex Button component variant into simpler attributes, and avoids using wrong attribute names (as in Heading, where variant was really (color) level, but that crashed with Heading level).

Features:

- Add "use client" to kobber-icons. This avoids that consumers must write "use client" in every file importing kobber-icons.
- Add text truncating with ellipsis to Button. Since buttons have a fixed height, and will never be wider than their containers, they need this to handle more text content that that space allows.

Bug fixes:

- When Buttons have icons to the left, we now avoid reversing all button flexbox content. Reversing content does not yield correct result when the button text contains html elements (like em).

Chores:

- Remove tokens that we should not use. The number of reported unused tokens is reduced from 801 to 84. To easily get typography styles, the utility getTypographyStyles is added, to make CSS Custom Properties for all typography styles for a component.
- Components now internally use more data-attributes as css selectors, rather than less semantic class names.
- Upgrade storybook.

### Patch Changes

- Updated dependencies
  - @gyldendal/kobber-base@0.6.0

## 0.5.0

### Minor Changes

Breaking changes:

- Remove react-SSR-safe components, as also server side rendering handles using client side web components. This requires consumers to do the following:
  - use ssr-dom-shim package (see [components readme](https://github.com/GyldendalDigital/kobber/blob/main/packages/kobber-components/README.md#usage))
  - in some cases component usage must be changed (as in KobberButton, where icon prop must be replaced with a slot child).
- Add init function to components and icons that consumers must call. This enables consumers to initialize different versions of components and icons in different rendering stages.

Features:

- Add checkbox group, with hierarchical option (for adding a group checkbox).

Chores:

- Automatically list components for export. This ensures that all components we make are actually exported.
- README is improved with development setup and prerequisites.

### Patch Changes

- Updated dependencies [c2ae0b0]
  - @gyldendal/kobber-base@0.5.0

## 0.4.5

### Patch Changes

- Updated changeset config
- Updated dependencies
  - @gyldendal/kobber-base@0.4.5

## 0.4.4

### Patch Changes

- Republish icon package
- Updated dependencies
  - @gyldendal/kobber-base@0.4.4

## 0.4.3

### Patch Changes

- Carousel updates
- Updated dependencies
  - @gyldendal/kobber-base@0.4.3

## 0.4.2

### Patch Changes

- Make react ssr safe icon components respect currentcolor
- Updated dependencies
  - @gyldendal/kobber-base@0.4.2

## 0.4.1

### Patch Changes

- Build react icons as actual react components
- Updated dependencies
  - @gyldendal/kobber-base@0.4.1

## 0.4.0

### Minor Changes

- Revert packages

### Patch Changes

- Updated dependencies
  - @gyldendal/kobber-base@0.4.0

## 1.0.0

### Major Changes

- Added chevron right and left icons

### Patch Changes

- Updated dependencies
  - @gyldendal/kobber-base@1.0.0

## 0.3.87

### Patch Changes

- Correct kobber-components/checkbox, and add react-ssr-safe version
- Updated dependencies
  - @gyldendal/kobber-base@0.3.87

## 0.3.86

### Patch Changes

- Correct carousel icon prefix
- Updated dependencies
  - @gyldendal/kobber-base@0.3.86

## 0.3.85

### Patch Changes

- 89f22d1: Correct icon size tokens
- Updated dependencies [89f22d1]
  - @gyldendal/kobber-base@0.3.85

## 0.3.84

### Patch Changes

- Make kobber-icons react-ssr-safe
- Updated dependencies
  - @gyldendal/kobber-base@0.3.84

## 0.3.83

### Patch Changes

- Make kobber-radio-group helpText prop optional
- Updated dependencies
  - @gyldendal/kobber-base@0.3.83

## 0.3.82

### Patch Changes

- Correct kobber-radio-group after dev review
- Updated dependencies
  - @gyldendal/kobber-base@0.3.82

## 0.3.81

### Patch Changes

- Manually remove form_radio icon
- Updated dependencies
  - @gyldendal/kobber-base@0.3.81

## 0.3.80

### Patch Changes

- Correct internal icons usage
- Updated dependencies
  - @gyldendal/kobber-base@0.3.80

## 0.3.79

### Patch Changes

- More radio button corrections
- Updated dependencies
  - @gyldendal/kobber-base@0.3.79

## 0.3.78

### Patch Changes

- Bump version after designers' review
- Updated dependencies
  - @gyldendal/kobber-base@0.3.78

## 0.3.77

### Patch Changes

- Correct kobber-radio components
- Updated dependencies
  - @gyldendal/kobber-base@0.3.77

## 0.3.76

### Patch Changes

- Add radioGroup with radioInputs
- Updated dependencies
  - @gyldendal/kobber-base@0.3.76

## 0.3.75

### Patch Changes

- Button full width prop
- Updated dependencies
  - @gyldendal/kobber-base@0.3.75

## 0.3.74

### Patch Changes

- Fix build
- Updated dependencies
  - @gyldendal/kobber-base@0.3.74

## 0.3.73

### Patch Changes

- a238020: refactor reprecated fs api
- Updated dependencies [a238020]
  - @gyldendal/kobber-base@0.3.73

## 0.3.72

### Patch Changes

- Upgraded eslint
- Updated dependencies
  - @gyldendal/kobber-base@0.3.72

## 0.3.71

### Patch Changes

- Upgrade packages
- Updated dependencies
  - @gyldendal/kobber-base@0.3.71

## 0.3.70

### Patch Changes

- Carousel fix
- Updated dependencies
  - @gyldendal/kobber-base@0.3.70

## 0.3.69

### Patch Changes

- tsconfig update
- Updated dependencies
  - @gyldendal/kobber-base@0.3.69

## 0.3.68

### Patch Changes

- Add 2 new icons
- Updated dependencies
  - @gyldendal/kobber-base@0.3.68

## 0.3.67

### Patch Changes

- 2345e1f: removed old ingress web component
- bump
- 05d7b81: kobber link as button
- Updated dependencies [2345e1f]
- Updated dependencies
- Updated dependencies [05d7b81]
  - @gyldendal/kobber-base@0.3.67

## 0.3.66

### Patch Changes

- audio-recorder new callback
- 2345e1f: removed old ingress web component
- Updated dependencies
- Updated dependencies [2345e1f]
  - @gyldendal/kobber-base@0.3.66

## 0.3.65

### Patch Changes

- react components
- Updated dependencies
  - @gyldendal/kobber-base@0.3.65

## 0.3.64

### Patch Changes

- bug fixes
- Updated dependencies
  - @gyldendal/kobber-base@0.3.64

## 0.3.63

### Patch Changes

- package adjustments and audio-recorder mimetype bugfixes
- Updated dependencies
  - @gyldendal/kobber-base@0.3.63

## 0.3.62

### Patch Changes

- Correct versions
- Updated dependencies
  - @gyldendal/kobber-base@0.3.62

## 0.3.61

### Patch Changes

- Clean up dependencies
- Updated dependencies
  - @gyldendal/kobber-base@0.3.61

## 0.3.60

### Patch Changes

- audio-recorder ios data management improvements
- Updated dependencies
  - @gyldendal/kobber-base@0.3.60

## 0.3.59

### Patch Changes

- Correct icon styling
- Updated dependencies
  - @gyldendal/kobber-base@0.3.59

## 0.3.58

### Patch Changes

- audio-recorder iPad bugfix
- Updated dependencies
  - @gyldendal/kobber-base@0.3.58

## 0.3.57

### Patch Changes

- audio recorder single blob output with internal headers
- Updated dependencies
  - @gyldendal/kobber-base@0.3.57

## 0.3.56

### Patch Changes

- audio-recorder data handling rework
- Updated dependencies
  - @gyldendal/kobber-base@0.3.56

## 0.3.55

### Patch Changes

- Minor carousel buttons corrections
- Updated dependencies
  - @gyldendal/kobber-base@0.3.55

## 0.3.54

### Patch Changes

- kobber-components react-ssr-safe export
- Updated dependencies
  - @gyldendal/kobber-base@0.3.54

## 0.3.53

### Patch Changes

- Remove icon import from carousel
- Updated dependencies
  - @gyldendal/kobber-base@0.3.53

## 0.3.52

### Patch Changes

- Bump
- Updated dependencies
  - @gyldendal/kobber-base@0.3.52

## 0.3.51

### Patch Changes

- Yet more carousel styling corrections
- Updated dependencies
  - @gyldendal/kobber-base@0.3.51

## 0.3.50

### Patch Changes

- Carousel CSS fixes
- Updated dependencies
  - @gyldendal/kobber-base@0.3.50

## 0.3.49

### Patch Changes

- audio-recorder bugs and design improvements
- Updated dependencies
  - @gyldendal/kobber-base@0.3.49

## 0.3.48

### Patch Changes

- Add Carousel exports
- Updated dependencies
  - @gyldendal/kobber-base@0.3.48

## 0.3.47

### Patch Changes

- bugfixes for audio-recorder
- Updated dependencies
  - @gyldendal/kobber-base@0.3.47

## 0.3.46

### Patch Changes

- audio-recorder design tweaks and updates
- Updated dependencies
  - @gyldendal/kobber-base@0.3.46

## 0.3.45

### Patch Changes

- button, divider, icons
- Updated dependencies
  - @gyldendal/kobber-base@0.3.45

## 0.3.44

### Patch Changes

- Update button component
- Updated dependencies
  - @gyldendal/kobber-base@0.3.44

## 0.3.43

### Patch Changes

- Chromium 80 card layout fixes
- Updated dependencies
  - @gyldendal/kobber-base@0.3.43

## 0.3.42

### Patch Changes

- design and technical improvemnts in audio-recorder
- Updated dependencies
  - @gyldendal/kobber-base@0.3.42

## 0.3.41

### Patch Changes

- CardLayout fallback for resizeObserver
- Updated dependencies
  - @gyldendal/kobber-base@0.3.41

## 0.3.40

### Patch Changes

- Custom aspect ratios for card layout columns
- Updated dependencies
  - @gyldendal/kobber-base@0.3.40

## 0.3.39

### Patch Changes

- audio-recorder unique id
- Updated dependencies
  - @gyldendal/kobber-base@0.3.39

## 0.3.38

### Patch Changes

- changing audio-recorder to build mjs
- Updated dependencies
  - @gyldendal/kobber-base@0.3.38

## 0.3.37

### Patch Changes

- fixing previous build
- Updated dependencies
  - @gyldendal/kobber-base@0.3.37

## 0.3.36

### Patch Changes

- kobber-audio-recorder design implementation
- Updated dependencies
  - @gyldendal/kobber-base@0.3.36

## 0.3.35

### Patch Changes

- Added card layout with six columns
- Updated dependencies
  - @gyldendal/kobber-base@0.3.35

## 0.3.34

### Patch Changes

- Add some filled icons
- Updated dependencies
  - @gyldendal/kobber-base@0.3.34

## 0.3.33

### Patch Changes

- default export for kobber-audio-recorder
- Updated dependencies
  - @gyldendal/kobber-base@0.3.33

## 0.3.32

### Patch Changes

- expose kobber-audio-recorder correctly
- Updated dependencies
  - @gyldendal/kobber-base@0.3.32

## 0.3.31

### Patch Changes

- pointing to dist for audio-recorder
- Updated dependencies
  - @gyldendal/kobber-base@0.3.31

## 0.3.30

### Patch Changes

- Adding kobber-audio-recorder package
- Updated dependencies
  - @gyldendal/kobber-base@0.3.30

## 0.3.29

### Patch Changes

- Correct icon lists, to be usable with sprites
- Updated dependencies
  - @gyldendal/kobber-base@0.3.29

## 0.3.28

### Patch Changes

- Correct kobber-icons' README
- Updated dependencies
  - @gyldendal/kobber-base@0.3.28

## 0.3.27

### Patch Changes

- Add roles, rename icon prefix
- Updated dependencies
  - @gyldendal/kobber-base@0.3.27

## 0.3.26

### Patch Changes

- Add aria-label, viewBox and styles to icons
- Updated dependencies
  - @gyldendal/kobber-base@0.3.26

## 0.3.25

### Patch Changes

- Expose icons as components
- Updated dependencies
  - @gyldendal/kobber-base@0.3.25

## 0.3.24

### Patch Changes

- Repair icon sprite loading
- Updated dependencies
  - @gyldendal/kobber-base@0.3.24

## 0.3.23

### Patch Changes

- Correct icon assets exports paths
- Updated dependencies
  - @gyldendal/kobber-base@0.3.23

## 0.3.22

### Patch Changes

- Move icon asset file to chunks export folder
- Updated dependencies
  - @gyldendal/kobber-base@0.3.22

## 0.3.21

### Patch Changes

- Re-add icons' assets export
- Updated dependencies
  - @gyldendal/kobber-base@0.3.21

## 0.3.20

### Patch Changes

- Correct icons
- Updated dependencies
  - @gyldendal/kobber-base@0.3.20

## 0.3.19

### Patch Changes

- More icon refinements
- Updated dependencies
  - @gyldendal/kobber-base@0.3.19

## 0.3.18

### Patch Changes

- Yet further icon refinements
- Updated dependencies
  - @gyldendal/kobber-base@0.3.18

## 0.3.17

### Patch Changes

- Further icon refinement
- Updated dependencies
  - @gyldendal/kobber-base@0.3.17

## 0.3.16

### Patch Changes

- Refine kobber-icons
- Updated dependencies
  - @gyldendal/kobber-base@0.3.16

## 0.3.15

### Patch Changes

- Add kobber-icons
- Updated dependencies
  - @gyldendal/kobber-base@0.3.15

## 0.3.14

### Patch Changes

- Add extension to tokens import (to avoid pipeline crashing)
- Updated dependencies
  - @gyldendal/kobber-base@0.3.14

## 0.3.13

### Patch Changes

- Enhance progressbar accessibility (by adding border)
- Updated dependencies
  - @gyldendal/kobber-base@0.3.13

## 0.3.12

### Patch Changes

- Refine checkbox code (add new story, enable injecting styles)
- Updated dependencies
  - @gyldendal/kobber-base@0.3.12

## 0.3.11

### Patch Changes

- Predefined grid config for card layouts
- Updated dependencies
  - @gyldendal/kobber-base@0.3.11

## 0.3.10

### Patch Changes

- ee2a7b7: Add observedAttributes to progressBarItem
- Updated dependencies [ee2a7b7]
  - @gyldendal/kobber-base@0.3.10

## 0.3.9

### Patch Changes

- KobberScene: Made fullSize presentation mode use all paddings
- Updated dependencies
  - @gyldendal/kobber-base@0.3.9

## 0.3.8

### Patch Changes

- Progress bar updates
- Updated dependencies
  - @gyldendal/kobber-base@0.3.8

## 0.3.7

### Patch Changes

- Updated default grid paddings
- Updated dependencies
  - @gyldendal/kobber-base@0.3.7

## 0.3.6

### Patch Changes

- Fix: include checkbox type file
- Updated dependencies
  - @gyldendal/kobber-base@0.3.6

## 0.3.4

### Patch Changes

- Added Button, Badge, Checkbox
- Updated dependencies
  - @gyldendal/kobber-base@0.3.4

## 0.3.3

### Patch Changes

- Scene background image fix for Safari 16 and lower
- Updated dependencies
  - @gyldendal/kobber-base@0.3.3

## 0.3.2

### Patch Changes

- Added files to kobber-base package.json
- Updated dependencies
  - @gyldendal/kobber-base@0.3.2

## 0.3.1

### Patch Changes

- Added missing prepare script to kobber-base
- Updated dependencies
  - @gyldendal/kobber-base@0.3.1

## 0.3.0

### Minor Changes

- TypeScript token definitions

### Patch Changes

- Updated dependencies
  - @gyldendal/kobber-base@0.3.0

## 0.2.0

### Minor Changes

- Tokens in js and ts formats

### Patch Changes

- 49ace2a: Tokens in js and ts formats
- Updated dependencies
- Updated dependencies [49ace2a]
  - @gyldendal/kobber-base@0.2.0

## 0.1.0

### Minor Changes

- Updated token names and created a basic layout-system

### Patch Changes

- Updated dependencies
  - @gyldendal/kobber-base@0.1.0

## 0.0.1

### Patch Changes

- init
- Updated dependencies
  - @gyldendal/kobber-base@0.0.1
