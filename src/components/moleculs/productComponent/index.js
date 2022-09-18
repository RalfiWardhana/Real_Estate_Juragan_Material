import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// icon
import LoveIcon from "../../../assets/Mask Group 11.svg";

export default function ProductComponent({ ...props }) {
  return (
    <>
      {/* header */}
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView="auto"
          spaceBetween={12}
        >
          {props?.imageBanner.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                className="h-[150px] w-full object-cover rounded-md overflow-hidden"
              />

              <img
                src={LoveIcon}
                alt="icon love"
                className="absolute top-3 right-3 z-40"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* end header */}

      {/* detail */}
      <div>
        <h1 className="text-[10px] text-gray600 font-medium opacity-70 mt-[10px] flex items-center gap-1">
          {props?.rooms} ROOMS
          <div className="w-[3px] h-[3px] bg-gray600 rounded-full" />
          {props?.bath} BATH ROOMS
          <div className="w-[3px] h-[3px] bg-gray600 rounded-full" />
          {props?.size}M<sup className="-ml-1">2</sup>
        </h1>

        <h1 className="font-medium text-sm text-gray700 mt-1">{props?.name}</h1>

        <h1 className="text-[10px] text-gray600 font-medium opacity-70 mt-[5px]">
          Rp {props?.price} Juta
        </h1>
      </div>
      {/* end detail */}
    </>
  );
}
