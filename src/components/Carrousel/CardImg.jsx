import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import image1 from '../../assets/imgsCarrousel/Reloj.jpg'
import image2 from '../../assets/imgsCarrousel/electro.webp'
import image3 from '../../assets/imgsCarrousel/tlefonos.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardImg = () => {

  let arrayImg = [
    image1,
    image2,
    image3
  ]
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop = {true}
      style={{
        height: "630px"
      }}
    >
    {arrayImg.map((img, index) => (
      <SwiperSlide key={index} >
      <img src={img} style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
      }} />
    </SwiperSlide>
    )
     )
    }
    
    </Swiper>
  );
};

export default CardImg;
