# @gyldendal/kobber-tsconfig

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

## 0.0.1

### Patch Changes

- tsconfig update
