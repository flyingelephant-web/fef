import animations from './_animations.js';
import commercials from './_commercials.js'
import digitalCampaigns from './_digitalCampaigns.js'
import documentaries from './_documentaries.js'
import influencerFilms from './_influencerFilms.js'
import tvShows from './_tvShows.js'

import _ from 'lodash';

const allPosts = {
'animations': animations,
'commercials': commercials,
'digital-campaigns': digitalCampaigns,
'documentaries': documentaries,
'influencer-films': influencerFilms,
'tv-shows': tvShows
}

const lookup = {
  'animations': new Map(),
  'commercials': new Map(),
  'digital-campaigns': new Map(),
  'documentaries': new Map(),
  'influencer-films': new Map(),
  'tv-shows': new Map()
}

_.keys(lookup).forEach(lookupKey => {
  allPosts[lookupKey].forEach(post => {
    lookup[lookupKey].set(post.slug, JSON.stringify(post))
  })
})



export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { category, slug } = req.params;
	if (lookup[category].has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup[category].get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
