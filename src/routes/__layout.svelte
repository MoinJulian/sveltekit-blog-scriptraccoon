<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";
    import Nav from "$lib/Nav.svelte";
</script>

<Header />

<Nav />

<main>
    <slot />
</main>

<style>
    main {
        max-width: 600px;
        padding: 10px;
        margin: 0 auto;
    }

    :global(main > h2) {
        font-size: 30px;
        margin: 10px 0px;
    }
</style>
