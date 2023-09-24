import { join } from 'path';

export const acceptedFileTypes = ['image/png', 'image/gif', 'image/jpeg'];

export const CORS_OPTIONS = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

export const STATIC_PATH = {
  rootPath: join(__dirname, '../../', 'public'),
};
