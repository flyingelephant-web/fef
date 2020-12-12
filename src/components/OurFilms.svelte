<script>
import RightArrow from "./UI/RightArrow.svelte";

  let ourFilms = [
    {
      id: 1,
      name: 'The Box Trolls',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,...`,
      slug: 'the-box-troll',
      category: ['cartoon'],
      tag: [],
      image: 'film_10.jpg',
      thumbnail: '',
      style: '',
      featured: true
    },
    {
      id: 2,
      name: `It's a wonderful life`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,...`,
      slug: 'its-a-wonderful-life',
      category: ['film'],
      tag: [],
      image: 'film_9.jpg',
      thumbnail: '',
      style: '',
      featured: false
    },
    {
      id: 3,
      name: 'The wizard of Oz',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,...`,
      slug: 'the-wizard-of-oz',
      category: ['short-film'],
      tag: [],
      image: 'film_8.jpg',
      thumbnail: '',
      style: '',
      featured: false
    },
    {
      id: 4,
      name: 'Mr. Brown',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,...`,
      slug: 'mr-brown',
      category: ['film'],
      tag: [],
      image: 'film_7.jpg',
      thumbnail: '',
      style: '',
      featured: false
    }

  ]
</script>
<section class="mt-40">
  <h2 class="text-center font-playfair text-8xl font-bold">Our films</h2>
  <div class="max-w-screen-xl mx-auto mt-5">
    <div class="grid grid-cols-4">
      {#each ourFilms as film }
        {#if film.featured}
          <div class="col-span-3 row-span-3 relative bg-black our-films-gallery">
            <img class="opacity-50 duration-300" src="our-films/{film.image}" alt="{film.name}">
            <div class="absolute top-1/2 left-1/2 right-0 translate-negative-50 w-full">
              <div class="font-fef uppercase text-gray-400 text-xs tracking-fef text-center">
                <p>
                  {film.category}
                </p>
              </div>
              <div class="text-center">
                <a href="{film.category[0]}/{film.slug}"><h1 class="font-playfair text-white font-bold text-5xl leading-10">{film.name}</h1></a>
              </div>
              <div class="text-center our-films-description duration-300 px-48">
                <p class="font-pb-regular text-sm text-gray-400 mt-5">{film.description}</p>
              </div>
              <div class="our-films-viewmore absolute bottom-auto right-auto top-1/2 left-1/2 opacity-1 duration-300 mt-5">
                <a class="border p-2 flex justify-center w-40" href="/d8/md-filmmaker/node/26">
                  <span class="text-white font-fef uppercase text-xs tracking-widest mr-3">
                    View more
                  </span>
                  <RightArrow width="12px"></RightArrow>
                </a>
              </div>
            </div>
          </div>
        {:else}
          <div class="relative pb-fluid-video bg-black overflow-hidden h-0 our-films-gallery">
            <img class="opacity-50 duration-300" src="our-films/{film.image}" alt="{film.name}">
            <div class="absolute top-1/2 left-1/2 right-0 translate-negative-50 w-full">
              <div class="font-fef uppercase text-gray-400 text-xs tracking-fef text-center">
                <p>
                  {film.category}
                </p>
              </div>
              <div class="text-center">
                <a href="{film.category[0]}/{film.slug}"><h1 class="font-playfair text-white font-bold text-xl leading-10">{film.name}</h1></a>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
