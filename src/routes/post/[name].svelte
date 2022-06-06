<script>
    import { formatDate } from "$lib/util.js";
    export let htmlContent;
    export let metadata;
</script>

<svelte:head>
    <title>{metadata.title}</title>
</svelte:head>

<p class="header">
    <span class="date">
        {formatDate(metadata.date)}
    </span>
    <a href="/posts">all posts</a>
</p>

{@html htmlContent}

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
