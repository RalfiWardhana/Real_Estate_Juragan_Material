import Layout from "../../components/moleculs/layout";
import HeaderSection from "../../components/organism/SearchPage/HeaderSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProductComponent from "../../components/moleculs/productComponent";
import { useNavigate } from "react-router-dom";

// image
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.png";

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
  {
    rooms: 2,
    bath: 1,
    size: 250,
    price: 800,
    name: "Rumah Tipe 68 Jalan Petukangan Jakarta Selatan , Budi Hasian",
    imageBanner: [Slider1, Slider2, Slider3],
  },
];

export default function SearchPage() {
  // state
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: "",
    typeOfProperty: "",
    status: "",
  });
  const { location, typeOfProperty, status } = searchData;

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem("search"));

    setSearchData({
      ...searchData,
      location: oldData.location,
      typeOfProperty: oldData.typeOfProperty,
      status: oldData.status,
    });
  }, [localStorage.getItem("search")]);

  // get detail product
  const handleGetDetailProduct = () => navigate(`/product-detail/2`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      exit={{ opacity: 0 }}
    >
      <Layout footer="search">
        <div className="w-full bg-white h-screen overflow-y-scroll scrollbar-hide px-[22px] pt-[22px] pb-28">
          <HeaderSection
            location={location}
            typeOfProperty={typeOfProperty}
            status={status}
          />

          {/* main */}
          <div>
            <h1 className="text-[12px] text-gray600 font-normal opacity-60 mt-[23px]">
              13212 Homes found at{" "}
              <span className="text-gray700 font-semibold">{location}</span>
            </h1>

            <div className="-mt-3">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="my-8 cursor-pointer"
                  onClick={handleGetDetailProduct}
                >
                  <ProductComponent {...item} />
                </div>
              ))}
            </div>
          </div>
          {/* end main */}
        </div>
      </Layout>
    </motion.div>
  );
}
