"use client";
import dynamic from "next/dynamic";

/**
 * Gave up trying to use web components on the server, after many failed attempts.
 *
 * This file will wrap all kobber components in dynamic and load them client side.
 */

export const KobberCardLayout = dynamic(
  () => import("@gyldendal/kobber-components/react").then(x => x.KobberCardLayout),
  { ssr: false },
);

export const KobberCardLayoutColumnAspectRatio = dynamic(
  () => import("@gyldendal/kobber-components/react").then(x => x.KobberCardLayoutColumnAspectRatio),
  { ssr: false },
);

export const KobberButton = dynamic(() => import("@gyldendal/kobber-components/react").then(x => x.KobberButton), {
  ssr: false,
});

export const KobberThemeContext = dynamic(
  () => import("@gyldendal/kobber-components/react").then(x => x.KobberThemeContext),
  {
    ssr: false,
  },
);

export const KobberIconArrowRight = dynamic(() => import("@gyldendal/kobber-icons/react").then(x => x.IconArrowRight), {
  ssr: false,
});
