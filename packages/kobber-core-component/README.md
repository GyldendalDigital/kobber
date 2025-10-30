# Kobber Core Component Info

---

> NOTE(sølve): I have tried to summarize what we have been working on / discussing for the past week (44). However, this initial version is written by me and from my perspective, and is likely to be adjusted/discussed from here. This is in no way shape or form final, this is a draft. I excpect us to iterate over it together. Until then, dont assume this info to be final before the team has come to shared agreement over its contents.

---

Kobber core components are built to handle different types of output/render formats. Every component has a `.core` file, that concists of the code/html for the component. Then we have wrapper files that uses the content in the core file to render to the specific format. Ideally there is no specific handling for different formats, but if it is needed, the format type is available in `.core` to handle that.

Users of this library will be refered to as consumer, and creators of this library will be refered to as producer.

## Formats supported

We (will) support
- Web Component
- React
- Svelte

This means that we will deliver pre-wrapped, ready to use components in these formats. However, they are not all equal, becuase some of these formats support different functionality (see table below).

| Format        | SSR support   | Style inheritence | Feature
| ------------- | ------------- | ----------------- | -------
| Web Component | No            | No (unsure)       | x
| React         | Yes           | Yes               | y
| Svelte        | No (maybe)    | Yes               | z

### Why core

This library should be able to outlive our current stacks. When we create a new project, today or in the future, we would like to not have to re-write the entire library to be able to deliver components to that project.

Therefore, we avoid using any large framework directly, and instead try to write every single component in one concise way (JSX adjecent), and go straight from that format to the different wrappers that we support. The cost of developing a new wrapper is small, and should compensate for the small amount of extra development time compared to delivering to a single framework.

Also, we use multiple front-end frameworks at Gyldendal, which means we would either have to
- A: Write seperate duplicates for each framework
- B: Write for only one and not support the others/use web compnents and forgo a bunch of modern funcitonality

Case A scales poorly, and including a new framework becomes a big deccision, meaning it will not happen that often, and locks our consumers to what we offer. Case B is restriciting, and in the case where we want to change what format we want to deliver, it would require a large rewrite.

### Why web component support

Web components are more limited when it comes to giving full support for 'nice to have' functionality. Things like server side rendering (ssr), is difficult to support in any good meaningful way, and then we reccomend that people use a specific wrapper instead.

The reason why we would still like to support web components is to future-proof the component library. If a consumer wishes to try out a new framework, they can create their own wrapper for the web component(s) in said framework, and quickly get access to the entire library. This will enable faster prototyping, testing, and integration of new technology. We consider it to be important to deliver this flexibility to our consumers, as the modern front-end web world moves very quickly, and we do not want to limit them in their future choices of technology.

### Why not only web component support

Having to go through a web component before wrapping to different frameworks later brings along the downsides of web components to the other frameworks. Therefore, we have `.core` go straight to each wrapper instead.

## Functionality

Components we create will extend their HTML counterpart. In practice, this means that any a `<kobber-button>` will have all the same capabilities from the consumers perspective as a `<button>`, with additional features and styling. We are not going to restrict the consumer from overwriting parts of the component, that is up to them and their usecase. We will however not tell a consumer that overwriting values we handle to be a solution to a specific implementation based on the design spec. Meaning, if something is supposed to be implemented by the desing spec, one should not have to overwrite it.

Example:

The consumer needs to implement a different color for a warning banner, and warning is not a concept that the component takes into account. If the design spec indicates that there should be a different color in this circumnstance, it is not the consumers job to patch this into the component. However, if warning is not in the design spec, but the consumer wishes to have this be a thing, then they should handle it themselves.

There will be examples that live in a gray area between these to cases, but generally speaking, if something is in the design spec, it should be layed out clearly what the consumer should do. If not, the consumer should report that to the team rather than doing their own adjustments on their end.

## Reactivity

NOTE:(sølve): My perspective on the matter, should be tried and discussed more

Reactivity should fall into two categories:
1. Internal, the consumer should not have to worry about it
2. External, the producer should not have to worry about it

In practice, the component should be able to not break any wished reactivity from the consumers end, and will require them to be in full control of it. This makes the roles of who owns what clear for both parties, and avoids any sort of black-box control flow.
