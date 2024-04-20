import "./SpecialMenu.css";

import img1 from "../../images/special-menu-1.jpg";
import img2 from "../../images/special-menu-2.jpg";
import img3 from "../../images/special-menu-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

const SpecialMenu = () => {
  return (
    <div className="Special-menu-section" id="SpecialMenu">
      <h1>Today&apos;s Special </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ex cum
        hic et nostrum pariatur sint .
      </p>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        spaceBetween={0}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        className="mySwiper swiper-sepcial"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SpecialMenu;
