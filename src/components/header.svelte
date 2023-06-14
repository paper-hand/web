<header class="py-6 px-8 w-full flex items-center justify-between">
  <div class="inline-flex items-center">
    <a href="/" class="header__logo text-brand inline-block">
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
  <a href="#signup" role="button" class="button button--thick hidden md:block">Get Early Access</a>
</header>

<style lang="postcss">
  .header__logo {
    width: 180px;
  }
</style>

<script>
  import Logo from './svg/logo.svelte'
  import { APP_NAME } from '../data.json'
  export const logoAlt = `${APP_NAME} Logo`
</script>