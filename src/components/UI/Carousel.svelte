
<script>
  import { flip } from 'svelte/animate';
  import { fade, fly } from 'svelte/transition';
  import { onDestroy } from 'svelte';
  export let images;
  export let iframe;
  export let imageWidth = '100%';
  export let imageSpacing = 0;
  export let speed = 500;
  export let controlColor= '#444';
  export let strokeColor= '#000';
  export let controlScale = '0.5';
  export let autoplay = false;
  export let autoplaySpeed = 5000;
  export let displayControls = true;
  let interval;
  const rotateLeft = e => {
    const transitioningImage = images[images.length - 1]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    images = [images[images.length -1],...images.slice(0, images.length - 1)]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }
  const rotateRight = e => {
    const transitioningImage = images[0]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    images = [...images.slice(1, images.length), images[0]]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }
  const startAutoPlay = () => {
    if(autoplay){
      interval = setInterval(rotateLeft, autoplaySpeed)
    }
  }
  const stopAutoPlay = () => {
    clearInterval(interval)
  }
  if(autoplay){
    startAutoPlay()
  }
  onDestroy(()=>{stopAutoPlay()})
</script>
<!-- width: 100vw -->
{#if iframe=== 'true'}
  <div id="carousel-container" class="carousel-container w-full relative flex flex-col overflow-x-hidden">
    <div id="carousel-images-no-flex" class="w-full mx-auto justify-center h-0 pb-fluid-video overflow-y-hidden">
    <!-- <div id="carousel-images"> -->
        {#each images as image (image.id)}
          <div id="responsiveVideoWrapper" class="w-full relative pb-fluid-video" in:fly="{{ x: 200, duration: 200 }}">
            <iframe class="home-video absolute top-0 left-0 w-full h-full object-contain md:object-scale-down"
            src={image.path}
            style={`width:${imageWidth}; margin: 0 ${imageSpacing}px;`}
            id={image.id}
            on:mouseover={stopAutoPlay}
            on:mouseout={startAutoPlay}
            frameborder="0"
            allow="autoplay; fullscreen" allowfullscreen title="Flying Elephants Films Video">
            </iframe>
          </div>
        {/each}

    </div>
    {#if displayControls}
      <button id="left" on:click={rotateLeft} class="">
        <slot name="left-control">
          <svg width="39px" height="110px" id="svg8" class="transform scale-50" transform={`scale(${controlScale})`}>
            <g id="layer1" transform="translate(-65.605611,-95.36949)">
              <path
              style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
              d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
              id="path1412" />
            </g>
          </svg>
        </slot>
      </button>
      <button id="right" on:click={rotateRight} class="absolute top-1/2 -translate-y-1/2 flex items-center justify-center bg-transparent border-0">
        <slot name="right-control">
          <svg width="39px" height="110px" id="svg8" class="transform rotate-180 scale-50" transform={`rotate(180) scale(${controlScale})`}>
            <g id="layer1" transform="translate(-65.605611,-95.36949)">
              <path
              style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
              d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
              id="path1412" />
            </g>
          </svg>
        </slot>
      </button>
    {/if}
  </div>
{:else}
  <div id="carousel-container" class="carousel-container w-full relative flex flex-col overflow-x-hidden">
    <div id="carousel-images" class="w-full md:w-1/2 mx-auto flex justify-center flex-no-wrap max-h-screen">
      {#each images as image (image.id)}
        <img
          class="object-contain md:object-scale-down"
          src={image.path}
          alt={image.id}
          id={image.id}
          style={`width:${imageWidth}; margin: 0 ${imageSpacing}px;`}
          on:mouseover={stopAutoPlay}
          on:mouseout={startAutoPlay}
          animate:flip={{duration: speed}}/>
        {/each}
    </div>
    {#if displayControls}
      <button id="left" on:click={rotateLeft} class="">
        <slot name="left-control">
          <svg width="39px" height="110px" id="svg8" class="transform scale-50" transform={`scale(${controlScale})`}>
            <g id="layer1" transform="translate(-65.605611,-95.36949)">
              <path
              style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
              d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
              id="path1412" />
            </g>
          </svg>
        </slot>
      </button>
      <button id="right" on:click={rotateRight} class="absolute top-1/2 -translate-y-1/2 flex items-center justify-center bg-transparent border-0">
        <slot name="right-control">
          <svg width="39px" height="110px" id="svg8" class="transform rotate-180 scale-50" transform={`rotate(180) scale(${controlScale})`}>
            <g id="layer1" transform="translate(-65.605611,-95.36949)">
              <path
              style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
              d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
              id="path1412" />
            </g>
          </svg>
        </slot>
      </button>
    {/if}
  </div>
{/if}
