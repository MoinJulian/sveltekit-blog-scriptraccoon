<script>
    import dateFormat from "dateformat";
    export let htmlContent;
    export let metadata;
</script>

<p class="date">
    {dateFormat(metadata.date, "dd.mm.yyyy")}
</p>

{@html htmlContent}

<style>
    .date {
        color: #666;
        margin-bottom: -20px;
    }
</style>
