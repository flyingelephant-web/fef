<script>
import RightArrow from "./UI/RightArrow.svelte";
import _ from 'lodash'
import Helper from '../helpers/util'
const helper = new Helper();
  let ourFilms = [
    {
      "description": null,
      "duration": 60,
      "name": "Series Promo - Spirit of Scotland",
      "pictures": {
        "uri": "/videos/404927617/pictures/874937441",
        "sizes": [{
            "width": 200,
            "link": "https://i.vimeocdn.com/video/874937441_200x150.jpg?r=pad"
          },
          {
            "width": 640,
            "link": "https://i.vimeocdn.com/video/874937441_640x360.jpg?r=pad"
          },
          {
            "width": 1280,
            "link": "https://i.vimeocdn.com/video/874937441_1280x720.jpg?r=pad"
          },
          {
            "width": 1920,
            "link": "https://i.vimeocdn.com/video/874937441_1920x1080.jpg?r=pad"
          }
        ]
      },
      "type": "",
      "uri": "/videos/404927617",
      "user": {
        "name": "Flying Elephant Films"
      },
      "id": "",
      "title": "",
      "blurb": "",
      "content": "",
      "slug": "series-promo-spirit-of-scotland",
      "category": ['tvShows'],
      "tags": [],
      "articleImage": "",
      "thumbnailImage": "",
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
      "duration": 45,
      "name": "OYO Road Trippin",
      "pictures": {
        "uri": "/videos/455723292/pictures/958382881",
        "sizes": [{
            "width": 200,
            "link": "https://i.vimeocdn.com/video/958382881_200x150.jpg?r=pad"
          },
          {
            "width": 640,
            "link": "https://i.vimeocdn.com/video/958382881_640x360.jpg?r=pad"
          },
          {
            "width": 1280,
            "link": "https://i.vimeocdn.com/video/958382881_1280x720.jpg?r=pad"
          },
          {
            "width": 1920,
            "link": "https://i.vimeocdn.com/video/958382881_1920x1080.jpg?r=pad"
          }
        ]
      },
      "type": "",
      "uri": "/videos/455723292",
      "user": {
        "name": "Flying Elephant Films"
      },
      "id": "",
      "title": "",
      "blurb": "",
      "content": "",
      "slug": "oyo-road-trippin",
      "category": ['commercials'],
      "tags": [],
      "articleImage": "",
      "thumbnailImage": "",
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
      "duration": 45,
      "name": "100 PIPERS 8YO Brand Film_ Client Cut",
      "pictures": {
        "uri": "/videos/472144425/pictures/982250832",
        "sizes": [{
            "width": 200,
            "link": "https://i.vimeocdn.com/video/982250832_200x150.jpg?r=pad"
          },
          {
            "width": 640,
            "link": "https://i.vimeocdn.com/video/982250832_640x360.jpg?r=pad"
          },
          {
            "width": 1280,
            "link": "https://i.vimeocdn.com/video/982250832_1280x720.jpg?r=pad"
          },
          {
            "width": 1920,
            "link": "https://i.vimeocdn.com/video/982250832_1920x1080.jpg?r=pad"
          }
        ]
      },
      "type": "",
      "uri": "/videos/472144425",
      "user": {
        "name": "Flying Elephant Films"
      },
      "id": "4",
      "title": "",
      "blurb": "",
      "content": "",
      "slug": "100-pipers-8yo-brand-film_-client-cut",
      "category": ['digitalCampaigns'],
      "tags": [],
      "articleImage": "",
      "thumbnailImage": "",
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
    "duration": 135,
    "name": "Commercial for HP Printers",
    "pictures": {
      "uri": "/videos/404922291/pictures/874932493",
      "sizes": [
        {
          "width": 200,
          "link": "https://i.vimeocdn.com/video/874932493_200x150.jpg?r=pad"
        },
        {
          "width": 640,
          "link": "https://i.vimeocdn.com/video/874932493_640x360.jpg?r=pad"
        },
        {
          "width": 1280,
          "link": "https://i.vimeocdn.com/video/874932493_1280x720.jpg?r=pad"
        },
        {
          "width": 1920,
          "link": "https://i.vimeocdn.com/video/874932493_1920x1080.jpg?r=pad"
        }
      ]
    },
    "type": "",
    "uri": "/videos/404922291",
    "user": {
      "name": "Flying Elephant Films"
    },
    "id": "",
    "title": "",
    "blurb": "",
    "content": "",
    "slug": "commercial-for-hp-printers",
    "category": ['commercials'],
    "tags": [],
    "articleImage": "",
    "thumbnailImage": "",
    "author": [],
    "media": [
      {
        "id": "",
        "mediaType": "",
        "src": "",
        "caption": ""
      }
    ],
    "crew": [
      {
        "id": "",
        "name": "",
        "photo": "",
        "bio": "",
        "role": ""
      }
    ],
    "awards": [
      {
        "id": "",
        "title": "",
        "year": "",
        "blurb": "",
        "reference": "",
        "image": ""
      }
    ],
    "partners": [
      {
        "id": "",
        "name": "",
        "website": "",
        "image": ""
      }
    ],
    featured: false
  }
  ]

  const getImage = (images, size) => {
   const picture = _.find(images.sizes, {'width': size}) || _.find(images.sizes, {'width': 640}) || _.find(images.sizes, {'width': 1280}) || _.find(images.sizes, {'width': 1920})
   return picture && picture.link
 }
</script>
<section class="mt-40">
  <h2 class="text-center font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">Our films</h2>
  <div class="max-w-screen-xl mx-auto mt-5">
    <div class="grid grid-cols-4">
      {#each ourFilms as film }
        {#if film.featured}
          <div class="col-span-3 row-span-3 relative bg-black our-films-gallery">
            <img class="opacity-50 duration-300" src="{getImage(film.pictures, 1280)}" alt="{film.name}">
            <div class="absolute top-1/2 left-1/2 right-0 translate-negative-50 w-full">
              <div class="font-fef uppercase text-gray-400 text-xs tracking-fef text-center">
                <p>
                  <a href="{_.kebabCase(film.category[0])}">
                    {film.category}
                  </a>
                </p>
              </div>
              <div class="text-center">
                <a href="{_.kebabCase(film.category[0])}/{film.slug}"><h1 class="font-playfair text-white font-bold text-5xl leading-10">{film.name}</h1></a>
              </div>
              <div class="text-center our-films-description duration-300 px-48">
                <p class="font-pb-regular text-sm text-gray-400 mt-5">{film.description || ''}</p>
              </div>
              <div class="our-films-viewmore absolute bottom-auto right-auto top-1/2 left-1/2 opacity-1 duration-300 {film.description ? 'mt-5' : 'mt-16'}">
                <a class="border p-2 flex justify-center w-40" href="{_.kebabCase(film.category[0])}">
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
            <img class="opacity-50 duration-300" src="{getImage(film.pictures, 640)}" alt="{film.name}">
            <div class="absolute top-1/2 left-1/2 right-0 translate-negative-50 w-full">
              <div class="font-fef uppercase text-gray-400 text-xs tracking-fef text-center">
                <p>
                  {film.category}
                </p>
              </div>
              <div class="text-center">
                <a href="{_.kebabCase(film.category[0])}/{film.slug}"><h1 class="font-playfair text-white font-bold text-xl leading-10">{film.name}</h1></a>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
