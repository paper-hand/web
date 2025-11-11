<header class="py-6 px-5 w-full flex items-center justify-between">
  <div class="inline-flex items-center">
    <a title="Go Home" href="/" class="w-[150px] lg:w-[180px] inline-block">
      <Logo />
    </a>
  </div>
  <a href="#waitlist" role="button" class="button">{ACCESS_TEXT}</a>
</header>

<script>
  import Logo from './svg/logo.svelte'
  import LinkWen from './link-wen.svelte'
  import { APP_NAME, ACCESS_TEXT } from '$lib/data.json'
  export const logoAlt = `${APP_NAME} Logo`
</script>
