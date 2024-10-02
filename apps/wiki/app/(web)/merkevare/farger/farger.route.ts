import { WikiRoute } from "@/config/routes";
import identitetspalett from "./identitetspalett/identitetspalett.route";
import temafarger from "./temafarger/temafarger.route";

export default {
  farger: {
    title: "Farger",
    children: {
      ...identitetspalett,
      ...temafarger,
    },
  },
} satisfies WikiRoute;
