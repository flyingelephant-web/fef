import { find } from 'lodash';

class Helper {
  getVideoUrl (url) {
    url = url.replace('/videos/','video/')
    return url;
  }

  getImageBySize(postImages, size, fallbackSize) {
    const image = find(postImages.sizes, {'width': size}) || find(postImages.sizes, {'width': fallbackSize})
    return image.link
  }
}

export default Helper;
