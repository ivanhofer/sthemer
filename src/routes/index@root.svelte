<script lang="ts">
	import Footer from '$components/Footer.svelte'
	import Header from '$components/Header.svelte'
	import StrategySelection from '$components/StrategySelection.svelte'
</script>

<Header>
	<StrategySelection />
</Header>

<main class="narrow">
	<h2>A lightweight yet powerful solution to support multiple color schemes in your Svelte/SvelteKit application.</h2>

	<h1>
		<pre>sthemer</pre>
		Examples
	</h1>

	<ul>
		<li>
			<a href="/examples/01-dark">
				<pre>dark</pre>
				strategy
			</a>
		</li>
		<li>
			<a href="/examples/02-light">
				<pre>light</pre>
				strategy
			</a>
		</li>
		<li>
			<a href="/examples/03-auto">
				<pre>auto</pre>
				strategy
			</a>
		</li>
		<li>
			<a href="/examples/04-inverted">
				<pre>inverted</pre>
				strategy
			</a>
		</li>
		<li>
			<a href="/examples/05-ssr-disabled">without Server Side Rendering (SSR)</a>
		</li>
		<li>
			<a href="/examples/06-ssr">with Server Side Rendering (SSR)</a>
		</li>
		<li>
			<a href="/examples/07-programmatic-access">programmatic access</a>
		</li>
		<li>
			<a href="/examples/08-nesting">nesting</a>
		</li>
	</ul>
</main>

<Footer />

<style lang="scss">
	main {
		padding: 48px 36px;
	}

	h2 {
		font-size: 24px;
		margin-block-end: 36px;
	}

	h1 {
		font-size: 30px;
	}

	ul {
		font-size: 20px;
		line-height: 1.7;
		margin: 10px 0;
		padding-inline-start: 0;
		list-style-type: none;
	}

	li::before {
		content: '➔ ';
	}

	a {
		text-decoration: none;
		border-bottom: 2px solid;
		transition: border-color 0.5s, color 0.5s;

		@include on-light {
			color: var(--c-dark-tertiary);
		}

		@include on-dark {
			color: var(--c-light-tertiary);
		}
	}
</style>
