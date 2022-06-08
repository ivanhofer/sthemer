<script lang="ts">
	import Sthemer from '$lib/Sthemer.svelte'
	import Header from '$components/Header.svelte'
</script>

<Sthemer>
	<div class="content">
		<Header />

		<main>
			<slot />
		</main>
	</div>
</Sthemer>

<style lang="scss">
	:global {
		@import '../styles/reset';
		@import '../styles/variables';

		html {
			font-family: Arial, Helvetica, sans-serif;
		}

		body {
			padding-block-start: var(--height-header);
		}
	}

	.content {
		min-height: calc(100vh - var(--height-header));
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
