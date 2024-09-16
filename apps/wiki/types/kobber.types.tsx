import { Grid } from "@gyldendal/kobber-components/web-components";
import { DOMAttributes } from "react";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["kobber-grid"]: CustomElement<Grid>;
    }
  }
}
