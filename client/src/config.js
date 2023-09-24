export const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';
export const IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/uploads/images/'
    : 'http://localhost:8000/uploads/images/';

export const SLIDER_IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/slider/'
    : 'http://localhost:8000/sliderImage/';
