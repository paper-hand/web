<section class="px-4 text-center flex flex-col items-center justify-center relative">
  <div class="z-1 relative">
    <h1 class="font-black text-4xl sm:text-5xl lg:text-7xl sm:max-w-[600px] lg:max-w-[700px] mb-2 lg:mb-4">{TAGLINE}</h1>
    <p class="relative text-md text-brand lg:text-lg font-medium bg-white px-3 py-1 rounded-lg inline-block shadow-lg border-brand border-2">
      {COUNTDOWN}
    </p>
    <img loading="lazy" class="absolute left top-0 bottom-0 my-auto -z-[1] opacity-70 w-full xs:max-w-[700px] lg:max-w-[680px]" src="/sapiens.png" alt="Homo Sapiens" />
  </div>
</section>

<style lang="postcss">
  section {
    min-height: 400px;
    @media screen(md) {
      min-height: calc(100vh - var(--header-height) - var(--footer-height));
    }
  }

  h1 {
    @media screen(md) {
      text-shadow: 1px 1px 2px theme('colors.brand.DEFAULT');
    }
  }
</style>

<script>
  import { TAGLINE, COUNTDOWN } from '$lib/data.json'
</script>
