<script>
import RightArrow from "./UI/RightArrow.svelte";
import _ from 'lodash'
import Helper from '../helpers/util'
const helper = new Helper();
  let ourFilms = [{
      "description": null,
      "duration": 43,
      "name": "Chivas - Made of Character. Dir Cut",
      "pictures": {
        "uri": "/videos/578392871/pictures/1196465540",
        "active": true,
        "type": "custom",
        "sizes": [{
          "width": 200,
          "height": 150,
          "link": "https://i.vimeocdn.com/video/1196465540_200x150?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1196465540_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
          "width": 640,
          "height": 360,
          "link": "https://i.vimeocdn.com/video/1196465540_640x360?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1196465540_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
          "width": 1280,
          "height": 720,
          "link": "https://i.vimeocdn.com/video/1196465540_1280x720?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1196465540_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
          "width": 1920,
          "height": 1080,
          "link": "https://i.vimeocdn.com/video/1196465540_1920x1080?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1196465540_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }],
        "resource_key": "861aa15c7ff94cee23a62becf034c3f74d6399b1",
        "default_picture": false
      },
      "type": "",
      "uri": "/videos/578392871",
      "user": {
        "name": "Flying Elephant Films"
      },
      "slug": "chivas-made-of-character-dir-cut",
      "id": "",
      "title": "",
      "blurb": "",
      "content": "",
      "category": ['commercials'],
      "tags": [],
      "articleImage": "",
      "thumbnailImage": "",
      "index": 1,
      "author": [],
      "media": [{
        "id": "",
        "mediaType": "",
        "src": "",
        "caption": ""
      }],
      "crew": [{
        "id": "",
        "name": "",
        "photo": "",
        "bio": "",
        "role": ""
      }],
      "awards": [{
        "id": "",
        "title": "",
        "year": "",
        "blurb": "",
        "reference": "",
        "image": ""
      }],
      "partners": [{
        "id": "",
        "name": "",
        "website": "",
        "image": ""
      }],
      "featured": true
    },
    {
      "description": null,
      "duration": 57,
      "name": "BLENDERS PRIDE RESERVE COLLECTION - Dir Cut",
      "pictures": {
        "uri": "/videos/571993934/pictures/1182956811",
        "active": true,
        "type": "custom",
        "sizes": [{
          "width": 200,
          "height": 150,
          "link": "https://i.vimeocdn.com/video/1182956811_200x150?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1182956811_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
          "width": 640,
          "height": 360,
          "link": "https://i.vimeocdn.com/video/1182956811_640x360?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1182956811_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
          "width": 1280,
          "height": 720,
          "link": "https://i.vimeocdn.com/video/1182956811_1280x720?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1182956811_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
          "width": 1920,
          "height": 1080,
          "link": "https://i.vimeocdn.com/video/1182956811_1920x1080?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1182956811_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }],
        "resource_key": "06709945ad551f256d0e36ff320472c38ad10dbb",
        "default_picture": false
      },
      "type": "",
      "uri": "/videos/571993934",
      "user": {
        "name": "Flying Elephant Films"
      },
      "slug": "blenders-pride-reserve-collection-dir-cut",
      "id": "",
      "title": "",
      "blurb": "",
      "content": "",
      "category": ['digital-campaigns'],
      "tags": [],
      "articleImage": "",
      "thumbnailImage": "",
      "index": 2,
      "author": [],
      "media": [{
        "id": "",
        "mediaType": "",
        "src": "",
        "caption": ""
      }],
      "crew": [{
        "id": "",
        "name": "",
        "photo": "",
        "bio": "",
        "role": ""
      }],
      "awards": [{
        "id": "",
        "title": "",
        "year": "",
        "blurb": "",
        "reference": "",
        "image": ""
      }],
      "partners": [{
        "id": "",
        "name": "",
        "website": "",
        "image": ""
      }],
      "featured": false
    },
    {
      "description": null,
      "duration": 30,
      "name": "Lacto Calamine TVC",
      "pictures": {
        "uri": "/videos/534332753/pictures/1106107720",
        "active": true,
        "type": "custom",
        "sizes": [{
            "width": 200,
            "height": 150,
            "link": "https://i.vimeocdn.com/video/1106107720_200x150.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106107720_200x150.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          },
          {
            "width": 640,
            "height": 360,
            "link": "https://i.vimeocdn.com/video/1106107720_640x360.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106107720_640x360.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          },
          {
            "width": 1280,
            "height": 720,
            "link": "https://i.vimeocdn.com/video/1106107720_1280x720.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106107720_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          },
          {
            "width": 1920,
            "height": 1080,
            "link": "https://i.vimeocdn.com/video/1106107720_1920x1080.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106107720_1920x1080.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          }
        ],
        "resource_key": "db4b787325ad22193327eee496f8e719388bc804",
        "default_picture": false
      },
      "type": "",
      "uri": "/videos/534332753",
      "user": {
        "name": "Flying Elephant Films"
      },
      "slug": "lacto-calamine-tvc",
      "id": "",
      "title": "",
      "blurb": "",
      "content": "",
      "category": ['commercials'],
      "tags": [],
      "articleImage": "",
      "thumbnailImage": "",
      "index": 5,
      "author": [],
      "media": [{
        "id": "",
        "mediaType": "",
        "src": "",
        "caption": ""
      }],
      "crew": [{
        "id": "",
        "name": "",
        "photo": "",
        "bio": "",
        "role": ""
      }],
      "awards": [{
        "id": "",
        "title": "",
        "year": "",
        "blurb": "",
        "reference": "",
        "image": ""
      }],
      "partners": [{
        "id": "",
        "name": "",
        "website": "",
        "image": ""
      }],
      "featured": false
    },
    {
      "description": null,
      "duration": 30,
      "name": "TETMOSOL TVC",
      "pictures": {
        "uri": "/videos/534332862/pictures/1106106110",
        "active": true,
        "type": "custom",
        "sizes": [{
            "width": 200,
            "height": 150,
            "link": "https://i.vimeocdn.com/video/1106106110_200x150.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106106110_200x150.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          },
          {
            "width": 640,
            "height": 360,
            "link": "https://i.vimeocdn.com/video/1106106110_640x360.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106106110_640x360.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          },
          {
            "width": 1280,
            "height": 720,
            "link": "https://i.vimeocdn.com/video/1106106110_1280x720.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106106110_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          },
          {
            "width": 1920,
            "height": 1080,
            "link": "https://i.vimeocdn.com/video/1106106110_1920x1080.jpg?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1106106110_1920x1080.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
          }
        ],
        "resource_key": "e81ff47b9c9ad7d39b38d07f081235f53558060f",
        "default_picture": false
      },
      "type": "",
      "uri": "/videos/534332862",
      "user": {
        "name": "Flying Elephant Films"
      },
      "slug": "tetmosol-tvc",
      "id": "",
      "title": "",
      "blurb": "",
      "content": "",
      "category": ['commercials'],
      "tags": [],
      "articleImage": "",
      "thumbnailImage": "",
      "index": 4,
      "author": [],
      "media": [{
        "id": "",
        "mediaType": "",
        "src": "",
        "caption": ""
      }],
      "crew": [{
        "id": "",
        "name": "",
        "photo": "",
        "bio": "",
        "role": ""
      }],
      "awards": [{
        "id": "",
        "title": "",
        "year": "",
        "blurb": "",
        "reference": "",
        "image": ""
      }],
      "partners": [{
        "id": "",
        "name": "",
        "website": "",
        "image": ""
      }],
      "featured": false
    }
  ]

  const getImage = (images, size) => {
   const picture = _.find(images.sizes, {'width': size}) || _.find(images.sizes, {'width': 640}) || _.find(images.sizes, {'width': 1280}) || _.find(images.sizes, {'width': 1920})
   return picture && picture.link
 }
</script>
<section class="mt-20">
  <h2 class="text-center font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">Our films</h2>
  <div class="max-w-screen-xl mx-auto mt-5">
    <div class="grid grid-cols-1 lg:grid-cols-4">
      {#each ourFilms as film }
        {#if film.featured}
          <div class="lg:col-span-3 lg:row-span-3 relative bg-black our-films-gallery">
            <img class="opacity-50 duration-300 w-full lg:w-auto" src="{getImage(film.pictures, 1280)}" alt="{film.name}">
            <div class="absolute top-1/2 left-1/2 right-0 translate-negative-50 w-full">
              <div class="font-fef uppercase text-gray-400 text-xs tracking-fef text-center">
                <p>
                  <a class="items-center justify-center flex h-12" href="{_.kebabCase(film.category[0])}">
                    {film.category}
                  </a>
                </p>
              </div>
              <div class="text-center">
                <a href="{_.kebabCase(film.category[0])}/{film.slug}"><h1 class="font-playfair text-white font-bold xs:text-2xl md:text-4xl lg:text-5xl leading-10">{film.name}</h1></a>
              </div>
              <div class="text-center our-films-description duration-300 px-48">
                <p class="font-pb-regular text-sm text-gray-400 mt-5">{film.description || ''}</p>
              </div>
              <div class="our-films-viewmore absolute bottom-auto right-auto top-1/2 left-1/2 opacity-1 duration-300 {film.description ? 'mt-5' : 'mt-16'}">
                <a class="border p-2 flex justify-center w-40 items-center" href="{_.kebabCase(film.category[0])}">
                  <span class="text-white font-fef uppercase text-xs tracking-widest mr-3">
                    View more
                  </span>
                  <RightArrow width="12px"></RightArrow>
                </a>
              </div>
            </div>
          </div>
        {:else}
          <div class="relative pb-fluid-video bg-black overflow-hidden h-0 our-films-gallery">
            <img class="opacity-50 duration-300 w-full lg:w-auto" src="{getImage(film.pictures, 640)}" alt="{film.name}">
            <div class="absolute top-1/2 left-1/2 right-0 translate-negative-50 w-full">
              <div class="font-fef uppercase text-gray-400 text-xs tracking-fef text-center py-2">
                <p>
                  <a class="items-center justify-center flex" href="{_.kebabCase(film.category[0])}">
                    {film.category}
                  </a>
                </p>
              </div>
              <div class="text-center">
                <a href="{_.kebabCase(film.category[0])}/{film.slug}"><h1 class="font-playfair text-white font-bold lg:text-xl leading-10">{film.name}</h1></a>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
