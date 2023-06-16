<a
  href="{url}"
  class="px-4 py-3 flex flex-row"
  on:focus={handleMouseIn}
  on:blur={handleMouseOut}
  on:mouseover={handleMouseIn}
  on:mouseout={handleMouseOut}
>
  {#if !hide}
    <span transition:slide="{{ axis: 'x' }}">{title}</span>
  {/if}
  {#if hide}
    <span transition:slide="{{ axis: 'x' }}">Wen?</span>
  {/if}
</a>

<script lang="ts">
  import { slide } from 'svelte/transition'
  let hide:boolean;
  export let url = "";
  export let title = "";

  const handleMouseOut = () => {
    hide = false
  }

  const handleMouseIn = () => {
    hide = true
  }
</script>
