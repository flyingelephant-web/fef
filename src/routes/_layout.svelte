<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte'
	export let segment;
</script>

<style>
</style>

<Nav {segment}/>

<main class="lg:container">
	<slot></slot>
</main>
<Footer></Footer>
