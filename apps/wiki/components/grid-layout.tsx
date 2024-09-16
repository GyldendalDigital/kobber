"use client";
import { ReactNode } from "react";
import { TopMenu } from "./top-menu";
import { KobberGrid } from "@gyldendal/kobber-components/react";

type GridLayoutProps = {
  children: ReactNode;
};

export function GridLayout({ children }: GridLayoutProps) {
  return (
    <KobberGrid>
      <div>Div 1</div>
      <div>div 2</div>
      <div>Div 3</div>
      <div>Div 4</div>
      <div>div 5</div>
      <div>Div 6</div>
      <div>Div 7</div>
      <div>div 8</div>
      <div>Div 9</div>
      <div>Div 10</div>
      <div>div 11</div>
      <div>Div 12</div>
      <div>Div 1</div>
      <div>div 2</div>
      <div>Div 3</div>
      <div>Div 4</div>
      <div>div 5</div>
      <div>Div 6</div>
      <div>Div 7</div>
      <div>div 8</div>
      <div>Div 9</div>
      <div>Div 10</div>
      <div>div 11</div>
      <div>Div 12</div>
      {/* <TopMenu /> */}
      {/* {children} */}
    </KobberGrid>

    // <div className="mx-auto w-full  2xl:w-[1280px]">
    //   <TopMenu />
    //   {children}
    // </div>
  );
}
