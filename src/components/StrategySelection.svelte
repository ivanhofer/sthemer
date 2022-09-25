<script lang="ts">
	import { sthemerStrategies, getSthemerContext } from 'sthemer/context'

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
		background-color: var(--c-bg);
		color: var(--c);

		@include on-dark {
			--c-bg: var(--c-dark-secondary);
			--c: var(--c-light-primary);
		}

		@include on-light {
			--c-bg: var(--c-light-secondary);
			--c: var(--c-dark-primary);
		}
	}
</style>
