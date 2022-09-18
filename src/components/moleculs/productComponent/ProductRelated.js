import React from "react";
import ProductComponent from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function ProductRelated({ products, title }) {
  return (
    <div>
      <h1 className="text-[14px] font-medium text-gray700 pl-[22px]">
        {title}
      </h1>

      <div className="mt-4">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView="auto"
          spaceBetween={-5}
          grabCursor={true}
        >
          {products.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                marginLeft: "22px",
                width: "245px",
                paddingRight: `${index == products.length - 1 && "20px"}`,
              }}
            >
              <ProductComponent {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
