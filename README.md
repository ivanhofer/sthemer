# :first_quarter_moon: sthemer

**A lightweight yet powerful solution to support multiple color schemes in your Svelte/SvelteKit application.**

## Advantages

:baby_chick: lightweight (<1kb)\
:muscle: powerful\
:ok_hand: easy to use\
:running: fast and efficient\
:stopwatch: supports SSR (Server-Side Rendering)\
:nesting_dolls: nested schemes \
:safety_vest: best TypeScript support (works with JavaScript projects too) \
:no_entry: no external dependencies

<!-- list of supported emojis on GitHub: https://github.com/ikatyang/emoji-cheat-sheet -->

<!-- TODO: link live demo -->

## Getting Started

1. :keyboard: Install `sthemer` as a dependency.

   ```bash
   npm install sthemer
   ```

2. :wrench: Add the mixin globally.

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
      import Sthemer from 'sthemer'
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

         // theses styles will apply when the component gets rendered on a 'dark' wrapper
         @include on-dark {
            background-color: white;
            color: black;
         }

         // theses styles will apply when the component gets rendered on a 'light' wrapper
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

### supported CSS preprocessors

`sthemer` works with the most used CSS preprocessors to provide you with a good user experience. It is recommended to use one of the following options.

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
         // theses styles will apply when the component gets rendered on a 'dark' wrapper
         @include on-dark
            background-color: white
            color: black
   
         // theses styles will apply when the component gets rendered on a 'light' wrapper
         @include on-light
            background-color: black
            color: white
   </style>
   ```

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
         // theses styles will apply when the component gets rendered on a 'dark' wrapper
         @include on-dark {
            background-color: white;
            color: black;
         }

         // theses styles will apply when the component gets rendered on a 'light' wrapper
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
         // theses styles will apply when the component gets rendered on a 'dark' wrapper
         .on-dark({
            background-color: white;
            color: black;
         });

         // theses styles will apply when the component gets rendered on a 'light' wrapper
         .on-light({
            background-color: black;
            color: white;
         });
      }
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
      // theses styles will apply when the component gets rendered on a 'dark' wrapper
      :global(.sthemer-dark) button {
         background-color: white;
         color: black;
      }

      // theses styles will apply when the component gets rendered on a 'light' wrapper
      :global(.sthemer-dark) button {
         background-color: black;
         color: white;
      }
   </style>
   ```

   > If you want to support multiple [levels of nesting](#nested-schemes), you need to manually add them if you are not using a preprocessor like [`sass`](#sass), [`scss`](#scss) or [`less`](#less).

   ```css
   // theses styles will apply when the component gets rendered on a 'dark' wrapper
   // (supports 3 levels of nesting)
   :global(.sthemer-dark) button,
   :global(.sthemer-light) :global(.sthemer-dark) button,
   :global(.sthemer-dark) :global(.sthemer-light) :global(.sthemer-dark) button {
      background-color: white;
      color: black;
   }

   // theses styles will apply when the component gets rendered on a 'light' wrapper
   // (supports 3 levels of nesting)
   :global(.sthemer-light) button,
   :global(.sthemer-dark) :global(.sthemer-light) button,
   :global(.sthemer-light) :global(.sthemer-dark) :global(.sthemer-light) button {
      background-color: black;
      color: white;
   }
   ```

### Schemes

`sthemer` supports the [built-in color schemes](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) **'dark'** and **'light'**.

-  **light**: The user expects a light background and dark text.
-  **dark**: The user expects a dark background and light text.

### Strategies

-  #### **auto**:

   Auto-detects the user's preferred color scheme.

   The [prefers-color-scheme media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is used to determine the user's preferred color scheme.

-  #### **light**:

   Use the **light** color scheme.

-  #### **dark**:

   Use the **dark** color scheme.

-  #### **inverted**:

   Use the **inverted** color scheme.

   If used on a **light** color scheme, it will be **dark** and vice versa. Can be useful when using [nested schemes](#nested-schemes). When used at the root, it uses the inverted color scheme from the ['auto'-strategy](#auto).

### Server-Side Rendering (SSR)

TODO

### Nested Schemes

TODO

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
