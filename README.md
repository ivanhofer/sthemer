# :first_quarter_moon: sthemer

**A lightweight yet powerful solution to support multiple color schemes in your Svelte/SvelteKit application.**

## Advantages

:baby_chick: lightweight (<1kb)\
:muscle: powerful\
:ok_hand: easy to use\
:running: fast and efficient\
:nesting_dolls: nested schemes \
:stopwatch: supports SSR (Server-Side Rendering)\
:safety_vest: best TypeScript support (works with JavaScript projects too) \
:no_entry: no external dependencies

<!-- list of supported emojis on GitHub: https://github.com/ikatyang/emoji-cheat-sheet -->

## Examples

[Click here to see some live examples](https://sthemer.vercel.app/)

## Getting Started

1. :keyboard: Install `sthemer` as a dependency.

   ```bash
   npm install sthemer
   ```

2. :wrench: Add the style mixin globally.

   _svelte.config.js_

   ```js
   import preprocess from 'svelte-preprocess'

   /** @type {import('@sveltejs/kit').Config} */
   const config = {
      preprocess: preprocess({
         scss: {
            prependData: `@import 'sthemer/mixins';`,
         },
      }),
   }

   export default config
   ```

   > This example uses [`scss`](https://sass-lang.com/documentation/syntax#scss) as css preprocessor. Other formats are also supported. See the [supported CSS preprocessors](#supported-css-preprocessors) section for more details.

3. :file_folder: Wrap your code with the `Sthemer.svelte` component and define your preferred [strategy](#strategies).

   _App.svelte_ or \_\__layout.svelte_

   ```svelte
   <script>
      import Sthemer from 'sthemer/Sthemer.svelte'
   </script>

   <Sthemer strategy="auto">
      <!-- your application goes here -->
   </Sthemer>
   ```

4. :art: Define styles for your components.

   _Button.svelte_

   ```svelte
   <button on:click>
      <slot />
   </button>

   <style lang="scss">
      button {
         // styles that apply to both schemes
         font-size: 1.3rem;
         padding: 10px 20px;
         border-radius: 8px;

         // these styles will apply when the component gets rendered on a 'dark' wrapper
         @include on-dark {
            background-color: white;
            color: black;
         }

         // these styles will apply when the component gets rendered on a 'light' wrapper
         @include on-light {
            background-color: black;
            color: white;
         }
      }
   </style>
   ```

5. :open_book: Thats it. Play around and explore the docs to see some more examples.

6. :star: Star this project on [GitHub](https://github.com/ivanhofer/sthemer).
   > Thanks! This helps the project to grow.

## Usage

#### Sthemer.svelte

To wrap your application or parts of it. It will set up everything in order for you to just [define the styles](#supported-css-preprocessors) of your components.

```svelte
<script>
   import Sthemer from 'sthemer/Sthemer.svelte'
</script>

<Sthemer strategy="auto" let:scheme>
   I am rendered on a <strong>{scheme}</strong>
   wrapper.
</Sthemer>
```

##### props

-  `strategy` (optional): the [strategy](#strategies) to use.\
    The component reacts to changes to the `strategy` prop and changes the color scheme accordingly.

#### slot props

-  `let:scheme`: the current used scheme.\
    To get the current used scheme, use the `let:scheme` slot prop.

#### context.ts

To programmatically access the current used scheme and strategy, you can call `getSthemerContext()`. The returned object contains two items:

-  **strategy**: a [`writable-store`](https://svelte.dev/docs#run-time-svelte-store-writable) containing the strategy to use.
-  **scheme**: a [`readable-store`](https://svelte.dev/docs#run-time-svelte-store-readable) containing the used color scheme.

```svelte
<script>
   import { getSthemerContext } from 'sthemer/context'
   const { strategy, scheme } = getSthemerContext()

   const toggleStrategy = () => {
      $strategy = $strategy === 'dark' ? 'light' : 'dark'
   }
</script>

<button on:click={toggleStrategy}>Toggle strategy</button>

Used scheme: {$scheme}
```

### supported CSS preprocessors

`sthemer` works with the most used CSS preprocessors to provide you with a good user experience. It is recommended to use one of the following options.

#### [scss](https://sass-lang.com/documentation/syntax#scss)

1. Add the mixin globally.

   _svelte.config.js_

   ```js
   import preprocess from 'svelte-preprocess'

   /** @type {import('@sveltejs/kit').Config} */
   const config = {
      preprocess: preprocess({
         scss: {
            prependData: `@import 'sthemer/mixins';`,
         },
      }),
   }

   export default config
   ```

2. Define styles for your components.

   _Component.svelte_

   ```svelte
   <button on:click>
      <slot />
   </button>

   <style lang="scss">
      button {
         // these styles will apply when the component gets rendered on a 'dark' wrapper
         @include on-dark {
            background-color: white;
            color: black;
         }

         // these styles will apply when the component gets rendered on a 'light' wrapper
         @include on-light {
            background-color: black;
            color: white;
         }
      }
   </style>
   ```

#### [less](https://lesscss.org/)

1. Add the mixin globally.

   _svelte.config.js_

   ```js
   import preprocess from 'svelte-preprocess'

   /** @type {import('@sveltejs/kit').Config} */
   const config = {
      preprocess: preprocess({
         less: {
            prependData: `@import 'sthemer/mixins';`,
         },
      }),
   }

   export default config
   ```

2. Define styles for your components.

   _Component.svelte_

   ```svelte
   <button on:click>
      <slot />
   </button>

   <style lang="less">
      button {
         // these styles will apply when the component gets rendered on a 'dark' wrapper
         .on-dark({
            background-color: white;
            color: black;
         });

         // these styles will apply when the component gets rendered on a 'light' wrapper
         .on-light({
            background-color: black;
            color: white;
         });
      }
   </style>
   ```

#### [sass](https://sass-lang.com/)

1. Add the mixin globally.

   _svelte.config.js_

   ```js
   import preprocess from 'svelte-preprocess'

   /** @type {import('@sveltejs/kit').Config} */
   const config = {
      preprocess: preprocess({
         sass: {
            prependData: `@import 'sthemer/mixins'`,
         },
      }),
   }

   export default config
   ```

2. Define styles for your components.

   _Component.svelte_

   ```svelte
   <button on:click>
      <slot />
   </button>

   <style lang="sass">
      button
         // these styles will apply when the component gets rendered on a 'dark' wrapper
         @include on-dark
            background-color: white
            color: black
   
         // these styles will apply when the component gets rendered on a 'light' wrapper
         @include on-light
            background-color: black
            color: white
   </style>
   ```

#### CSS (no preprocessor)

1. Define styles for your components.

   _Component.svelte_

   ```svelte
   <button on:click>
      <slot />
   </button>

   <style>
      // these styles will apply when the component gets rendered on a 'dark' wrapper
      :global(.sthemer-dark) button {
         background-color: white;
         color: black;
      }

      // these styles will apply when the component gets rendered on a 'light' wrapper
      :global(.sthemer-dark) button {
         background-color: black;
         color: white;
      }
   </style>
   ```

### Schemes

`sthemer` supports the [built-in color schemes](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) **'dark'** and **'light'**.

-  **light**: The user expects a light background and dark text.
-  **dark**: The user expects a dark background and light text.

### Strategies

-  #### **auto**:

   **default value**

   Auto-detects the user's preferred color scheme.

   The [prefers-color-scheme media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is used to determine the user's preferred color scheme.

   > Read [here](#server-side-rendering-ssr) to know how to add SSR support.

-  #### **light**:

   Use the **light** color scheme.

-  #### **dark**:

   Use the **dark** color scheme.

-  #### **inverted**:

   Use the **inverted** color scheme.

   If used on a **light** color scheme, it will be **dark** and vice versa. Can be useful when using [nested schemes](#nested-schemes). When used at the root, it uses the inverted color scheme from the ['auto'-strategy](#auto).

   > Read [here](#server-side-rendering-ssr) to know how to add SSR support.

### Nested Schemes

By default `sthemer` doesn't output code that can be used with nested color schemes. But you can manually specify how many levels of nesting you want support.

-  [**scss**](#scss)

   -  globally

      _svelte.config.js_

      ```js
      // set the '$sthemerLevels' variable to the value you want
      prependData: '@import 'sthemer/mixins'; $sthemerLevels: 3',
      ```

   -  for a specific selector

      _Component.svelte_

      ```scss
      button {
         // add the amount of levels as a parameter
         @include on-dark(3) {
            background-color: white;
         }
      }
      ```

-  [**less**](#less)

   -  globally

      _svelte.config.js_

      ```js
      // set the '@sthemerLevels' variable to the value you want
      prependData: `@import 'sthemer/mixins'; @sthemerLevels: 3;`,
      ```

   -  for a specific selector

      _Component.svelte_

      ```less
      button {
         .on-dark({
            background-color: white;
         }, 3); // add the amount of levels as a second parameter
      }
      ```

-  [**sass**](#sass)

   -  globally

      _svelte.config.js_

      ```js
      // set the '$sthemerLevels' variable to the value you want
      prependData: `
      @import 'sthemer/mixins'
      $sthemerLevels: 3
      `,
      ```

   -  for a specific selector

      _Component.svelte_

      ```scss
      button
         // add the amount of levels as a parameter
         @include on-dark(3)
            background-color: white
      ```

-  [**CSS**](#css-no-preprocessor)

   If you want to support multiple [levels of nesting](#nested-schemes) with plain CSS, you need to manually add them if you are not using a preprocessor like [`sass`](#sass), [`scss`](#scss) or [`less`](#less).

   ```css
   // these styles will apply when the component gets rendered on a 'dark' wrapper
   // (supports 3 levels of nesting)
   :global(.sthemer-dark) button,
   :global(.sthemer-light) :global(.sthemer-dark) button,
   :global(.sthemer-dark) :global(.sthemer-light) :global(.sthemer-dark) button {
      background-color: white;
      color: black;
   }

   // these styles will apply when the component gets rendered on a 'light' wrapper
   // (supports 3 levels of nesting)
   :global(.sthemer-light) button,
   :global(.sthemer-dark) :global(.sthemer-light) button,
   :global(.sthemer-light) :global(.sthemer-dark) :global(.sthemer-light) button {
      background-color: black;
      color: white;
   }
   ```

### Server-Side Rendering (SSR)

`sthemer` also works with your SvelteKit projects that perform server-side rendering.

> Note: this currently is only supported in Chrome >= 93. The feature was not added yet for [Firefox](https://github.com/mozilla/standards-positions/issues/526) and [Safari](https://lists.webkit.org/pipermail/webkit-dev/2021-May/031856.html).

If you want to use the **[`inverted`](#inverted)** strategy at the root level or the **[`auto`](#auto)** strategy, you need to make a small adjustments to your SvelteKit project.

By default the server doesn't know what color scheme the user is using. To get that information the server has to respond with some custom HTTP headers. The browser then performs the request again with the information about the preferred color scheme.

`sthemer` already provides this functionality and you just have to connect it to your SvelteKit project:

-  if you don't have a _[hooks.server.js](https://kit.svelte.dev/docs/hooks#server-hooks)_ file yet, create one with the following content:

   ```ts
   export { handle } from 'sthemer/hooks'
   ```

-  or if you already have a _[hooks.server.js](https://kit.svelte.dev/docs/hooks#server-hooks)_ file, add following lines to the top of the `handle` function:

   ```diff
   +import { setupSthemer } from 'sthemer/hooks'

   /** @type {import('@sveltejs/kit').Handle} */
   export async function handle({ event, resolve }) {
   +   const sthemerResponse = setupSthemer(event)
   +   if (sthemerResponse) return sthemerResponse

      // your custom logic goes here

      return await resolve(event)
   }
   ```

## Sponsors

[Become a sponsor :heart:](https://github.com/sponsors/ivanhofer) if you want to support my open source contributions.

<p align="center">
   <a href="https://cdn.jsdelivr.net/gh/ivanhofer/sponsors/sponsorkit/sponsors.svg" title="ivanhofer's sponsors">
      <img src="https://cdn.jsdelivr.net/gh/ivanhofer/sponsors/sponsorkit/sponsors.svg" alt="ivanhofer's sponsors" />
   </a>
</p>

<p align="center">
   Thanks for sponsoring my open source work!
</p>

## FAQs

### Do I need this library?

Probably not, but `sthemer` offers everything you could potentially need and can handle edge-cases like [`SSR`](#server-side-rendering-ssr) and [nesting](#nested-schemes) for you.
You can also just take a look at the source code and take the parts you are interested in without using the full library.

### Why should I specify the variants in each component instead of just replacing the color variables?

Instead of writing your components like this:

```scss
:root {
   --c-dark-primary: #212121;
   --c-dark-secondary: #303030;
   --c-dark-tertiary: #424242;
   --c-light-primary: #fafafa;
   --c-light-secondary: #f5f5f5;
   --c-light-tertiary: #e0e0e0;
}

button {
   color: var(--c);
   background-color: var(--c-bg);
   border-color: var(--c-border);

   &:hover {
      background-color: var(--c-bg--hover);
   }

   &.on-dark {
      --c: var(--c-dark-primary);
      --c-bg: var(--c-light-secondary);
      --c-border: var(--c-light-tertiary);

      &:hover {
         --c-bg--hover: var(--c-light-primary);
      }
   }

   &.on-light {
      --c: var(--c-light-primary);
      --c-bg: var(--c-dark-secondary);
      --c-border: var(--c-dark-tertiary);

      &:hover {
         --c-bg--hover: var(--c-dark-primary);
      }
   }
}
```

you could also use the following approach:

```scss
.dark-mode {
   --c-primary: #212121;
   --c-secondary: #303030;
   --c-tertiary: #424242;
   --c-primary-inverted: #fafafa;
   --c-secondary-inverted: #f5f5f5;
   --c-tertiary-inverted: #e0e0e0;
}

.light-mode {
   --c-primary: #fafafa;
   --c-secondary: #f5f5f5;
   --c-tertiary: #e0e0e0;
   --c-primary-inverted: #212121;
   --c-secondary-inverted: #303030;
   --c-tertiary-inverted: #424242;
}

button {
   color: var(--c-primary);
   background-color: var(--c-secondary-inverted);
   border-color: var(--c-tertiary-inverted);

   &:hover {
      background-color: var(--c-primary-inverted);
   }
}
```

But you probably shouldn't do that. There are a few reasons why you should use the approach that `sthemer` provides:

1. It makes it easier to reason about how the component changes its appearance based on the color scheme.\
   At first glance this may sound not so important. And it requires you to also write more code. But in the long run you will benefit from it. Not having to jump around different files to make a color adjustment will make your code more readable and easier to maintain.

2. You probably need to vary from the variables you define at the root in some edge cases which will become hard to implement when you base your theming on pre-existing variables.\
   The border color on the dark button looks a bit odd. Maybe we should try to use `--c-primary-inverted`, but we want to keep `--c-tertiary-inverted` for the light button. How would you do that? You would probably need to define a new variable called `--c-button-border` and a few weeks later you will have 20+ variables defined at the root level, that are decoupled from their components and only get used a single time for a specific component.

### Why do I have to manually specify multiple levels of nesting?

Nesting is a feature that probably won't get used by most projects. Nesting produces more code, so it is disabled per default (see also next question). If you want to use it, [you can enable it](#nested-schemes) easily.

### Why is the generated CSS so big when using multiple levels of nesting?

The more levels of nesting you are using, the longer the required CSS selector is and so the file size of the resulting CSS will be larger. But It will not account that much to the amount of data an user has to download. Modern browsers and tools have good support for [gzip](https://www.gnu.org/software/gzip/) compression. Because those selectors will look quite similar, gzip compression will perform great and reduce the size.

### Why does the scheme class not get applied to the HTML tag?

You probably will never need it. You can wrap the root of your application with the `Sthemer` and define your styles there. This approach also makes it possible to use [nested schemes](#nested-schemes) in a consistent way.
