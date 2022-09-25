<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from 'sthemer/Sthemer.svelte'

	const gotoNextExample = () => goto('/examples/07-programmatic-access')
</script>

<Sthemer strategy="auto" let:scheme>
	<div class="background-{scheme}">
		<Card>
			<h1>
				Strategy <pre>auto</pre>
			</h1>
			<h2>SSR enabled</h2>
			<p>
				Try to reload the page again. You will see that the background-color does not change anymore. This
				implementation can detect the user-preferences and use the correct scheme.
			</p>

			<Button on:click={gotoNextExample}>go to next example</Button>
		</Card>
	</div>
</Sthemer>
