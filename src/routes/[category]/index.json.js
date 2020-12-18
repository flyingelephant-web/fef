import animations from './_animations.js';
import commercials from './_commercials.js'
import digitalCampaigns from './_digitalCampaigns.js'
import documentaries from './_documentaries.js'
import influencerFilms from './_influencerFilms.js'
import tvShows from './_tvShows.js'


const lookup = new Map();
lookup.set('animations', animations)
lookup.set('commercials', commercials)
lookup.set('digital-campaigns', digitalCampaigns)
lookup.set('documentaries', documentaries)
lookup.set('influencer-films', influencerFilms)
lookup.set('tv-shows', tvShows)


export async function get(req, res) {
	const { category } = req.params;
	if(lookup.has(category)) {
		const contents = JSON.stringify(lookup.get(category).map(post => {
			return {
				title: post.name,
				slug: post.slug
			};
		}));
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(contents);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Category Not found`
		}));
	}

}


// export async function get(req, res, next) {
// 	// the `slug` parameter is available because this file
// 	// is called [slug].json.js
// 	const { slug } = req.params;

// 	const article = await db.get(slug);

// 	if (article !== null) {
// 		res.setHeader('Content-Type', 'application/json');
// 		res.end(JSON.stringify(article));
// 	} else {
// 		next();
// 	}
// }
