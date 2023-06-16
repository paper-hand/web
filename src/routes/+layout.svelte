<svelte:head>
  <title>{APP_NAME} - {APP_TAGLINE}</title>
  <meta property="og:type" content="website">
  <meta property="og:url" content="{APP_URL}"/> 
  <meta property="og:title" content="{APP_NAME}"/>  
  <meta name="description" content="{APP_DESCRIPTION}" />
  <meta property="og:description" content="{APP_DESCRIPTION}"/>
  <meta property="og:image" content="/graph.jpg">
</svelte:head>

<script>
  import '../css/app.css';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { APP_NAME, APP_URL, APP_TAGLINE, APP_DESCRIPTION } from '$lib/data.json'
  
  inject({ mode: dev ? 'development' : 'production' });
</script>
<slot />
