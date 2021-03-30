<script>
  import { getContext } from 'svelte';
  import Carousel from './Carousel.svelte';
  import { showGalleryModal }  from '../../store/store'
  export let Component;
  export let props;
  let showContent;


  const { open } = getContext('simple-modal');
  showContent = $showGalleryModal;
  $: if ($showGalleryModal) {
    open(Component, props, {} , {
        onClosed: () => {
          console.log('close')
          showGalleryModal.set(false)
        },
      }
    );
  }

  // showModal =
  // const showSurprise = () => {

  // };
</script>

<!-- <p><button on:click={showSurprise}>Show me a surprise!</button></p> -->

