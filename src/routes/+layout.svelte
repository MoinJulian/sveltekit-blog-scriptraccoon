<script lang="ts">
	import "../app.css";
	import Header from "$lib/Header.svelte";
	import Nav from "$lib/Nav.svelte";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/apple-touch-icon.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon-16x16.png"
	/>
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<Header />

<Nav />

<main>
	{@render children?.()}
</main>

<style>
	main {
		max-width: 600px;
		padding: 10px;
		margin: 0 auto;
	}
</style>
