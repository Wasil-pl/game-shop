import { IMAGES_URL } from '../config';

export const generateImageList = (data) => {
  const fields = [
    'mainPicture',
    'pictureOne',
    'pictureTwo',
    'pictureThree',
    'pictureFour',
    'pictureFive',
  ];
  return fields
    .filter((field) => data[field])
    .map((field) => ({
      original: IMAGES_URL + data[field],
      thumbnail: IMAGES_URL + data[field],
    }));
};
