<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Card from '$components/Card.svelte'
	import Sthemer from 'sthemer/Sthemer.svelte'

	const gotoHome = () => goto('/')
</script>

<Sthemer strategy="dark" let:scheme>
	<div class="background-{scheme}">
		<Card>
			<h1>
				Strategy <pre>dark</pre>
			</h1>

			<p>Sthemer can also be used for nesting components.</p>

			<Card>
				<p>Here a card is rendered inside another card.</p>

				<Card>
					<p>And inside another card.</p>

					<Card>
						<p>
							This works because the Card itslef gets wrapped with a Sthemer component and inverts the color
							scheme.
						</p>
					</Card>
				</Card>
			</Card>

			<Button on:click={gotoHome}>back to home</Button>
		</Card>
	</div>
</Sthemer>
