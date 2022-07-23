import { setFallbackScheme } from '$lib/context'
import type { Handle, RequestEvent } from '@sveltejs/kit'
import { UAParser } from 'ua-parser-js'

const browserSupportsSecChHeaders = (headers: Headers): boolean => {
	const { engine } = UAParser(headers.get('user-agent') || '')

	// https://github.com/Fyrd/caniuse/issues/6252
	if (engine.name === 'Blink' && parseInt(engine.version || '') >= 93) return true

	// Firefox Support: https://github.com/mozilla/standards-positions/issues/526
	// Safari Support: https://lists.webkit.org/pipermail/webkit-dev/2021-May/031856.html

	return false
}

export const setupSthemer = ({ request }: RequestEvent): Response | void => {
	if (!browserSupportsSecChHeaders(request.headers)) return

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
