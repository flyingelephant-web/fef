<script>
  let awards = [
    {
      'name': 'first',
      'img': 'winning-documentary-2.png'
    },
    {
      'name': 'first',
      'img': 'winning-documentary.png'
    },
    {
      'name': 'first',
      'img': 'winning-offical_0.png'
    },
    {
      'name': 'first',
      'img': 'winning-offical.png'
    }
  ]
</script>
<section class="mt-16 sm:mt-24 xs:mt-20 md:mt-32 lg:mt-40 mb-16 sm:mb-24 xs:mb-20 md:mb-32 lg:mb-40">
  <div class="flex max-w-screen-lg ml-auto mr-auto justify-between items-center md:flex-row flex-col">
    {#each awards as award }
    <img src="awards/{award.img}" alt="award.name" class="md:mb-0 mb-8">
    {/each}
  </div>
</section>
