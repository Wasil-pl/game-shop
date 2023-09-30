import {
  Playstation,
  Xbox,
  Windows,
  NintendoSwitch,
} from 'react-bootstrap-icons';

export const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'XBOX':
      return <Xbox />;
    case 'PLAYSTATION':
      return <Playstation />;
    case 'PC':
      return <Windows />;
    case 'NINTENDO':
      return <NintendoSwitch />;
    default:
      return null;
  }
};

export const getPlatformCssClass = (platform) => {
  switch (platform) {
    case 'XBOX':
      return 'xbox';
    case 'PLAYSTATION':
      return 'playstation';
    case 'PC':
      return 'windows';
    case 'NINTENDO':
      return 'nintendo';
    default:
      return null;
  }
};

export const getStockStatusColor = (inStock) => {
  if (inStock > 8) return 'green';
  if (inStock > 4) return 'yellow';
  if (inStock > 0) return 'orange';
  return 'red';
};
