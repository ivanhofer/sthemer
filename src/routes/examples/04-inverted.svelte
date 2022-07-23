<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from 'sthemer/Sthemer.svelte'

	const gotoNextExample = () => goto('/examples/05-ssr-disabled')
</script>

<Sthemer strategy="inverted" let:scheme>
	<div class="background-{scheme}">
		<Card>
			<h1>
				Strategy <pre>inverted</pre>
			</h1>
			<p>You can also invert the selection the user has set.</p>

			<Button on:click={gotoNextExample}>go to next example</Button>
		</Card>
	</div>
</Sthemer>
