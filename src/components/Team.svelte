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
    speed: 800,
    slidesPerView: 3, // or 'auto'
    spaceBetween: 80,
    centeredSlides: true,
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 0, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 20, // Depth offset in px (slides translate in Z axis)
      modifier: 10, // Effect multipler
      slideShadows: true, // Enables slides shadows
    },
    grabCursor: true,
    autoHeight: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      748: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
      2560: {
        slidesPerView: 5,
      }
    }
  }

  const teamMembers = [
    {
      id: '1',
      name: 'Naguib Mahfouz',
      description: '',
      title: 'Creative Directors',
      photo: 'team_14.jpg',
      social: [
        {
          media: '',
          link: '',
          svg: ''
        }
      ]
    },
    {
      id: '2',
      name: 'Ismaïl Kadaré',
      description: '',
      title: 'Creative Directors',
      photo: 'team_13.jpg',
      social: [
        {
          media: '',
          link: '',
          svg: ''
        }
      ]
    },
    {
      id: '3',
      name: 'Gabriel Németh',
      description: '',
      title: 'Creative Directors',
      photo: 'team_12.jpg',
      social: [
        {
          media: '',
          link: '',
          svg: ''
        }
      ]
    },
    {
      id: '4',
      name: 'Oliver Gold Smith',
      description: '',
      title: 'Creative Directors',
      photo: 'team_15.jpg',
      social: [
        {
          media: '',
          link: '',
          svg: ''
        }
      ]
    },
    {
      id: '5',
      name: 'Iris Muroch',
      description: '',
      title: 'Creative Directors',
      photo: 'team_9.jpg',
      social: [
        {
          media: '',
          link: '',
          svg: ''
        }
      ]
    }
  ]
</script>

<section class="h-screen">
  <div class="flex justify-center mb-10">
    <h4 class="font-fef tracking-fef text-gray-500">OUR TEAM</h4>
  </div>
  <svelte:component this={swiper} bind:swiper={mySwiper} {options} className="h-auto">
    {#each teamMembers as member }
    <svelte:component this={slide}>
      <img src="team/{member.photo}" alt="member.name">
    </svelte:component>
    {/each}
  </svelte:component>
</section>
