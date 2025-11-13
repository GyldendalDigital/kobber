declare module "*.svelte" {
  import { SvelteComponentTyped } from "svelte";

  export class SvelteComponent<
    Props extends Record<string, any> = Record<string, any>,
    Events extends Record<string, any> = Record<string, any>,
    Slots extends Record<string, any> = Record<string, any>,
  > extends SvelteComponentTyped<Props, Events, Slots> {}

  export type { SvelteComponentTyped };

  // Optional default export for convenience (will not cause bundler warnings)
  const component: typeof SvelteComponent;
  export default component;
}
