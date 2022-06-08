<script lang="ts">
	import { sthemerStrategies, getSthemerContext } from '$lib/context'

	const { strategy: strategyStore } = getSthemerContext()
</script>

<select bind:value={$strategyStore}>
	{#each sthemerStrategies as strategy}
		<option value={strategy} selected={strategy === $strategyStore}>
			{strategy}
		</option>
	{/each}
</select>

<style lang="scss">
	select {
		border-radius: 4px;
		padding: 4px 8px;
		transition: background-color 0.5s, color 0.5s;

		@include on-dark {
			background-color: var(--c-dark-secondary);
			color: var(--c-light-primary);
		}

		@include on-light {
			background-color: var(--c-light-secondary);
			color: var(--c-dark-primary);
		}
	}
</style>
