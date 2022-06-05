# SvelteKit Blog

Link: https://blog-sveltekit.netlify.app

This project (and its tutorial) showcases the following features of SvelteKit:

- fixed and dynamic routes
- layouts
- Svelte features:
    - components
    - props
    - scoped styles
    - reactive variables
    - loops
    - &lt;svelte:head&gt;
    - injecting html
- page endpoints
- server-side rendering
- disabling JavaScript client-side still works
- the $page store
- prefetching pages
- deployment to netlify

The blog posts are stored as markdown files on the server and are rendered as html pages using [marked](https://www.npmjs.com/package/marked). The metadata from the markdown files are extracted with [parse-md](https://www.npmjs.com/package/parse-md).

This project is very much inspired by [svelte-kit-blog-demo](https://github.com/svelteland/svelte-kit-blog-demo).
