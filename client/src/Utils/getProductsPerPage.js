export const getProductsPerPage = (mode, data) => {
  switch (mode) {
    case 'bigDesktop':
      return data?.bigDesktop ? data.bigDesktop : 20;
    case 'tablet':
      return data?.tablet ? data.tablet : 12;
    case 'mobile':
      return data?.mobile ? data.mobile : 8;
    case 'small-mobile':
      return data?.smallMobile ? data.smallMobile : 4;
    default:
      return data?.desktop ? data.desktop : 20;
  }
};
