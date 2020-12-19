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

  capitalizeFirstLetter(string) {
    string = string.replace('-', ' ')
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}

export default Helper;
