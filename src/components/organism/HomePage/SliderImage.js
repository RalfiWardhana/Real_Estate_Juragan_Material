import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// image slider
import Slider1 from "../../../assets/slider1.png";
import Slider2 from "../../../assets/slider2.png";
import Slider3 from "../../../assets/slider3.png";

const sliders = [Slider1, Slider2, Slider3];

export default function SliderImage() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      slidesPerView="auto"
      spaceBetween={12}
      grabCursor={true}
    >
      {sliders.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: "300px",
            marginLeft: `${index == 0 && "15px"}`,
            paddingRight: `${index == sliders.length - 1 && "20px"}`,
          }}
        >
          <img
            src={item}
            alt="image banner"
            className="h-[144.58px] rounded-md overflow-hidden w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
