<script>
import RightArrow from "./UI/RightArrow.svelte";
import _ from 'lodash'
import Helper from '../helpers/util'
const helper = new Helper();
  let ourFilms = [
    {
    "description": "One of the most informative and educated campaign for us.",
    "duration": 69,
    "name": "Love Depot DVC 2022 - Director's Cut",
    "pictures": {
        "uri": "/videos/726614591/pictures/1462842397",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/video/1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d",
        "sizes": [{
            "width": 200,
            "height": 150,
            "link": "https://i.vimeocdn.com/video/1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_200x150?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
            "width": 640,
            "height": 360,
            "link": "https://i.vimeocdn.com/video/1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_640x360?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
            "width": 1280,
            "height": 720,
            "link": "https://i.vimeocdn.com/video/1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_1280x720?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
            "width": 1920,
            "height": 1080,
            "link": "https://i.vimeocdn.com/video/1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_1920x1080?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1462842397-8a11be1c5fd72e788620cf5c3a125961a522cee26074f3e8f2926cd12d99d170-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }],
        "resource_key": "4015982b35bdb9e9dba0482a3be68691faa9fe52",
        "default_picture": false
    },
    "type": "",
    "uri": "/videos/726614591",
    "user": {
        "name": "Flying Elephant Films"
    },
    "slug": "love-depot-dvc-2022-directors-cut",
    "id": "",
    "title": "",
    "blurb": "",
    "content": "",
    "category": ['digital-campaigns'],
    "tags": [],
    "articleImage": "",
    "thumbnailImage": "",
    "index":2,
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
    "description": "We have solved the mystery of unwanted rashes, itching and skin infections for you. All thanks to detective Devgn!\n\n\nHere is our latest production with the one and only Ajay Devgn and Asha Negi\nClient: Piramal\nBrand: Tetmosol Soap\nAgency: BBDO India\nDirector: Siddharth Sen \nDOP: Ranga Rajan \nExecutive Producers: Sanjana Jain & Riddhindra\nCreative Supervisor: Smriti Sharma Bhaskar\nChief AD: Ragini Gunjan\nDA: Kshitij Kamble\nProduction Designer: Maddy\nStill Photographer: Jitu Salvani\nLine Production: Tafreeh Studios\nEditor: Zubin\nPost Producer: Bhishm Wahi\nOnline: Vishwas Red Flagg\nColorist: Swapnil\nMusic: Aman Pant\nAD Entourage:-\nStylist: Naveen Shetty\nHMU: Harish Wadhane & Hakim Alim",
    "duration": 30,
    "name": "Tetmosol Hindi Soap Film 2022",
    "pictures": {
        "uri": "/videos/728060617/pictures/1465493375",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/video/1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d",
        "sizes": [{
            "width": 200,
            "height": 150,
            "link": "https://i.vimeocdn.com/video/1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_200x150?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
            "width": 640,
            "height": 360,
            "link": "https://i.vimeocdn.com/video/1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_640x360?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
            "width": 1280,
            "height": 720,
            "link": "https://i.vimeocdn.com/video/1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_1280x720?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }, {
            "width": 1920,
            "height": 1080,
            "link": "https://i.vimeocdn.com/video/1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_1920x1080?r=pad",
            "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1465493375-e5f52a29d99079a2e630bd9f0ebd0960d5c6a49a518cff732bd6dba7504f1118-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }],
        "resource_key": "1810a2c266359aeac4b2c60c444058bb27036a25",
        "default_picture": false
    },
    "type": "",
    "uri": "/videos/728060617",
    "user": {
        "name": "Flying Elephant Films"
    },
    "slug": "tetmosol-hindi-soap-film-2022-ajay-devgn-and-asha-negi",
    "id": "",
    "title": "",
    "blurb": "",
    "content": "",
    "category": ['commercials'],
    "tags": [],
    "articleImage": "",
    "thumbnailImage": "",
    "index":1,
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
    }]
  },
  {
    "description": null,
    "duration": 153,
    "name": "PULSAR - BATTLING GRAVITY (DIRECTOR'S CUT)",
    "pictures": {
      "uri": "/videos/713221500/pictures/1437883617",
      "active": true,
      "type": "custom",
      "base_link": "https://i.vimeocdn.com/video/1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d",
      "sizes": [{
        "width": 200,
        "height": 150,
        "link": "https://i.vimeocdn.com/video/1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_200x150?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }, {
        "width": 640,
        "height": 360,
        "link": "https://i.vimeocdn.com/video/1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_640x360?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }, {
        "width": 1280,
        "height": 720,
        "link": "https://i.vimeocdn.com/video/1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_1280x720?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }, {
        "width": 1920,
        "height": 1080,
        "link": "https://i.vimeocdn.com/video/1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_1920x1080?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1437883617-988f81ce6810ff60c84a9420772a555b62e2e8443891fa1214ef5be69bac171e-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }],
      "resource_key": "27f94183623a867ed16479d5601c90e24a93324b",
      "default_picture": false
    },
    "type": "",
    "uri": "/videos/713221500",
    "user": {
      "name": "Flying Elephant Films"
    },
    "slug": "pulsar-battling-gravity-directors-cut",
    "id": "",
    "title": "",
    "blurb": "",
    "content": "",
    "category": ['digital-campaigns'],
    "tags": [],
    "articleImage": "",
    "thumbnailImage": "",
    "index":3,
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
    }]
  },
  {
    "description": "Check out our new snackin’ ad. <br></br> They smelled - Nihari, Paneer Nawabi, Mutton Gullautiya, Chicken 65, what did you smell? One of the Side effects of shooting for @BiryaniByKilo was that it left our stomach growling. If we were to speak the truth, it still makes our stomach growl. <br><br> Brand: Biryani By Kilo<br> Agency: The Glitch<br> Production House: Flying Elephant Films<br> Talent: Rajpal Yadav<br> <br> Director: Sanjana Jain <br> Creative Director: Smriti Sharma Bhaskar <br> DA: Debraj Goswami<br> DOP: Ankit Mhatre <br> Producer: Riddhindra Chaudhary<br> Production Designer: Maitrayee Arya<br> Line Production: Black Panther Productions<br> Post Supervisor: Bhishm Wahi<br> Stills: Rohit Singh <br> <br> HMU: Rajiv Kanojia<br> Stylist: Pratishruti<br> Rajpal’s Team:<br> HMU: Sandeep Chaudhary <br> Personal Attendant: Lalan Tiwari <br> Casting Director- Pranjali Khera<br> Editor: Abhishek Das<br> Colorist: Gaurav Arora<br> Music and Sound Designing: Ankur Shrivastava<br> Sound Recordist: Shiv Murat<br> Gaffer: Nasaurallah",
    "duration": 63,
    "name": "Biryani By Kilo Digital Film With Rajpal Yadav",
    "pictures": {
      "uri": "/videos/700407279/pictures/1415933690",
      "active": true,
      "type": "custom",
      "base_link": "https://i.vimeocdn.com/video/1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d",
      "sizes": [{
        "width": 200,
        "height": 150,
        "link": "https://i.vimeocdn.com/video/1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_200x150?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }, {
        "width": 640,
        "height": 360,
        "link": "https://i.vimeocdn.com/video/1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_640x360?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }, {
        "width": 1280,
        "height": 720,
        "link": "https://i.vimeocdn.com/video/1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_1280x720?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }, {
        "width": 1920,
        "height": 1080,
        "link": "https://i.vimeocdn.com/video/1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_1920x1080?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1415933690-cb684793005779fcef1014888499b39f0d7bdf4d81da81c57cecf2071d691296-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }],
      "resource_key": "ca3c9d2aff5272d5f433d2902df541967be866a0",
      "default_picture": false
    },
    "type": "",
    "uri": "/videos/700407279",
    "user": {
      "name": "Flying Elephant Films"
    },
    "slug": "biryani-by-kilo-digital-film-with-rajpal-yadav",
    "id": "",
    "title": "",
    "blurb": "",
    "content": "",
    "category": ['commercials'],
    "tags": [],
    "articleImage": "",
    "thumbnailImage": "",
    "index":3,
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
    }]
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
              <div class="our-films-viewmore absolute bottom-auto right-auto top-1/2 left-1/2 opacity-1 duration-300 {film.description ? 'mt-12' : 'mt-16'}">
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
