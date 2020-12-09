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
        loop: true,
        slidesPerView: 'auto', // or 'auto'
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          dynamicBullets: false,
          renderBullet: (index, className) => {
            return '<span class="' + className + ' testimony-pagination"></span>';
          }
        },
        centeredSlides: true,
    }

    let testimonials = [
      {
        'name': 'D.G BROCK',
        'para': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be',
        'img': 'testimonial-brock.jpg'
      }, {
        'name': 'JOAN.DE VOA',
        'para': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established',
        'img': 'testimonial-joan-devoa.jpg'
      },{
        'name': 'JOHN CASTER',
        'para': 'Unless you live in Metropolis and are still rebuilding your house from last time, this week you’d have been wowed by not one. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'img': 'testimonial-john-caster.jpg'
      }
    ]
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

<section class="mt-40 mb-40">
  <div class="max-w-screen-md mx-auto testimonial">
    <svelte:component this={swiper} bind:swiper={mySwiper} options={options} className="">
    {#each testimonials as testimony }
      <svelte:component this={slide}>
      <div class="flex justify-center flex-col items-center">
        <div class="testimonial-quote ">
          <img src="testimonial/{testimony.img}" alt="{testimony.name}">
        </div>
        <div>
          <p class="font-fef mt-5 mb-10 text-xs tracking-fef-sm text-gray-400">
            {testimony.name}
          </p>
        </div>
        <div>
          <p class="font-playfair text-xl text-gray-600 prose-sm text-center">
            {testimony.para}
          </p>
        </div>
      </div>
      </svelte:component>
    {/each}
    </svelte:component>
    <div class="flex justify-center mt-8">
      <div class="swiper-pagination"></div>
    </div>
  </div>
</section>
