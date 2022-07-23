<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from '$lib/Sthemer.svelte'
	import ToggleButton from '$components/ToggleButton.svelte'

	const gotoNextExample = () => goto('/examples/08-nesting')
</script>

<Sthemer strategy="light" let:scheme>
	<div class="background-{scheme}">
		<ToggleButton />

		<Card>
			<h1>
				Strategy <pre>{scheme}</pre>
			</h1>

			<p>
				You can also use code to control the used strategy. The ToggleButton can be inserted everywhere and controls
				the behavior of the upper Sthemer component
			</p>

			<Button on:click={gotoNextExample}>go to next example</Button>
		</Card>
	</div>
</Sthemer>
