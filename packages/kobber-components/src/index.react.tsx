import { createComponent } from "@lit/react";
import * as React from "react";
import { Grid } from "./grid/Grid";
import { GridColumn } from "./grid/GridColumn";
import { CheckboxInput } from "./checkbox/checkboxInput/CheckboxInput";
import { GridColumnAspectRatio } from "./grid/GridColumnAspectRatio";
import { CardLayout } from "./layouts/card-layout/CardLayout";
import { CardLayoutColumnAspectRatio } from "./layouts/card-layout/CardLayoutColumnAspectRatio";
import { BoxLayout } from "./layouts/box-layout/BoxLayout";
import { ThemeContextProvider } from "./utils/theme-context";
import { Divider } from "./divider/Divider";
import { ProgressBar } from "./progress-bar/ProgressBar";
import { ProgressBarItem } from "./progress-bar/ProgressBarItem";
import { Carousel } from "./carousel/Carousel";
import { CarouselButton } from "./carousel/CarouselButton";
import { HorizontalLayout } from "./layouts/horizontal-layout/HorizontalLayout";
import { HorizontalLayoutColumn } from "./layouts/horizontal-layout/HorizontalLayoutColumn";

import { Accordion } from "./accordion/Accordion.react";
import { Button } from "./button/Button.react";
import { TextWrapper } from "./text/text-wrapper/TextWrapper.react";
import { TextLink } from "./text/text-link/TextLink.react";
import { Heading } from "./text/heading/Heading.react";
import { Ingress } from "./text/ingress/Ingress.react";
import { Link } from "./link/Link.react";
import { List } from "./list/List.react";
import { ListItem } from "./list/ListItem.react";
import { RadioGroup, RadioInput, RadioInputControl } from "./radio/index.react";
import { IconFormChecked, IconFormIndeterminate, IconFormRadio } from "./internal-icons/index.react";

export const KobberTextWrapper = TextWrapper;
export const KobberTextLink = TextLink;
export const KobberHeading = Heading;
export const KobberIngress = Ingress;
export const KobberButton = Button;
export const KobberLink = Link;
export const KobberAccordion = Accordion;
export const KobberList = List;
export const KobberListItem = ListItem;
export const KobberRadioGroup = RadioGroup;
export const KobberRadioInput = RadioInput;
export const KobberRadioInputControl = RadioInputControl;
export const InternalIconFormChecked = IconFormChecked;
export const InternalIconFormIndeterminate = IconFormIndeterminate;
export const InternalIconFormRadio = IconFormRadio;

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

export const KobberCheckboxInput = createComponent({
  tagName: "kobber-checkbox-input",
  elementClass: CheckboxInput,
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

export const KobberBoxLayout = createComponent({
  tagName: "kobber-box-layout",
  elementClass: BoxLayout,
  react: React,
});

export const KobberDivider = createComponent({
  tagName: "kobber-divider",
  elementClass: Divider,
  react: React,
});

export const KobberThemeContext = createComponent({
  tagName: "kobber-theme-context",
  elementClass: ThemeContextProvider,
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
