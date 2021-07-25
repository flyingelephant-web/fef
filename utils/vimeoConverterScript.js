const _ = require('lodash')
const films = require('../src/data/films')
const fs = require('fs');
const animations = require('../src/data/animations');
const commercials = require('../src/data/commercials');
const digitalCampaign = require('../src/data/digital-campaign');
const documentaries = require('../src/data/documentaries');
const influencerFilms = require('../src/data/influencer-films');
const tvShows = require('../src/data/tv-shows');
const changes = require('./data/changes-25-07-2021')

const currentData = _.map(changes, 'clip');

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

const filterFields = _.map(currentData, v => _.pick(v, ['description', 'duration', 'name','pictures', 'type', 'uri', 'user.name']))



const organized = _.map(filterFields, film => {
  const images = _.filter(film.pictures.sizes, size => {
    return _.includes([200, 640, 1280, 1920], size.width)
  })
  film.pictures.sizes = _.uniqBy(images, 'width');
  film.slug = convertToSlug(film.name)
  return _.merge(film, films[0])
})

fs.writeFileSync(`${__dirname}/data/changes.js`, JSON.stringify(organized));
