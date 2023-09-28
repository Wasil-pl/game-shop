import React from 'react';
import Platforms from '../../features/Platforms.js/Platforms';
import SwiperSlideComponent from '../../features/SwiperSlideComponent/SwiperSlideComponent';
import Divider from '../../layout/Divider/Divider';
import { useSelector } from 'react-redux';
import {
  getSaleProducts,
  getNewProducts,
} from '../../../redux/productsRedux.js';

const Home = () => {
  const saleProducts = useSelector(getSaleProducts);
  console.log('saleProducts:', saleProducts);
  const newProducts = useSelector(getNewProducts);

  return (
    <div>
      <Divider text={'Explore our games by platform'} />
      <Platforms />
      <SwiperSlideComponent data={saleProducts} title="Sale" />
      <SwiperSlideComponent
        data={newProducts}
        title="New releases"
        variant="section-no-divider"
      />
    </div>
  );
};

export default Home;
