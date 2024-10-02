import { WikiRoute } from "@/config/routes";
import pp from "./pp-mori/pp-mori.route";
import lyon from "./lyon/lyon.route";
import inter from "./inter/inter.route";
import retningslinjer from "./retningslinjer/retningslinjer.route";

export default {
  typografi: {
    title: "Typografi",
    children: {
      ...pp,
      ...lyon,
      ...inter,
      ...retningslinjer,
    },
  },
} satisfies WikiRoute;
