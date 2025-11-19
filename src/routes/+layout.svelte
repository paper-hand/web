<script lang="ts">
    import '$lib/css/app.css';
	import favicon from '$lib/assets/favicon.svg';


    import { APP_NAME, APP_URL, APP_TAGLINE, APP_DESCRIPTION } from '$lib/data.json'

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
	<title>{APP_NAME} - {APP_TAGLINE}</title>
    <meta name="description" content="{APP_DESCRIPTION}" />
    <meta property="og:type" content="website">
    <meta property="og:url" content="{APP_URL}"/>
    <meta property="og:title" content="{APP_NAME}"/>
    <meta property="og:description" content="{APP_DESCRIPTION}"/>
    <meta property="og:image" content="{APP_URL}/og_img.jpg">
    <meta name="twitter:card" content="summary" />
    <meta property="twitter:title" content="{APP_NAME}"/>
    <meta property="twitter:image" content="{APP_URL}/og_img.jpg"/>
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}
