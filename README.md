# :first_quarter_moon: sthemer

**A lightweight yet powerful solution to support multiple color schemes in your Svelte/SvelteKit application.**

## Advantages

:baby_chick: lightweight (<1kb)\
:muscle: powerful\
:ok_hand: easy to use\
:running: fast and efficient\
:stopwatch: supports SSR (Server-Side Rendering)\
:safety_vest: best TypeScript support (works with JavaScript project too) \
:no_entry: no external dependencies

<!-- list of supported emojis on GitHub: https://github.com/ikatyang/emoji-cheat-sheet -->

<!-- TODO: link live demo -->

## Usage

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

   > This example uses [`scss`](https://sass-lang.com/documentation/syntax#scss) as css preprocessor. Other formats are also supported. See the [supported CSS preprocessors](+supported-css-preprocessors) section for more details.

3. :file_folder: Wrap your code with the `Sthemer.svelte` component and define your preferred [strategy](#strategies).

   _App.svelte_

   ```svelte
   <script>
   	import Sthemer from 'sthemer'
   </script>

   <Sthemer strategy="auto">
   	<!-- your application goes here -->
   </Sthemer>

   <style lang="scss">
   	p {
   		@include on-dark {
   			color: red;
   		}

   		@include on-light {
   			color: green;
   		}
   	}
   </style>
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

### supported CSS preprocessors

-  [sass](https://sass-lang.com/)
-  [scss](https://sass-lang.com/documentation/syntax#scss)
-  [less](https://lesscss.org/)
-  css (no preprocessor)

### Schemes

-  **light**
-  **dark**

### Strategies

-  **auto**
-  **light**
-  **dark**
-  **inverted**

### Server-Side Rendering (SSR)

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
