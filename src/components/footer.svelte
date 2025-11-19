<div class="flex-col md:flex-row md:space-x-10 md:space-x-20 text-lg md:text-xl font-medium tracking-wide px-5 pb-2 flex justify-center items-center">
  <p>
    <a class="inline-flex items-center" title="Twitter" href="{PH_CONTACT_TWITTER_URL}" target="_blank">
      <span><TwitterLogo /></span>
      <span>{PH_CONTACT_TWITTER}</span>
    </a>
  </p>
  <p>
    <a class="inline-flex items-center" title="Mail" href="mailto:{PH_CONTACT_EMAIL}">
      <span><MailLogo /></span>
      <span>{PH_CONTACT_EMAIL}</span>
    </a>
  </p>
</div>

<style lang="postcss">
  span:first-child {
    height: 40px;
    width: 30px;
    margin-right: 10px;
  }
</style>

<script>
  import TwitterLogo from './svg/twitter.svelte'
  import MailLogo from './svg/email.svelte'
  import { PH_CONTACT_EMAIL, PH_CONTACT_TWITTER, PH_CONTACT_TWITTER_URL } from '$lib/data.json'
</script>
