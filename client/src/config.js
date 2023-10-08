export const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';
export const IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/public/uploads/images/'
    : 'http://localhost:8000/public/uploads/images/';

export const SLIDER_IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/public/sliderImage/'
    : 'http://localhost:8000/public/sliderImage/';

export const BANNER_IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/public/bannerImages/'
    : 'http://localhost:8000/public/bannerImages/';
