import { createComponent } from "@lit/react";
import * as React from "react";
import { Accordion } from "./accordion/Accordion";
import { BoxLayout } from "./layouts/box-layout/BoxLayout";
import { Button } from "./button/Button";
import { CardLayout } from "./layouts/card-layout/CardLayout";
import { CardLayoutColumnAspectRatio } from "./layouts/card-layout/CardLayoutColumnAspectRatio";
import { Carousel } from "./carousel/Carousel";
import { CarouselButton } from "./carousel/CarouselButton";
import { CheckboxInput } from "./checkbox/checkboxInput/CheckboxInput";
import { Divider } from "./divider/Divider";
import { Grid } from "./grid/Grid";
import { GridColumn } from "./grid/GridColumn";
import { GridColumnAspectRatio } from "./grid/GridColumnAspectRatio";
import { Heading } from "./text/heading/Heading";
import { HorizontalLayout } from "./layouts/horizontal-layout/HorizontalLayout";
import { HorizontalLayoutColumn } from "./layouts/horizontal-layout/HorizontalLayoutColumn";
import { IconFormChecked, IconFormIndeterminate, IconFormRadio } from "./internal-icons/index";
import { Ingress } from "./text/ingress/Ingress";
import { Link } from "./link/Link";
import { List } from "./list/List";
import { ListItem } from "./list/ListItem";
import { ProgressBar } from "./progress-bar/ProgressBar";
import { ProgressBarItem } from "./progress-bar/ProgressBarItem";
import { RadioGroup, RadioInput, RadioInputControl } from "./radio/index";
import { TextLink } from "./text/text-link/TextLink";
import { TextWrapper } from "./text/text-wrapper/TextWrapper";
import { ThemeContextProvider } from "./utils/theme-context";

export const KobberAccordion = createComponent({
  tagName: "kobber-accordion",
  elementClass: Accordion,
  react: React,
});

export const KobberBoxLayout = createComponent({
  tagName: "kobber-box-layout",
  elementClass: BoxLayout,
  react: React,
});

export const KobberButton = createComponent({
  tagName: "kobber-button",
  elementClass: Button,
  react: React,
});

export const KobberCardLayout = createComponent({
  tagName: "kobber-card-layout",
  elementClass: CardLayout,
  react: React,
});

export const KobberCardLayoutColumnAspectRatio = createComponent({
  tagName: "kobber-card-layout-column-aspect-ratio",
  elementClass: CardLayoutColumnAspectRatio,
  react: React,
});

export const KobberCarousel = createComponent({
  tagName: "kobber-carousel",
  elementClass: Carousel,
  react: React,
});

export const KobberCarouselButton = createComponent({
  tagName: "kobber-carousel-button",
  elementClass: CarouselButton,
  react: React,
});

export const KobberCheckboxInput = createComponent({
  tagName: "kobber-checkbox-input",
  elementClass: CheckboxInput,
  react: React,
});

export const KobberDivider = createComponent({
  tagName: "kobber-divider",
  elementClass: Divider,
  react: React,
});

export const KobberGrid = createComponent({
  tagName: "kobber-grid",
  elementClass: Grid,
  react: React,
});

export const KobberGridColumn = createComponent({
  tagName: "kobber-grid-column",
  elementClass: GridColumn,
  react: React,
});

export const KobberGridColumnAspectRatio = createComponent({
  tagName: "kobber-grid-column-aspect-ratio",
  elementClass: GridColumnAspectRatio,
  react: React,
});

export const KobberHeading = createComponent({
  tagName: "kobber-heading",
  elementClass: Heading,
  react: React,
});

export const KobberHorizontalLayout = createComponent({
  tagName: "kobber-horizontal-layout",
  elementClass: HorizontalLayout,
  react: React,
});

export const KobberHorizontalLayoutColumn = createComponent({
  tagName: "kobber-horizontal-layout-column",
  elementClass: HorizontalLayoutColumn,
  react: React,
});

export const InternalIconFormChecked = createComponent({
  tagName: "kobber-internal-icon-form-checked",
  elementClass: IconFormChecked,
  react: React,
});

export const InternalIconFormIndeterminate = createComponent({
  tagName: "kobber-internal-icon-form-indeterminate",
  elementClass: IconFormIndeterminate,
  react: React,
});

export const InternalIconFormRadio = createComponent({
  tagName: "kobber-internal-icon-form-radio",
  elementClass: IconFormRadio,
  react: React,
});

export const KobberIngress = createComponent({
  tagName: "kobber-ingress",
  elementClass: Ingress,
  react: React,
});

export const KobberLink = createComponent({
  tagName: "kobber-link",
  elementClass: Link,
  react: React,
});

export const KobberList = createComponent({
  tagName: "kobber-list",
  elementClass: List,
  react: React,
});

export const KobberListItem = createComponent({
  tagName: "kobber-list-item",
  elementClass: ListItem,
  react: React,
});

export const KobberProgressBar = createComponent({
  tagName: "kobber-progress-bar",
  elementClass: ProgressBar,
  react: React,
});

export const KobberProgressBarItem = createComponent({
  tagName: "kobber-progress-bar-item",
  elementClass: ProgressBarItem,
  react: React,
});

export const KobberRadioGroup = createComponent({
  tagName: "kobber-radio-group",
  elementClass: RadioGroup,
  react: React,
});

export const KobberRadioInput = createComponent({
  tagName: "kobber-radio-input",
  elementClass: RadioInput,
  react: React,
});

export const KobberRadioInputControl = createComponent({
  tagName: "kobber-radio-input-control",
  elementClass: RadioInputControl,
  react: React,
});

export const KobberTextLink = createComponent({
  tagName: "kobber-text-link",
  elementClass: TextLink,
  react: React,
});

export const KobberTextWrapper = createComponent({
  tagName: "kobber-text-wrapper",
  elementClass: TextWrapper,
  react: React,
});

export const KobberThemeContext = createComponent({
  tagName: "kobber-theme-context",
  elementClass: ThemeContextProvider,
  react: React,
});
