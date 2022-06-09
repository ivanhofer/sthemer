<header>
	<div class="inner narrow">
		<a href="/" class="logo">🌓 sthemer</a>
		<slot />
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: var(--height-header);

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

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		text-decoration: none;
		font-family: monospace;
		font-size: 24px;
		line-height: 1;

		@include on-dark {
			color: var(--c-light-primary);
		}

		@include on-light {
			color: var(--c-dark-primary);
		}
	}
</style>
