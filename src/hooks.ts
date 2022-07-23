import { setupSthemer } from 'sthemer/hooks'
import { setFallbackScheme } from 'sthemer/context'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const sthemerResponse = setupSthemer(event)
	if (sthemerResponse) return sthemerResponse

	// emulate behavior without SSR
	if (event.url.pathname === '/examples/05-ssr-disabled') {
		const scheme = event.request.headers.get('Sec-CH-Prefers-Color-Scheme')
		setFallbackScheme(scheme === 'dark' ? 'light' : 'dark')
	}

	return await resolve(event)
}
