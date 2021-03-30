<script>
  let awards = [
{
id: 1,
svg: ``,
name: '',
logo: 'ad_stars.jpg'
},
{
id: 2,
svg: ``,
name: '',
logo: 'cannes_lions.png'
},
{
id: 3,
svg: ``,
name: '',
logo: 'd_and_ad_awards.jpg'
},
{
id: 4,
svg: ``,
name: '',
logo: 'interactive_media_awards.png'
},
{
id: 5,
svg: ``,
name: '',
logo: 'Kyoorius_creative_awards.png'
},
{
id: 6,
svg: ``,
name: '',
logo: 'london_international_awards.png'
},
// {
// id: 7,
// svg: ``,
// name: '',
// logo: 'new_york_festivals.jpg'
// },
{
id: 8,
svg: ``,
name: '',
logo: 'nyfaa.png'
},
{
id: 9,
svg: ``,
name: '',
logo: 'spikes_asia.jpeg'
},
{
id: 10,
svg: ``,
name: '',
logo: 'tambuli_awards.jpg'
},
{
id: 11,
svg: ``,
name: '',
logo: 'the_one_show.png'
},
{
id: 12,
svg: ``,
name: '',
logo: 'warc_awards.png'
}
  ]
</script>
<!-- <section class="mt-16 sm:mt-24 xs:mt-20 md:mt-32 lg:mt-40 mb-16 sm:mb-24 xs:mb-20 md:mb-32 lg:mb-40">
  <div class="flex max-w-screen-lg ml-auto mr-auto justify-between items-center md:flex-row flex-col">
    {#each awards as award }
    <img src="awards/{award.img}" alt="award.name" class="md:mb-0 mb-8">
    {/each}
  </div>
</section> -->


<section class="lg:container mt-40">
	<div class="flex justify-center">
    <h1 class="font-fef tracking-fef text-gray-500">OUR AWARDS</h1>
  </div>
  <div class="mt-10 grid grid-cols-2 lg:grid-cols-awards place-items-center gap-3 gap-y-10">
		{#each awards as award }
		<div class="lg:max-w-8 max-w-6-1/2">
			{#if award.svg !== ''}
			{@html award.svg}
			{:else}
				<img src="awards/{award.logo}" alt="{award.name}" />
			{/if}
		</div>
    {/each}
  </div>
</section>
