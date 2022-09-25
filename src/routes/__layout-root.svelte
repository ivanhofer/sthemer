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
		--c-bg: var(--c-bg);
		--c: var(--c);

		@include on-dark {
			--c-bg: var(--c-dark-primary);
			--c: var(--c-light-primary);
		}

		@include on-light {
			--c-bg: var(--c-light-primary);
			--c: var(--c-dark-primary);
		}
	}
</style>
