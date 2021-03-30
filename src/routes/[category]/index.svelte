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
  import Helper from '../../helpers/util'
  export let posts;
  export let params;
 const getImage = (images) => {
   const picture = _.find(images.sizes, {'width': 640}) || _.find(images.sizes, {'width': 1280}) || _.find(images.sizes, {'width': 1920})
   return picture && picture.link
 }

 const helper = new Helper();
</script>

<svelte:head>
	<title>{helper.capitalizeFirstLetter(params.category)} - Flying Elephant Films</title>
</svelte:head>



<section class="mt-16 sm:mt-24 xs:mt-20 md:mt-32 lg:mt-40">
  <h2 class="text-center font-playfair text-3xl lg:text-6xl font-bold capitalize">{helper.capitalizeFirstLetter(params.category)}</h2>

<div class="flex flex-col max-w-screen-lg mx-auto mt-10">
  {#each  _.sortBy(posts, 'index') as post}
    <div class="flex flex-col items-center my-5">

    <!-- we're using the non-standard `rel=prefetch` attribute to
      tell Sapper to load the data for the page as soon as
      the user hovers over the link or taps it, instead of
      waiting for the 'click' event -->
      <div class="post-image relative">
        <a rel='prefetch' href='{params.category}/{post.slug}'>
          <img src="{getImage(post.pictures)}" alt="{post.name}">
        </a>
      </div>
      <h2 class="px-5 sm:px-0 font-playfair text-black font-bold text-xl lg:text-3xl mt-5 lg:w-full text-center">
        <a rel='prefetch' href='{params.category}/{post.slug}'>{post.name}</a>
      </h2>
    </div>
  {/each}
</div>


</section>
<ul>

  </ul>
