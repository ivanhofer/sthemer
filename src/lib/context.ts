import type { getContext, setContext } from 'svelte'
import type { derived, readable, writable, Readable, Writable } from 'svelte/store'

const KEY = 'sthemer'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

let _getContext: typeof getContext
let _setContext: typeof setContext
let _derived: typeof derived
let _readable: typeof readable
let _writable: typeof writable

type InitSthemer = {
	getContext: typeof getContext
	setContext: typeof setContext
	derived: typeof derived
	readable: typeof readable
	writable: typeof writable
}

export const initSthemer = ({ getContext, setContext, derived, readable, writable }: InitSthemer) => {
	_getContext = getContext
	_setContext = setContext
	_derived = derived
	_readable = readable
	_writable = writable
}

// ------------------------------------------------------------------------------------------------

export const sthemerSchemes = ['dark', 'light'] as const
export type SthemerScheme = typeof sthemerSchemes[number]

export const sthemerStrategies = [...sthemerSchemes, 'auto', 'inverted'] as const
export type SthemerStrategy = typeof sthemerStrategies[number]

type SthemerContext = {
	strategy: Writable<SthemerStrategy>
	scheme: Readable<SthemerScheme>
}

// ------------------------------------------------------------------------------------------------

let prefersDarkFallback = false

const supportsMatchMedia = typeof window !== 'undefined' && window.matchMedia

export const setFallbackScheme = (schema: string | null) => (prefersDarkFallback = schema === 'dark')

// ------------------------------------------------------------------------------------------------

export const getInvertedScheme = (scheme: SthemerScheme): SthemerScheme => (scheme === 'dark' ? 'light' : 'dark')

export const getSthemerContext = () =>
	_getContext<SthemerContext>(KEY) || { strategy: _writable('auto'), scheme: _readable('light') }

export const createSthemerContext = (strategy: SthemerStrategy = 'auto') => {
	const mediaQueryPrefersDark = supportsMatchMedia
		? window.matchMedia('(prefers-color-scheme: dark)')
		: { matches: prefersDarkFallback, addEventListener: noop, removeEventListener: noop }

	const getSchemeFromStrategy = (strategy: SthemerStrategy): SthemerScheme => {
		if (sthemerSchemes.includes(strategy as SthemerScheme)) return strategy as SthemerScheme

		const prefersDarkScheme = mediaQueryPrefersDark.matches
		return prefersDarkScheme ? 'dark' : 'light'
	}

	const autoStore = _writable<SthemerScheme>(mediaQueryPrefersDark.matches ? 'dark' : 'light')

	const strategyStore = _writable<SthemerStrategy>(strategy)

	const parentContext = _getContext<SthemerContext>(KEY)

	const changeScheme = () => autoStore.set(mediaQueryPrefersDark.matches ? 'dark' : 'light')

	const schemeStore = _derived<
		[Writable<SthemerStrategy>, Writable<SthemerScheme>, Readable<SthemerScheme>],
		SthemerScheme
	>([strategyStore, autoStore, parentContext?.scheme], ([strategy, autoValue, parentScheme]) => {
		if (strategy === 'inverted') {
			return getInvertedScheme(parentScheme || autoValue)
		}

		if (strategy === 'auto') {
			mediaQueryPrefersDark.addEventListener('change', changeScheme)
			return autoValue
		} else {
			mediaQueryPrefersDark.removeEventListener('change', changeScheme)
		}

		return getSchemeFromStrategy(strategy)
	})

	const context = {
		strategy: strategyStore,
		scheme: schemeStore,
	}

	_setContext<SthemerContext>(KEY, context)

	return context
}
