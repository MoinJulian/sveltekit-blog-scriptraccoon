<script>
    import { formatDate } from "$lib/util.js";
    export let metadatas;
</script>

<h2>Posts</h2>

<ol>
    {#each JSON.parse(metadatas) as metadata}
        <li>
            <p class="date">
                {formatDate(metadata.date)}
            </p>
            <h3>{metadata.title}</h3>
            <p class="summary">{metadata.summary}</p>
            <p>
                <a
                    sveltekit:prefetch
                    href="/posts/{metadata.fileName}">Read more...</a
                >
            </p>
        </li>
    {/each}
</ol>

<style>
    *:not(h2) {
        margin: 0;
        padding: 0;
    }
    ol {
        list-style-type: none;
    }

    li {
        border-bottom: 1px dashed #aaa;
        padding: 20px 0px;
    }
    h3 {
        font-size: 25px;
    }
    .date {
        color: #888;
        font-size: 16px;
    }
    .summary {
        color: #333;
        margin: 10px 0px 0px 0px;
    }
    a {
        font-size: 16px;
    }
</style>
