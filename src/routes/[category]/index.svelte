<script context="module">
	export function preload({ params, query }) {
    return this.fetch(`${params.category}.json`)
      .then(r => r.json())
      .then(posts => {
        return {params, posts}
      }).catch(error => {
        console.log(error)
      })
	}
</script>

<script>
  export let posts;
  $: console.log(posts)
  export let params;
</script>

<svelte:head>
	<title>{params.category}</title>
</svelte:head>


<ul>
  {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
          tell Sapper to load the data for the page as soon as
          the user hovers over the link or taps it, instead of
          waiting for the 'click' event -->
      <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
    {/each}
  </ul>
