<script context="module">
  import _ from 'lodash'
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
  export let params;
 const getImage = (images) => {
   const picture = _.find(images.sizes, {'width': 640}) || _.find(images.sizes, {'width': 1280}) || _.find(images.sizes, {'width': 1920})
   return picture && picture.link
 }
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
      <li>
        <a rel='prefetch' href='{params.category}/{post.slug}'>{post.name}</a>
        <p>{post.description || ''}</p>
        <img src="{getImage(post.pictures)}" alt="">
      </li>
    {/each}
  </ul>
