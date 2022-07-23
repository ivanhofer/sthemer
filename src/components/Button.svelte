<button on:click>
	<slot />
</button>

<style lang="scss">
	button {
		border: 2px solid;
		border-radius: 10px;
		padding: 10px 15px;
		background-color: var(--bg);
		color: var(--c);
		transition: background-color 0.5s, color 0.5s;

		&:hover {
			background-color: var(--bg-hover);
		}

		@include on-light {
			--bg: var(--c-dark-secondary);
			--bg-hover: var(--c-dark-tertiary);
			--c: var(--c-light-primary);
		}

		@include on-dark {
			--bg: var(--c-light-secondary);
			--bg-hover: var(--c-light-tertiary);
			--c: var(--c-dark-primary);
		}
	}
</style>
