import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";

/** @type {import("@web/test-runner").TestRunnerConfig} */
export default {
  files: ["src/**/*.test.ts", "src/**/*.spec.ts"],
  plugins: [esbuildPlugin({ ts: true })],
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: "chromium" })],
};
