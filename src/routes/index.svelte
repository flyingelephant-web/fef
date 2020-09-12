<script>
	import ClientLogos from '../components/ClientLogos.svelte';
	import Team from '../components/Team.svelte';
	import Testimonials from '../components/Testimonials.svelte'
</script>

<style lang="postcss">

.btn {
    @apply bg-red-500 text-red-100 uppercase tracking-wide font-semibold
      text-4xl px-4 py-3 shadow-lg rounded;
  }
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<section>

</section>


<Team></Team>

<ClientLogos></ClientLogos>
