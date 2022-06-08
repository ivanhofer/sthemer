<script lang="ts">
	import { createSthemerContext, type SthemerStrategy } from '$lib/context'

	export let strategy: SthemerStrategy = 'auto'

	const { scheme, strategy: strategyStore } = createSthemerContext(strategy)

	$: $strategyStore = strategy
</script>

<div class="sthemer-{$scheme}" style="display: contents">
	<slot scheme={$scheme} />
</div>
