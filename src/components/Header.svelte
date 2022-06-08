<script>
	import StrategySelection from './StrategySelection.svelte'
</script>

<header>
	<div class="logo">🌓 sthemer</div>
	<StrategySelection />
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: var(--height-header);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24px;
		backdrop-filter: blur(3px);
		transition: background-color 0.5s;

		@include on-dark {
			background-color: var(--c-dark-tertiary);
		}

		@include on-light {
			background-color: var(--c-light-tertiary);
		}
	}

	.logo {
		font-family: monospace;
		font-size: 24px;
		line-height: 1;
	}
</style>
