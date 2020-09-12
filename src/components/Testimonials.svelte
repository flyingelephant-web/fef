
<script>
  import { onMount } from 'svelte';

    let mySwiper;
    let swiper;
    let slide;

    onMount(async () => {
        const module = await import('svelte-swiper');
        swiper = module.Swiper
        slide = module.SwiperSlide
    });
  const options = {
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 4,
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },
      loop: true,
      speed:800,
      slidesPerView: 4, // or 'auto'
      spaceBetween: 40,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 0, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      autoHeight: true,
      parallax: true,
    pagination: {
      el: '.swiper-pagination',
    },
  }
  </script>



<style global>
  .effect-coverflow.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
 }
  .effect-coverflow .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
 }
 .swiper-container {
  height: 18vw;
}
.cssSwiperClass {
  height: 18vw;
}
</style>

<svelte:component this={swiper} bind:swiper={mySwiper} options={options} className="h-screen">
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-2.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-4.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-6.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-7.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-8.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-9.jpg)"></svelte:component>
  <svelte:component this={slide} style="background-image:url(https://swiperjs.com/demos/images/nature-10.jpg)"></svelte:component>
</svelte:component>

