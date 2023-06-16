<header class="py-6 px-8 w-full flex items-center justify-between">
  <div class="inline-flex items-center">
    <a href="/" class="w-[150px] lg:w-[180px] inline-block">
      <Logo />
    </a>
    <nav class="ml-20 hidden md:block font-medium">
      <ul class="inline-flex space-x-8">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#signup">Signup</a>
        </li>
      </ul>
    </nav>
  </div>
  <a href="#signup" role="button" class="button">{ACCESS_TEXT}</a>
</header>

<script>
  import Logo from './svg/logo.svelte'
  import { APP_NAME, ACCESS_TEXT } from '$lib/data.json'
  export const logoAlt = `${APP_NAME} Logo`
</script>