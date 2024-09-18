"use client";
import { ReactNode } from "react";
import { TopMenu } from "./top-menu";
import { KobberGrid } from "@gyldendal/kobber-components/react";
// import dynamic from "next/dynamic";

type GridLayoutProps = {
  children: ReactNode;
};

// const KobberGrid = dynamic(() => import("@gyldendal/kobber-components/react").then(mod => mod.KobberGrid), {
//   ssr: false,
// });

export function GridLayout({ children }: GridLayoutProps) {
  // return (
  //   <div>
  //     <TopMenu />
  //     {children}
  //   </div>
  // );

  // With user defined type definition (se kobber.types.tsx)
  // return (
  //   <div>
  //     <TopMenu />
  //     <kobber-grid maxWidth="20%" alignItems="center" gridTemplateColumns={"repeat(1, minmax(0,1fr))"}>
  //       {children}
  //     </kobber-grid>
  //   </div>
  // );

  // Without user defined type definition
  return (
    <KobberGrid maxWidth="100%" alignItems="center" gridTemplateColumns={"repeat(1, minmax(0,1fr))"}>
      <TopMenu />
      {children}
    </KobberGrid>
  );
}
