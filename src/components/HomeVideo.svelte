<script>
import Carousel from './UI/Carousel.svelte';

let videos = [{
  path: 'https://player.vimeo.com/video/480711691?autoplay=0&title=0&byline=0&portrait=0',
  id: 'image1'
},{
  path: 'https://player.vimeo.com/video/575745848?autoplay=0&title=0&byline=0&portrait=0',
  id: 'image2'
},{
  path: 'https://player.vimeo.com/video/571993934?autoplay=0&title=0&byline=0&portrait=0',
  id: 'image3'
}]

</script>

<section class="mb-16 sm:mb-24 xs:mb-20 md:mb-32 lg:mb-40">
    <Carousel images={videos} iframe="true" controlColor="#fff"></Carousel>
</section>

