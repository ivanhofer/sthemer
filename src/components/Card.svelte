<script lang="ts">
	import Sthemer from 'sthemer/Sthemer.svelte'
</script>

<div class="card">
	<Sthemer strategy="inverted">
		<slot />
	</Sthemer>
</div>

<style lang="scss">
	.card {
		padding: 30px;
		border-radius: 20px;
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 15px;
		transition: background-color 0.5s, color 0.5s;
		background-color: var(--c-bg);
		color: var(--c);

		@include on-light {
			--c-bg: var(--c-dark-secondary);
			--c: var(--c-light-primary);
		}

		@include on-dark {
			--c-bg: var(--c-light-secondary);
			--c: var(--c-dark-primary);
		}
	}
</style>
