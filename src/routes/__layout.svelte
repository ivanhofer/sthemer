<script lang="ts">
	import { initSthemer } from '$lib/context'

	import Sthemer from '$lib/Sthemer.svelte'
	import { getContext, setContext } from 'svelte'
	import { derived, readable, writable } from 'svelte/store'

	initSthemer({ derived, readable, writable, getContext, setContext })
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
