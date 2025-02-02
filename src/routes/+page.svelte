<script>
  import { onMount } from 'svelte';
  export const prerender = true; // This will tell SvelteKit to prerender this dynamic page


  onMount(() => {
    // Redirect to the external URL once the component has mounted in the client
    setTimeout(() => {
      window.location.href = 'https://discover-anguilla.vercel.app/';
    }, 3000);
  });
</script>

<style>
  h1 {
    color: #333;
    font-size: 3rem;
    text-align: center;
    margin-top: 50px;
  }
</style>

<h1>Redirecting to Discover Anguilla...</h1>
