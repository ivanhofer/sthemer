<script>
	import Sthemer from '$lib/Sthemer.svelte'
</script>

<Sthemer>
	<main>
		<slot />
	</main>
</Sthemer>

<style lang="scss">
	:global {
		@import '../styles/reset';
	}

	main {
		min-height: 100vh;

		@include on-dark {
			background: #000;
		}

		@include on-light {
			background: #fff;
		}
	}
</style>
