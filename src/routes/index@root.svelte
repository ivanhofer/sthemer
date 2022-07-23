<script lang="ts">
	import Footer from '$components/Footer.svelte'
	import Header from '$components/Header.svelte'
	import StrategySelection from '$components/StrategySelection.svelte'
</script>

<div>
	<Header>
		<StrategySelection />
	</Header>

	<main />

	<Footer />
</div>

<style lang="scss">
	main {
		padding: 36px;
	}
</style>
