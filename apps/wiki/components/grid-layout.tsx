"use client";
import { ReactNode } from "react";
import { TopMenu } from "./top-menu";
import { KobberGrid } from "@gyldendal/kobber-components/react";

type GridLayoutProps = {
  children: ReactNode;
};

export function GridLayout({ children }: GridLayoutProps) {
  // return <div></div>;

  // With user defined type definition (se kobber.types.tsx)
  // return (
  //   <kobber-grid maxWidth="100%" alignItems="center" gridTemplateColumns={"repeat(1, minmax(0,1fr))"}>
  //     <TopMenu />
  //     {children}
  //   </kobber-grid>

  // Without user defined type definition
  return (
    <KobberGrid maxWidth="100%" alignItems="center" gridTemplateColumns={"repeat(1, minmax(0,1fr))"}>
      <TopMenu />
      {children}
    </KobberGrid>
  );
}
