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
<section class="mt-40 mb-40">
  <div class="flex max-w-screen-lg ml-auto mr-auto justify-between items-center ">
    {#each awards as award }
    <img src="awards/{award.img}" alt="award.name">
    {/each}
  </div>
</section>
