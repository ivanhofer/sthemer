import { browser } from '$app/env'
import { getContext, setContext } from 'svelte'
import { noop } from 'svelte/internal'
import { derived, writable, type Readable, type Writable } from 'svelte/store'

const KEY = 'sthemer'

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

export const setFallbackScheme = (schema: string | null) => (prefersDarkFallback = schema === 'dark')

// ------------------------------------------------------------------------------------------------

export const getInvertedScheme = (scheme: SthemerScheme): SthemerScheme => (scheme === 'dark' ? 'light' : 'dark')

export const getSthemerContext = () => {
	const context = getContext<SthemerContext>(KEY)
	if (context) return context

	throw Error('You need to wrap your code in a <Sthemer> component')
}

export const createSthemerContext = (strategy: SthemerStrategy = 'auto') => {
	const mediaQueryPrefersDark = browser
		? window.matchMedia('(prefers-color-scheme: dark)')
		: { matches: prefersDarkFallback, addEventListener: noop, removeEventListener: noop }

	const getSchemeFromStrategy = (strategy: SthemerStrategy): SthemerScheme => {
		if (sthemerSchemes.includes(strategy as SthemerScheme)) return strategy as SthemerScheme

		const prefersDarkScheme = mediaQueryPrefersDark.matches
		return prefersDarkScheme ? 'dark' : 'light'
	}

	const autoStore = writable<SthemerScheme>(mediaQueryPrefersDark.matches ? 'dark' : 'light')

	const strategyStore = writable<SthemerStrategy>(strategy)

	const parentContext = getContext<SthemerContext>(KEY)

	const changeScheme = () => autoStore.set(mediaQueryPrefersDark.matches ? 'dark' : 'light')

	const schemeStore = derived<
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

	setContext<SthemerContext>(KEY, context)

	return context
}
