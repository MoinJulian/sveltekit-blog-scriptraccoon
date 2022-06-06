<script>
    import { formatDate } from "$lib/util.js";
    export let htmlContent;
    export let metadata;
</script>

<p class="date">
    {formatDate(metadata.date)}
</p>

{@html htmlContent}

<style>
    .date {
        color: var(--gray-color);
        margin-bottom: -20px;
    }
</style>
