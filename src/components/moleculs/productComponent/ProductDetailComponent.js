import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import ProductRelated from "./ProductRelated";

// image
import Slider1 from "../../../assets/slider1.png";
import Slider2 from "../../../assets/slider2.png";
import Slider3 from "../../../assets/slider3.png";
import UserImage from "../../../assets/the-rock.png";

// icon
import LoveIcon from "../../../assets/Mask Group 11.svg";
import LeftIcon from "../../../assets/arrow-left3.svg";

// data
const imgSlider = [Slider1, Slider2, Slider3];
const detailProduct = [
  { name: "Type of Property", value: "House" },
  { name: "Status", value: "Rent" },
  { name: "Certification", value: "SHM" },
  { name: "Area", value: "250M<sup className='-ml-1'>2</sup>" },
  { name: "Building Size", value: "300M<sup className='-ml-1'>2</sup>" },
  { name: "Full Furnished", value: "Yes" },
  { name: "Garage", value: "Yes" },
  { name: "Carport", value: "Not Available" },
];
// data product
const products = [
  {
    rooms: 2,
    bath: 1,
    size: 250,
    price: 800,
    name: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
    imageBanner: [Slider1, Slider2, Slider3],
  },
  {
    rooms: 2,
    bath: 1,
    size: 250,
    price: 800,
    name: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
    imageBanner: [Slider1, Slider2, Slider3],
  },
  {
    rooms: 2,
    bath: 1,
    size: 250,
    price: 800,
    name: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
    imageBanner: [Slider1, Slider2, Slider3],
  },
];

export default function ProductDetailComponent() {
  const navigate = useNavigate();

  // handle back
  const handleBack = () => navigate("/search");

  return (
    <>
      <div className="px-[22px]">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView="auto"
          spaceBetween={12}
        >
          {imgSlider?.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={LeftIcon}
                className="absolute top-6 left-3 z-40 cursor-pointer"
                onClick={handleBack}
              />

              <img src={item} />

              <img
                src={LoveIcon}
                alt="icon love"
                className="absolute top-3 right-3 z-40"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* detail product */}
        <div>
          <h1 className="text-[10px] text-gray600 font-medium opacity-70 mt-[10px] flex items-center gap-1">
            2 ROOMS
            <div className="w-[3px] h-[3px] bg-gray600 rounded-full" />
            1 BATH ROOMS
            <div className="w-[3px] h-[3px] bg-gray600 rounded-full" />
            25M<sup className="-ml-1">2</sup>
          </h1>

          <h1 className="font-medium text-xl text-gray700 mt-[3px]">
            Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian
          </h1>
        </div>
        {/* end product detail */}

        <div className="mt-[26px]">
          {/* product filter */}
          <div className="flex gap-[10px]">
            {["Detail", "Map", "Loan"].map((item, index) => (
              <button
                key={index}
                className={`text-[12px] font-medium text-gray600 rounded-full ${
                  index == 0 ? "bg-gray300 px-11 py-2" : "bg-gray100 px-5 py-2"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* end product filter */}

          {/* product */}
          <div>
            {detailProduct.map((item, index) => (
              <div key={index} className="my-[19px]">
                <h1 className="font-semibold text-gray600 text-[10px] opacity-80">
                  {item.name}
                </h1>

                <div
                  dangerouslySetInnerHTML={{ __html: item.value }}
                  className="text-gray700 text-[14px] font-semibold"
                />

                <hr className="w-full h-[1.5px] border-none bg-gray-100 mt-2" />
              </div>
            ))}
          </div>
          {/* end product */}
        </div>
      </div>

      {/* credit */}
      <div className="bg-gray100 px-[22px] py-[31px] flex items-center justify-between">
        <div>
          <h1 className="font-medium text-gray700 text-[12px]">
            See loan options. start from
          </h1>
          <h1 className="text-[16px] text-gray700 font-bold">
            Rp 1.2 Juta <span className="font-normal text-[12px]">/ Bulan</span>
          </h1>
        </div>

        <button className="bg-gray700 text-white px-9 rounded-full py-[12px]">
          LOAN
        </button>
      </div>
      {/* end credit */}

      {/* user */}
      <div className="flex items-center px-[22px] py-[13px] gap-[16px] border-y">
        <img src={UserImage} alt="user" className="w-16 h-16" />

        <div>
          <h1 className="text-gray700 text-[14px] font-medium">
            Shahrul M Landlord
          </h1>
          <p className="text-[10px] text-gray600">Last Online : 1 hour ago</p>
        </div>
      </div>
      {/* end user */}

      {/* product recomended */}
      <div className="mt-[39px]">
        <ProductRelated
          products={products}
          title="Property near Jakarta Selatan"
        />
      </div>
      {/* end product recomended */}
    </>
  );
}
