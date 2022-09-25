<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from 'sthemer/Sthemer.svelte'

	const gotoNextExample = () => goto('/examples/03-auto')
</script>

<Sthemer strategy="light" let:scheme>
	<div class="background-{scheme}">
		<Card>
			<h1>
				Strategy <pre>light</pre>
			</h1>
			<p>
				Each component can be rendered on a dark or a light background. By setting the strategy on the wrapping
				component, all components will be rendered on the correct background.
			</p>

			<Button on:click={gotoNextExample}>go to next example</Button>
		</Card>
	</div>
</Sthemer>
