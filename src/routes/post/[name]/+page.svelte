<script lang="ts">
	import { formatDate } from "$lib/util";
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.attributes.title}</title>
</svelte:head>

<p class="header">
	<span class="date">
		{formatDate(data.attributes.date)}
	</span>
	<a href="/posts">all posts</a>
</p>

{@html data.htmlContent}

<style>
	.date {
		color: var(--gray-color);
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
