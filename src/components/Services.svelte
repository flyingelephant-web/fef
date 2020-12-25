<script>
  let services = [
    {
      heading: 'Creative solutions',
      para: 'It was popularised in the 1960s with the release of Letraset',
      'icon': 'fef-services-1'
    },
    {
      heading: 'End to end production',
      para: 'It was popularised in the 1960s with the release of Letraset',
      'icon': 'fef-services-2'
    },
    {
      heading: 'Line production',
      para: 'It was popularised in the 1960s with the release of Letraset',
      'icon': 'fef-services-3'
    },
    {
      heading: 'Post production',
      para: 'It was popularised in the 1960s with the release of Letraset',
      'icon': 'fef-services-4'
    }
  ]
</script>


<section class="mt-40 mb-40">
  <div class="flex justify-center">
    <h1 class="font-fef tracking-fef text-gray-500">SERVICES</h1>
  </div>
  <div class="flex flex-col lg:flex-row max-w-screen-lg ml-auto mr-auto justify-between items-center">
    {#each services as service}
      <div class="flex flex-col text-center lg:w-1/4 px-5 flex-1">
        <span class="{service.icon} text-9xl text-gray-400 hover:text-gray-600 duration-300"></span>
        <h4 class="font-playfair text-xl font-bold my-3">{service.heading}</h4>
        <p class="font-pb-regular text-gray-500">{service.para}</p>
      </div>
    {/each}
  </div>
</section>
