import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ArticleWrapper";

const meta: Meta = {
  title: "In development 🧪/ArticleWrapper",
  component: "kobber-article-wrapper",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const ArticleWrapper: Story = {
  args: {
    text: "Våre ikoner kommer fra Streamline-biblioteket, og vi har et forhåndsdefinert sett med ikoner som brukes i Gyldendals digitale produkter. Streamline er en grafisk harmonisk ikonbank med flere unike kolleksjoner som kan kombineres etter behov. Vi benytter «Streamline Regular», et enkelt og konsistent formspråk som tydelig kommuniserer handlinger og informasjon til brukeren.",
  },
  render: args =>
    html`<div style="height:10px; width:200px;">
      <kobber-article-wrapper>
        <h1>Tittel</h1>
        <main>${args.text}</main>
      </kobber-article-wrapper>
    </div>`,
};
