<script lang="ts">
	import { getSthemerContext } from 'sthemer/context'
	import Button from '$components/Button.svelte'

	const { strategy } = getSthemerContext()

	const toggleStrategy = () => {
		$strategy = $strategy === 'dark' ? 'light' : 'dark'
	}
</script>

<Button on:click={toggleStrategy}>toggle stragegy</Button>
