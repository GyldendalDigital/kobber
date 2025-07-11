# @gyldendal/kobber-audio-recorder

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

## 0.4.5

### Patch Changes

- Updated changeset config

## 0.4.4

### Patch Changes

- Republish icon package

## 0.4.3

### Patch Changes

- Carousel updates

## 0.4.2

### Patch Changes

- Make react ssr safe icon components respect currentcolor

## 0.4.1

### Patch Changes

- Build react icons as actual react components

## 0.3.87

### Patch Changes

- Correct kobber-components/checkbox, and add react-ssr-safe version

## 0.3.86

### Patch Changes

- Correct carousel icon prefix

## 0.3.85

### Patch Changes

- 89f22d1: Correct icon size tokens

## 0.3.84

### Patch Changes

- Make kobber-icons react-ssr-safe

## 0.3.83

### Patch Changes

- Make kobber-radio-group helpText prop optional

## 0.3.82

### Patch Changes

- Correct kobber-radio-group after dev review

## 0.3.81

### Patch Changes

- Manually remove form_radio icon

## 0.3.80

### Patch Changes

- Correct internal icons usage

## 0.3.79

### Patch Changes

- More radio button corrections

## 0.3.78

### Patch Changes

- Bump version after designers' review

## 0.3.77

### Patch Changes

- Correct kobber-radio components

## 0.3.76

### Patch Changes

- Add radioGroup with radioInputs

## 0.3.75

### Patch Changes

- Button full width prop

## 0.3.74

### Patch Changes

- Fix build

## 0.3.73

### Patch Changes

- a238020: refactor reprecated fs api

## 0.3.72

### Patch Changes

- Upgraded eslint

## 0.3.71

### Patch Changes

- Upgrade packages

## 0.3.70

### Patch Changes

- Carousel fix

## 0.3.69

### Patch Changes

- tsconfig update

## 0.3.68

### Patch Changes

- Add 2 new icons

## 0.3.67

### Patch Changes

- 2345e1f: removed old ingress web component
- bump
- 05d7b81: kobber link as button

## 0.3.66

### Patch Changes

- audio-recorder new callback
- 2345e1f: removed old ingress web component

## 0.3.65

### Patch Changes

- react components

## 0.3.64

### Patch Changes

- bug fixes

## 0.3.63

### Patch Changes

- package adjustments and audio-recorder mimetype bugfixes

## 0.3.62

### Patch Changes

- Correct versions

## 0.3.61

### Patch Changes

- Clean up dependencies

## 0.3.60

### Patch Changes

- audio-recorder ios data management improvements

## 0.3.59

### Patch Changes

- Correct icon styling

## 0.3.58

### Patch Changes

- audio-recorder iPad bugfix

## 0.3.57

### Patch Changes

- audio recorder single blob output with internal headers

## 0.3.56

### Patch Changes

- audio-recorder data handling rework

## 0.3.55

### Patch Changes

- Minor carousel buttons corrections

## 0.3.54

### Patch Changes

- kobber-components react-ssr-safe export

## 0.3.53

### Patch Changes

- Remove icon import from carousel

## 0.3.52

### Patch Changes

- Bump

## 0.3.51

### Patch Changes

- Yet more carousel styling corrections

## 0.3.50

### Patch Changes

- Carousel CSS fixes

## 0.3.49

### Patch Changes

- audio-recorder bugs and design improvements

## 0.3.48

### Patch Changes

- Add Carousel exports

## 0.3.47

### Patch Changes

- bugfixes for audio-recorder

## 0.3.46

### Patch Changes

- audio-recorder design tweaks and updates

## 0.3.45

### Patch Changes

- button, divider, icons

## 0.3.44

### Patch Changes

- Update button component

## 0.3.43

### Patch Changes

- Chromium 80 card layout fixes

## 0.3.42

### Patch Changes

- design and technical improvemnts in audio-recorder

## 0.3.41

### Patch Changes

- CardLayout fallback for resizeObserver

## 0.3.40

### Patch Changes

- Custom aspect ratios for card layout columns

## 0.3.39

### Patch Changes

- audio-recorder unique id

## 0.3.38

### Patch Changes

- changing audio-recorder to build mjs

## 0.3.37

### Patch Changes

- fixing previous build

## 0.3.36

### Patch Changes

- kobber-audio-recorder design implementation

## 0.3.35

### Patch Changes

- Added card layout with six columns

## 0.3.34

### Patch Changes

- Add some filled icons

## 0.3.33

### Patch Changes

- default export for kobber-audio-recorder

## 0.3.32

### Patch Changes

- expose kobber-audio-recorder correctly

## 0.3.31

### Patch Changes

- pointing to dist for audio-recorder

## 0.3.30

### Patch Changes

- Adding kobber-audio-recorder package
