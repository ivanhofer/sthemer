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

		@include on-light {
			background-color: var(--c-dark-secondary);
			color: var(--c-light-primary);
		}

		@include on-dark {
			background-color: var(--c-light-secondary);
			color: var(--c-dark-primary);
		}
	}
</style>
