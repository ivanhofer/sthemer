<script lang="ts">
	import Sthemer from 'sthemer/Sthemer.svelte'
</script>

<Sthemer>
	<div class="content">
		<slot />
	</div>
</Sthemer>

<style lang="scss">
	:global {
		@import '../styles/global';
	}

	.content {
		padding-block-start: var(--height-header);
		min-height: 100vh;
		transition: background-color 0.5s, color 0.5s;

		@include on-dark {
			background-color: var(--c-dark-primary);
			color: var(--c-light-primary);
		}

		@include on-light {
			background-color: var(--c-light-primary);
			color: var(--c-dark-primary);
		}
	}
</style>
