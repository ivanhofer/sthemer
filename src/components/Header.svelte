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
		background-color: var(--c-bg);

		@include on-dark {
			--c-bg: var(--c-dark-tertiary);
		}

		@include on-light {
			--c-bg: var(--c-light-tertiary);
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
		color: var(--c);

		@include on-dark {
			--c: var(--c-light-primary);
		}

		@include on-light {
			--c: var(--c-dark-primary);
		}
	}
</style>
