import { showIncompatiblePluginDialog } from "@sanity/incompatible-plugin";
import { name, version, sanityExchangeUrl } from "./package.json";

export default showIncompatiblePluginDialog({
  name: name,
  versions: {
    v3: version,
    v2: undefined,
  },
  sanityExchangeUrl,
});
