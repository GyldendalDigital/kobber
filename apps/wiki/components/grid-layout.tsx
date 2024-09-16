"use client";
import { ReactNode } from "react";
import { TopMenu } from "./top-menu";

type GridLayoutProps = {
  children: ReactNode;
};

export function GridLayout({ children }: GridLayoutProps) {
  // return <div></div>;

  return (
    <kobber-grid maxWidth="100%" alignItems="center" gridTemplateColumns={"repeat(1, minmax(0,1fr))"}>
      <TopMenu />
      {children}
    </kobber-grid>
  );
}
