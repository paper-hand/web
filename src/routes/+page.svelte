<div class="font-serif text-black min-h-full max-w-[1440px] mx-auto">
  <Header />
  <div class="md:flex md:flex-row md:justify-center md:items-center">
    <Hero />
    <div class="md:border-l md:border-gray md:px-10 md:ml-10 py-10">
      <Signup />
    </div>
  </div>
  <Footer />
</div>

<script>
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
  import Hero from '../components/hero.svelte'
  import Signup from '../components/signup-mailchimp.svelte'
</script>
