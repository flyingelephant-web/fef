<style lang="postcss">

.btn {
    @apply bg-red-500 text-red-100 uppercase tracking-wide font-semibold
      text-4xl px-4 py-3 shadow-lg rounded;
  }

	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-family: pb-bold;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>


<div class="space-y-10 text-center">
  <h1 class="text-7xl uppercase font-bold">Great success!</h1>
  <button class="btn">DO NOT PRESS THIS BUTTON!</button>
</div>
