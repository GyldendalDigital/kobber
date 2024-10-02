import { WikiRoute } from "@/config/routes";
import logo from "./logo/logo.route";
import farger from "./farger/farger.route";
import typografi from "./typografi/typografi.route";
import ikoner from "./ikoner/ikoner.route";
import layout from "./layout/layout.route";

export default {
  merkevare: {
    title: "Merkevare",
    children: {
      ...logo,
      ...farger,
      ...typografi,
      ...ikoner,
      ...layout,
    },
  },
} satisfies WikiRoute;
