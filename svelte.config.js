import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		less: {
			prependData: `@import 'src/lib/mixins';`,
		},
		sass: {
			prependData: `@import 'src/lib/mixins'`,
		},
		scss: {
			prependData: `@import 'src/lib/mixins';`,
		},
	}),

	kit: {
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$components: resolve('./src/components'),
				},
			},
		},
	},
}

export default config
