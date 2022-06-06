<script lang="ts">
	import { onDestroy } from 'svelte'

	import { createSthemerContext, type Strategy } from './sthemer.context'

	export let strategy: Strategy = 'auto'

	const { scheme, unsubscribeFromParentScheme } = createSthemerContext(strategy)

	$: scheme.changeStrategy(strategy)

	onDestroy(unsubscribeFromParentScheme)
</script>

<div class="sthemer-{$scheme}" style="display: contents">
	<slot scheme={$scheme} />
</div>
