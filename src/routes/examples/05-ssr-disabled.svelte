<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from 'sthemer/Sthemer.svelte'

	const gotoNextExample = () => goto('/examples/06-ssr')
</script>

<Sthemer strategy="auto" let:scheme>
	<div class="background-{scheme}">
		<Card>
			<h1>
				Strategy <pre>auto</pre>
			</h1>
			<h2>SSR disabled</h2>
			<p>
				Try to reload the page. You will see that the background-color changes. That's because usually the scheme is
				only used on the client. But SvelteKit can also be used to render a page on the server. But the server
				usually doesn't know about the user-preferences. So it could be that the server sends the page with the
				wrong background-color and then the client corrects it.
			</p>

			<Button on:click={gotoNextExample}>go to next example</Button>
		</Card>
	</div>
</Sthemer>
