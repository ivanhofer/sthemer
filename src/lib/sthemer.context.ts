import { browser } from '$app/env'
import { getContext, setContext } from 'svelte'
import { noop } from 'svelte/internal'
import { writable, type Readable } from 'svelte/store'

const supportedSchemes = ['dark', 'light'] as const

export type ColorScheme = typeof supportedSchemes[number]

export type Strategy = ColorScheme | 'auto' | 'inverted'

type SthemerContext = Readable<ColorScheme> & {
	changeScheme: (scheme: ColorScheme) => void
	changeStrategy: (strategy: Strategy) => void
}

const KEY = {}

// ------------------------------------------------------------------------------------------------

let prefersDarkFallback = false

export const setFallbackScheme = (schema: string | null) => (prefersDarkFallback = schema === 'dark')

const getInvertedScheme = (scheme: ColorScheme): ColorScheme => (scheme === 'dark' ? 'light' : 'dark')

export const createSthemerContext = (strategy: Strategy = 'auto') => {
	const mediaQueryPrefersDark = browser
		? window.matchMedia('(prefers-color-scheme: dark)')
		: { matches: prefersDarkFallback, addEventListener: noop, removeEventListener: noop }

	const getSchemeFromStrategy = (strategy: Strategy): ColorScheme => {
		if (supportedSchemes.includes(strategy as ColorScheme)) return strategy as ColorScheme

		const prefersDarkScheme = mediaQueryPrefersDark.matches
		const preferredScheme = prefersDarkScheme ? 'dark' : 'light'

		return strategy === 'inverted' ? getInvertedScheme(preferredScheme) : preferredScheme
	}

	let currentUsedStrategy = strategy
	let currentUsedScheme = getSchemeFromStrategy(currentUsedStrategy)

	const changeScheme = () => scheme.changeScheme(mediaQueryPrefersDark.matches ? 'dark' : 'light')

	const addEventListener = () =>
		currentUsedStrategy === 'auto' && mediaQueryPrefersDark.addEventListener('change', changeScheme)
	const removeEventListener = () =>
		currentUsedStrategy === 'auto' && mediaQueryPrefersDark.removeEventListener('change', changeScheme)

	const { set, subscribe } = writable<ColorScheme>(currentUsedScheme)
	const scheme = {
		subscribe,
		changeScheme: (scheme: ColorScheme) => {
			if (currentUsedScheme === scheme) return

			currentUsedScheme = scheme
			set(scheme)
		},
		changeStrategy: (strategy: Strategy) => {
			if (currentUsedStrategy === strategy) return

			removeEventListener()
			currentUsedStrategy = strategy
			addEventListener()
			set(getSchemeFromStrategy(currentUsedStrategy))
		},
	}

	const parentScheme: SthemerContext = getContext<SthemerContext>(KEY) || writable(currentUsedScheme)
	const unsubscribeFromParentScheme = parentScheme.subscribe((parentScheme) => {
		if (currentUsedStrategy === 'inverted') {
			const invertedScheme = getInvertedScheme(parentScheme)
			if (currentUsedScheme === invertedScheme) return

			currentUsedScheme = invertedScheme
			scheme.changeScheme(currentUsedScheme)
		}
	})

	addEventListener()

	setContext<SthemerContext>(KEY, scheme)

	return {
		scheme,
		unsubscribeFromParentScheme,
	}
}
