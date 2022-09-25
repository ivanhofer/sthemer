<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from 'sthemer/Sthemer.svelte'

	const gotoNextExample = () => goto('/examples/04-inverted')
</script>

<Sthemer strategy="auto" let:scheme>
	<div class="background-{scheme}">
		<Card>
			<h1>
				Strategy <pre>auto</pre>
			</h1>
			<p>
				You can also auto-detect the scheme your users prefer. Each Browser and System can be set up in a way that
				tells a website what scheme it should use by default.
			</p>

			<Button on:click={gotoNextExample}>go to next example</Button>
		</Card>
	</div>
</Sthemer>
