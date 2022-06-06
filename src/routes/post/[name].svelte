<script>
    import { formatDate } from "$lib/util.js";
    export let htmlContent;
    export let attributes;
</script>

<svelte:head>
    <title>{attributes.title}</title>
</svelte:head>

<p class="header">
    <span class="date">
        {formatDate(attributes.date)}
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
