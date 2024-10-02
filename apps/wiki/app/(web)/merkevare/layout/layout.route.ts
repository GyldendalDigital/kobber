import { WikiRoute } from "@/config/routes";
import grid from "./grid/grid.route";
import identitetsprinsipper from "./identitetsprinsipper/identitetsprinsipper.route";
import spacing from "./spacing/spacing.route";

export default {
  layout: {
    title: "Layout",
    children: {
      ...grid,
      ...identitetsprinsipper,
      ...spacing,
    },
  },
} satisfies WikiRoute;
