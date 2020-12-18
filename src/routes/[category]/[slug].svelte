<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`${params.category}/${params.slug}.json`);
		const data = await res.json();
    console.log(data)
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>


<script>
  import Helper from '../../helpers/util'
  import { isEmpty } from 'lodash';
  const helper = new Helper();
	export let post;
</script>


<svelte:head>
	<title>{post.name} | {post.category.join(', ')}</title>
</svelte:head>

<article>
  <div class="post-container">
    <div class="post-first-fold h-screen bg-cover relative" style="background-image: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url({helper.getImageBySize(post.pictures, 1920, 1280)});">
      <div class="floating-container absolute mx-auto left-0 right-0 w-4/5 h-full flex flex-col mt-40">
        <div class="post-details flex flex-col">
          <p class="font-fef text-gray-300 text-center">{post.category.join(', ').toUpperCase()}</p>
          <h1 class="font-playfair text-5xl text-white font-bold text-center">{post.name}</h1>
        </div>
        <div class="video-container w-full h-full">
          <iframe class="w-full h-full"
            src="https://player.vimeo.com/{helper.getVideoUrl(post.uri)}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0"
            allow="autoplay; fullscreen" allowfullscreen title="Flying Elephants Films Video">
          </iframe>
      </div>
      </div>
    </div>
  </div>
</article>

{#if post.description}
  <section class="mt-64">
    <div class="max-w-screen-lg flex mx-auto py-10 flex-col">
      <h4 class="font-fef tracking-fef text-gray-500 text-center mb-6">STORY</h4>

      <div class="flex justify-center">
        <div class="mr-5">
          <img src="{helper.getImageBySize(post.pictures, 640, 1280)}}" alt="">
        </div>
        {#if post.description}
          <div class="ml-5">
            <p class="font-fef text-xl w-11/12 uppercase">{@html post.description || ''}</p>
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}


{#if !isEmpty(post.partners)}
  <section class="lg:container m-40">
    <h4 class="font-fef tracking-fef text-gray-500 text-center mb-6">PARTNERS</h4>

    <div class="flex justify-center flex-wrap">
      {#each [1, 2, 3, 4, 5] as client }
        <img class="md:max-w-full" src="{client.image || 'clients/evato_0.jpg'}" alt="{client.name || 'Partner logo'}" />
      {/each}
    </div>
  </section>
{/if}


{#if !isEmpty(post.awards)}
  <section class="mt-40 mb-40">
    <h4 class="font-fef tracking-fef text-gray-500 text-center mb-6">WINNING AWARDS</h4>

    <div class="flex max-w-screen-lg ml-auto mr-auto justify-between items-center ">
      {#each [1, 2, 3, 4] as award }
      <img src="{award.img || 'awards/winning-offical.png'}" alt="{award.name || 'winning logo'}">
      {/each}
    </div>
  </section>
{/if}



{#if !isEmpty(post.crew)}
  <section class="mt-40 mb-40">
    <h4 class="font-fef tracking-fef text-gray-500 text-center mb-6">CAST & CREW</h4>

    <div class="flex max-w-screen-lg ml-auto mr-auto justify-between items-center">
      <div class="flex flex-row items-center justify-center w-full">
        <span class="role text-xs text-gray-400 font-fef tracking-fef-sm w-32">
          ILLUSTRATION & VIDEO
        </span>
        <p class="font-fef text-3xl text-gray-500">
          Edwin Austin Abbey/Mary Abbott/Basuki Abdullah/
        </p>
      </div>

    </div>
  </section>
{/if}
