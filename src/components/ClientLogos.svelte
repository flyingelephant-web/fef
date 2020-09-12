<script>
  const clientLogos = [{
			id: 1,
			logo: 'evato_0.jpg',
			name: 'home',
			link: ''
		},
		{
			id: 2,
			logo: 'beau_0.jpg',
			name: 'home',
			link: ''
		},{
			id: 3,
			logo: 'beau-style_0.jpg',
			name: 'home',
			link: ''
		},{
			id: 4,
			logo: 'bleute_0.jpg',
			name: 'home',
			link: ''
		},{
			id: 5,
			logo: 'eventbox_0.jpg',
			name: 'home',
			link: ''
		},{
			id: 6,
			logo: 'themeforest_0.jpg',
			name: 'home',
			link: ''
		}
	]
</script>

<section class="lg:container">
  <div class="flex justify-center flex-wrap">
    {#each clientLogos as client }
      <img class="md:max-w-full" src="clients/{client.logo}" alt="{client.name}" />
    {/each}
  </div>
</section>
