<script>
	import ClientLogos from '../components/ClientLogos.svelte';
	import ComingSoon from '../components/ComingSoon.svelte';
	import Team from '../components/Team.svelte';
		import HomeVideo from '../components/HomeVideo.svelte'
	import About from '../components/About.svelte'
	import Awards from '../components/Awards.svelte';
import Services from '../components/Services.svelte';
import OurFilms from '../components/OurFilms.svelte';
import Gallery from '../components/Gallery.svelte';
let isOpen = true;

</script>

<svelte:head>
	<title>Flying Elephants Films</title>
</svelte:head>
<HomeVideo></HomeVideo>

<About></About>
<Awards></Awards>
<Services></Services>

<OurFilms></OurFilms>

<Gallery></Gallery>

<ClientLogos></ClientLogos>
{#if isOpen}

{/if}
<!-- <ComingSoon></ComingSoon> -->

