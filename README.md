# SvelteKit Blog

Link: https://blog-sveltekit.netlify.app

This project (and its tutorial) showcases the following features of SvelteKit:

-   fixed and dynamic routes
-   layouts
-   Svelte features:
    -   components
    -   props
    -   scoped styles
    -   reactive variables
    -   loops
    -   &lt;svelte:head&gt;
    -   injecting html
-   page endpoints
-   server-side rendering
-   static site generation
-   disabling JavaScript client-side still works
-   the $page store
-   prefetching pages
-   deployment to Netlify

The blog posts are stored as markdown files on the server and are rendered as html pages using [marked](https://www.npmjs.com/package/marked). The metadata from the markdown files are extracted with [front-matter](https://www.npmjs.com/package/front-matter).

This project is very much inspired by [svelte-kit-blog-demo](https://github.com/svelteland/svelte-kit-blog-demo). A quite different approach is taken [here](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) with the preprocessor [mdsvex](https://www.npmjs.com/package/mdsvex).

---

If you are coming from the tutorial on YouTube, which was published in August 2022: The code is in the branch `tutorial`. The main branch has more recent code, including in particular SvelteKit's current routing system which was introduced shortly after the recording of the tutorial.
