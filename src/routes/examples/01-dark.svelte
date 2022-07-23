<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from 'sthemer/Sthemer.svelte'

	const gotoNextExample = () => goto('/examples/02-light')
</script>

<Sthemer strategy="dark" let:scheme>
	<div class="background-{scheme}">
		<Card>
			<h1>
				Strategy <pre>dark</pre>
			</h1>

			<p>
				Take a look at the code. It's pretty simple. You just have to define a strategy and pass it to the Sthemer
				component. The components then will render the corrrect version. No neet to pass a property to all
				components.
			</p>

			<Button on:click={gotoNextExample}>go to next example</Button>
		</Card>
	</div>
</Sthemer>
