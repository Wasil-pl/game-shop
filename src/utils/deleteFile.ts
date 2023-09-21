import { unlinkSync } from 'fs';

const picturePath = './public/uploads/images/';

export const deleteFile = (fileName: string) => {
  try {
    unlinkSync(picturePath + fileName);
  } catch (err) {
    console.error('Error deleting file:', err);
  }
};
