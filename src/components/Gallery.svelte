<script>
import Carousel from "./UI/Carousel.svelte";
import Content from './UI/Content.svelte';
import Modal from 'svelte-simple-modal';
import { showGalleryModal }  from '../store/store';
import { dropRight, cloneDeep, isEmpty  } from 'lodash';
// { images:
//       [
//         {path: 'http://demo.megadrupal.com/d8/md-filmmaker/sites/default/files/awebuilder/timbuk.png', id: 'image1'},
//         {path: 'http://demo.megadrupal.com/d8/md-filmmaker/sites/default/files/awebuilder/short-fi.png', id: 'image2'},
//         {path: 'http://demo.megadrupal.com/d8/md-filmmaker/sites/default/files/awebuilder/the-clouds-.png', id: 'image3'},
//       ] }
 let images = [
    {path: 'our-films/film_1.png', id: 'image1', gridClass: null, display: true},
    {path: 'our-films/film_2.png', id: 'image2', gridClass: null, display: true},
    {path: 'our-films/film_3.png', id: 'image3', gridClass: 'row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_5.png', id: 'image5', gridClass: null, display: true},
    {path: 'our-films/film_6.png', id: 'image6', gridClass: 'row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_7.png', id: 'image7', gridClass: null, display: true},
    {path: 'our-films/film_8.png', id: 'image8', gridClass: null, display: true},
    {path: 'our-films/film_9.png', id: 'image9', gridClass: 'row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_10.png', id: 'image10', gridClass: 'row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_11.png', id: 'image11', gridClass: 'row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_4.png', id: 'image4', gridClass: null, display: true},
    {path: 'our-films/film_12.png', id: 'image12', gridClass: 'col-span-1 lg:col-span-2 row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_13.png', id: 'image13', gridClass: null, display: true},
    {path: 'our-films/film_14.png', id: 'image14', gridClass: null, display: true},
    {path: 'our-films/film_15.png', id: 'image15', gridClass: null, display: true},
    {path: 'our-films/film_16.png', id: 'image16', gridClass: 'row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_17.png', id: 'image17', gridClass: null, display: true},
    {path: 'our-films/film_18.png', id: 'image18', gridClass: 'row-span-1 lg:row-span-2', display: true},
    {path: 'our-films/film_20.png', id: 'image20', gridClass: 'row-span-1 lg:row-span-2', display: true},
  ]

const swapPositions = (array, a ,b) => {
  [array[a], array[b]] = [array[b], array[a]]
}

const filterImages = (images, numberOfImagesFromRight) => {
  return dropRight(images, numberOfImagesFromRight)
}

let galleryImages = filterImages(images, 3);
let carouselImages = [];

const showCarousel = (imageId) => {
  const toBeSwapped = cloneDeep(images);
  swapPositions(toBeSwapped, 9, imageId);
  carouselImages = cloneDeep(toBeSwapped)
  showGalleryModal.set(true);
}

const sendImagesToCarousel = (n) => {
  return {
    'images': dropRight(props.images, n)
  }
}

const getCarouselImages = () => {
  return !isEmpty(carouselImages)  ? carouselImages : images;
}
</script>
<section class="mt-40 mb-5">
  <h4 class="font-fef tracking-widest md:tracking-fef text-gray-500 text-center">PHOTO</h4>
  <h2 class="text-center font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">Gallery</h2>
</section>
<section>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
    {#each galleryImages as image , i}
        <div class="{image.gridClass}">
          {#if image.path && image.display}
            <div on:click="{() => showCarousel(i)}" class="image-cover w-full h-full bg-cover bg-center" style="background-image: url({image.path});">
              <img src="{image.path}" alt="" class="opacity-0">
            </div>
          {:else}
            <div class="image-cover w-full h-full bg-cover bg-center">
              <img src="{image.path}" alt="" class="opacity-0">
            </div>
          {/if}
        </div>
    {/each}
  </div>
</section>

<div class="bg opacity-0 window window-wrap hidden"></div>
<section>
  {#if $showGalleryModal}
  <Modal>
      <Content Component={Carousel} props={
        { 'images': carouselImages }
      }>
      </Content>
    </Modal>
    {/if}
</section>
