import Layout from "../../components/moleculs/layout";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// icons
import NotifIcon from "../../assets/Mask Group 1.svg";
import HeartIcon from "../../assets/Mask Group 2.svg";
import SliderImage from "../../components/organism/HomePage/SliderImage";
import SearchComponent from "../../components/organism/HomePage/SearchComponent";
import Button from "../../components/atoms/Button";

const icons = [NotifIcon, HeartIcon];

function HomePage() {
  const navigate = useNavigate();

  const handleFind = () => {
    navigate(`/search`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <div
          id="home-page"
          className="w-full bg-white h-[calc(100vh_-_117px)] overflow-y-scroll scrollbar-hide"
        >
          {/* header title */}
          <div className="flex items-center justify-between p-[15px]">
            <h1 className="text-xl font-medium text-black">
              Real Estate Finder
            </h1>

            <div className="flex items-center gap-[10px]">
              {icons.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt="image header"
                  className="w-9 h-9"
                />
              ))}
            </div>
          </div>
          {/* end header title */}

          {/* slider banner */}
          <SliderImage />
          {/* end slider banner */}

          {/* app filter */}
          <SearchComponent />
          {/* end app filter */}

          {/* button search */}
          <div className="mt-[25.5px] mb-[15.5px]">
            <Button text="FIND" onClick={handleFind} />
          </div>
          {/* end button search */}
        </div>
      </Layout>
    </motion.div>
  );
}

export default HomePage;
