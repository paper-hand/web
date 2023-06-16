<header class="py-6 px-5 w-full flex items-center justify-between">
  <div class="inline-flex items-center">
    <a href="/" class="w-[150px] lg:w-[180px] inline-block">
      <Logo />
    </a>
    <nav class="ml-10 hidden md:block font-medium">
      <ul class="inline-flex space-x-2">
        <li>
          <LinkWen url="#home" title="Home" />
        </li>
        <li>
          <LinkWen url="#about" title="About" />
        </li>
        <li>
          <LinkWen url="#signup" title="Signup" />
        </li>
      </ul>
    </nav>
  </div>
  <a href="#signup" role="button" class="button">{ACCESS_TEXT}</a>
</header>

<script>
  import Logo from './svg/logo.svelte'
  import LinkWen from './link-wen.svelte'
  import { APP_NAME, ACCESS_TEXT } from '$lib/data.json'
  export const logoAlt = `${APP_NAME} Logo`
</script>