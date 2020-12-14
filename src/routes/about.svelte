<script>
import Testimonials from "../components/Testimonials.svelte";
import { stores } from '@sapper/app';
const { page } = stores();
let isOpen;
$:  isOpen = ($page.path === '/about' ) ?  true : false;

</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>

