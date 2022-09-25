<slot />

<style lang="scss" global>
	@import '../../styles/global';

	p {
		max-width: 72ch;
	}

	button:first-child {
		margin-bottom: 30px;
	}

	button:last-child {
		margin-top: 30px;
	}

	.background {
		&-light,
		&-dark {
			height: 100vh;
			padding: 2rem;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		&-light {
			background-color: white;
		}

		&-dark {
			background-color: var(--c-dark-secondary);
		}
	}
</style>
