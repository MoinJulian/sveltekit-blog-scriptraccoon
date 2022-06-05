<script>
    import { page } from "$app/stores";
    $: currentPath = $page.url.pathname;
    const pages = [
        { path: "/", name: "Home" },
        { path: "/posts", name: "Posts" },
        { path: "/about", name: "About" },
    ];
</script>

<nav>
    <ul>
        {#each pages as page}
            <li>
                <a
                    class:selected={currentPath == page.path ||
                        (page.path.length >= 2 &&
                            currentPath.includes(page.path))}
                    href={page.path}>&nbsp;{page.name}&nbsp;</a
                >
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        background-color: var(--primary-color);
        color: #fff;
        text-transform: uppercase;
        padding: 10px 0px;
        font-size: 16px;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 0;
        margin: 0;
    }

    a {
        color: #fff;
        text-underline-offset: 4px;
    }

    a.selected {
        text-decoration: underline;
    }
</style>
