import { setFallbackScheme } from '$lib/sthemer.context'
import type { Handle, RequestEvent } from '@sveltejs/kit'

export const setupSthemer = ({ request }: RequestEvent): Response | void => {
	if (!request.headers.has('Sec-CH-Prefers-Color-Scheme')) {
		return new Response(null, {
			headers: new Headers({
				'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
				Vary: 'Sec-CH-Prefers-Color-Scheme',
				'Critical-CH': 'Sec-CH-Prefers-Color-Scheme',
			}),
		})
	} else {
		setFallbackScheme(request.headers.get('Sec-CH-Prefers-Color-Scheme'))
	}
}

export const handle: Handle = async ({ event, resolve }) => {
	const sthemerResponse = setupSthemer(event)
	if (sthemerResponse) return sthemerResponse

	return resolve(event)
}
