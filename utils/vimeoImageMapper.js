import animations from '../src/routes/[category]/_animations.js';
import commercials from '../src/routes/[category]/_commercials.js';
import digitalCampaign from '../src/routes/[category]/_digitalCampaigns.js';
import documentaries from '../src/routes/[category]/_documentaries.js';
import influencerFilms from '../src/routes/[category]/_influencerFilms.js';
import tvShows from '../src/routes/[category]/_tvShows.js';
import _ from 'lodash'
import fs from 'fs'

const animations = tvShows;

import fetch from "node-fetch";


const requests = _.map(animations, async (animation) => {
  const videoURL = animation.uri.replace('videos', 'video');
  const requestURL = fetch(`https://player.vimeo.com${videoURL}/config?autopause=1`)
  return requestURL
})

async function fetchVideo() {
  const responses = await Promise.all(requests)
  // const data = await response.json()
  const errors = responses.filter((response) => !response.ok);

  if (errors.length > 0) {
    throw errors.map((response) => Error(response.statusText));
  }
  const json = responses.map((response) => response.json());
  const data = await Promise.all(json);
  const thumbs = _.map(data, d => {
    const base = d.video.thumbs.base.match(/-.*/)
    return {token: base, uri: `/videos/${d.video.id}`}
  })

  const mapped =  _.map(animations, animation => {
    const found = _.find(thumbs, thumb => {
      return thumb.uri === animation.uri;
    })
   const sizes = _.map(animation.pictures.sizes, size => {
      size.link = size.link.replace('_', `${found.token}_`).replace('.jpg', '')
      return size
    })
    animation.pictures.sizes = sizes;
    return animation;
  })

  fs.writeFileSync(`imageMapped.js`, JSON.stringify(_.compact(_.flatten(mapped))));
}


fetchVideo()


