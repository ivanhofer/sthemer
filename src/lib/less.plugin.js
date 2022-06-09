/** @typedef { import('./context').SthemerScheme } SthemerScheme */

/**
 * @param { SthemerScheme } $scheme
 * @returns { SthemerScheme }
 */
const inverseSchema = ($scheme) => {
	if ($scheme === 'dark') {
		return 'light'
	} else {
		return 'dark'
	}
}

/**
 * @param { SthemerScheme } $scheme
 * @returns { string }
 */
const getSchemeSelector = ($scheme) => {
	if ($scheme === 'dark') {
		return ':global(.sthemer-dark)'
	} else {
		return ':global(.sthemer-light)'
	}
}

/**
 * @param { SthemerScheme } $scheme
 * @param { number } $levels
 * @returns { string }
 */
const getSelector = ($scheme, $levels) => {
	if ($levels < 1) {
		$levels = 1
	} else if ($levels > 100) {
		$levels = 100
	}

	let $selector = '&'
	let $combinedSelector = ''

	for (let $i = 1; $i <= $levels; $i++) {
		$selector = getSchemeSelector($scheme) + ' ' + $selector
		$scheme = inverseSchema($scheme)

		if ($combinedSelector === '') {
			$combinedSelector = $selector
		} else {
			$combinedSelector = $combinedSelector + ', ' + $selector
		}
	}

	return $combinedSelector
}

module.exports = {
	/**
	 * @type { (
	 * 	less: unknown,
	 * 	pluginManager: unknown,
	 * 	functions: {
	 * 		add: (
	 * 			name: string,
	 * 			func: ($scheme: { value: SthemerScheme }, $levels: { value: number} ) => string
	 * 		) => void
	 * 	}
	 * ) => void }
	 */
	install: (_less, _pluginManager, functions) => {
		functions.add('sthemer', ($scheme, $levels) => getSelector($scheme.value, $levels.value))
	},
}
