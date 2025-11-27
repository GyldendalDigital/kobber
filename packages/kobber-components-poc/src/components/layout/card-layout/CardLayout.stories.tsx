import {
  cardLayoutApi,
  cardLayoutColumnApi,
} from "@gyldendal/kobber-components-poc/api/layout/card-layout";
import { AspectRatio } from "@gyldendal/kobber-components-poc/react/aspectRatio";
import {
  CardLayout,
  CardLayoutColumn,
} from "@gyldendal/kobber-components-poc/react/layout/card-layout";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { reactDecorator } from "../../../integrations/storybook/reactDecorator";
import { type maxColumns, maxWidths } from "./core/config";
import { ConsumerContainer } from "./story/ConsumerContainer";
import { Info } from "./story/Info";
import { Placeholder } from "./story/Placeholder";

const frameworkOptions = ["React", "API"] as const;

export interface Args {
  showIndicators: boolean;
  modernCss: boolean;
  framework: (typeof frameworkOptions)[number];
  containerWidth: number;
  items: Item[];
  maxWidth: keyof typeof maxWidths;
  maxColumns: keyof typeof maxColumns;
  paddingInline: number;
  gap: number;
  columnAspectRatio: number | undefined;
}

const meta: Meta<Args> = {
  title: "Layouts/CardLayout",
  argTypes: {
    showIndicators: {
      table: { category: "Test" },
      name: "Show indicators",
      control: { type: "boolean" },
    },
    modernCss: {
      table: { category: "Test" },
      name: "Assume modern CSS support (container queries and aspect ratio). Omit the modernCss-prop for automatic detection.",
      control: { type: "boolean" },
    },
    framework: {
      table: { category: "Test" },
      name: "Framework",
      control: { type: "radio" },
      options: frameworkOptions,
    },
    items: {
      table: { category: "Consumer" },
      name: "Items",
      control: { type: "object" },
    },
    containerWidth: {
      table: { category: "Consumer" },
      name: "Container width (0 for viewport width)",
      control: { type: "number" },
    },
    maxWidth: {
      table: { category: "Component props" },
      name: "Max grid width. These are predefined and used for generating static CSS.",
      control: { type: "radio" },
      options: Object.keys(maxWidths).map(Number),
    },
    maxColumns: {
      table: { category: "Component props" },
      name: "Max columns",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
    paddingInline: {
      table: { category: "Component props" },
      name: "Padding inline",
      control: { type: "number" },
    },
    gap: {
      table: { category: "Component props" },
      name: "Column gap",
      control: { type: "number" },
    },
    columnAspectRatio: {
      table: { category: "Component props" },
      name: "Column aspect ratio (0 for no aspect ratio)",
      control: { type: "number" },
    },
  },
  decorators: [reactDecorator],
  parameters: { layout: "fullscreen" },
};

export default meta;

const render = (args: Args) => (
  <>
    <ConsumerContainer {...args}>
      {args.framework === "React" ? renderAsReact(args) : renderAsApi(args)}
    </ConsumerContainer>
    <Info maxContainerWidth={args.maxWidth} maxColumns={args.maxColumns} style={{ padding: 16 }} />
  </>
);

const renderAsReact = ({
  maxWidth,
  maxColumns,
  modernCss,
  columnAspectRatio,
  paddingInline,
  gap,
  items,
}: Args) => (
  <CardLayout
    maxWidth={maxWidth}
    maxColumns={maxColumns}
    modernCss={modernCss}
    columnAspectRatio={columnAspectRatio === 0 ? undefined : columnAspectRatio}
    paddingInline={paddingInline}
    gap={gap}
  >
    {items.map(({ span, content, transparent }, index) => (
      <CardLayoutColumn
        key={index.toString()}
        span={span}
        columnAspectRatio={columnAspectRatio === 0 ? undefined : columnAspectRatio}
        modernCss={modernCss}
      >
        <Placeholder index={index} transparent={transparent} span={span}>
          {content}
        </Placeholder>
      </CardLayoutColumn>
    ))}
  </CardLayout>
);

const renderAsApi = ({
  maxWidth,
  maxColumns,
  modernCss,
  columnAspectRatio: columnAspectRatioProp,
  paddingInline,
  gap,
  items,
}: Args) => {
  const columnAspectRatio = columnAspectRatioProp === 0 ? undefined : columnAspectRatioProp;
  const api = cardLayoutApi({
    maxWidth,
    maxColumns,
    modernCss,
    columnAspectRatio,
    paddingInline,
    gap,
  });
  return (
    <div className={api.root.className} style={api.root.style}>
      <div className={api.queryContainer.className} style={api.queryContainer.style}>
        <div className={api.grid.className} style={api.grid.style}>
          {items.map(({ span, content, transparent }, index) => {
            const columnApi = cardLayoutColumnApi({
              span,
              columnAspectRatio,
              modernCss,
            });
            const placeholderProps = {
              index,
              transparent,
              span,
            };
            return (
              <div
                key={index.toString()}
                className={columnApi.root.className}
                style={columnApi.root.style}
              >
                <div className={columnApi.padding.className}>
                  {columnAspectRatio === undefined || modernCss ? (
                    <Placeholder {...placeholderProps}>{content}</Placeholder>
                  ) : (
                    <AspectRatio aspectRatio={`1/${columnAspectRatio}`}>
                      <Placeholder {...placeholderProps}>{content}</Placeholder>
                    </AspectRatio>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface Item {
  span: keyof typeof maxColumns;
  transparent: boolean;
  content: ReactNode;
}

const baseItem: Item = {
  span: 1,
  transparent: false,
  content: "",
};

export const Default: StoryObj<Args> = {
  name: "Default",
  render,
};

Default.args = {
  showIndicators: true,
  modernCss: true,
  framework: "React",
  maxWidth: 1200,
  maxColumns: 12,
  paddingInline: 8,
  gap: 8,
  containerWidth: 0,
  items: [
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
  ],
};

export const FourColumns: StoryObj<Args> = {
  name: "Four columns 4:5",
  render,
};

FourColumns.args = {
  showIndicators: true,
  modernCss: true,
  framework: "React",
  maxWidth: 1200,
  maxColumns: 4,
  paddingInline: 16,
  gap: 16,
  containerWidth: 1280,
  columnAspectRatio: 0.8,
  items: [
    { ...baseItem, span: 2 },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem, span: 2 },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
    { ...baseItem },
  ],
};

export const SixColumns: StoryObj<Args> = {
  name: "Six columns",
  render,
};

SixColumns.args = {
  showIndicators: true,
  modernCss: true,
  framework: "React",
  maxWidth: 1200,
  maxColumns: 6,
  paddingInline: 16,
  gap: 16,
  containerWidth: 1280,
  items: [
    {
      ...baseItem,
      transparent: true,
      content: "Lorem ipsum dolor sit amet.",
      span: 2,
    },
    {
      ...baseItem,
      transparent: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      ...baseItem,
      transparent: true,
      content: "Lorem ipsum dolor sit amet. Consectetur adipisicing elit. Quisquam, quos.",
    },
    { ...baseItem, transparent: true, content: "Lorem ipsum dolor sit amet." },
    { ...baseItem, transparent: true, content: "Lorem ipsum dolor sit amet." },
    {
      ...baseItem,
      transparent: true,
      content: "Lorem ipsum dolor sit amet.",
      span: 2,
    },
    { ...baseItem, transparent: true, content: "Lorem ipsum dolor sit amet." },
    { ...baseItem, transparent: true, content: "Lorem ipsum dolor sit amet." },
    { ...baseItem, transparent: true, content: "Lorem ipsum dolor sit amet." },
    { ...baseItem, transparent: true, content: "Lorem ipsum dolor sit amet." },
    {
      ...baseItem,
      transparent: true,
      content: "Lorem ipsum dolor sit amet.",
      span: 6,
    },
    { ...baseItem, transparent: true, content: "Lorem ipsum dolor sit amet." },
  ],
};
