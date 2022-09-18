import { useEffect } from "react";

// icons
import LeftIcon from "../../../assets/arrow-left3.svg";
import KebabIcon from "../../../assets/more-vertical.svg";
import MoonIcon from "../../../assets/moon.svg";
import SendIcon from "../../../assets/send4.svg";

export default function LandLord({ visibility, closeModal }) {
  useEffect(() => {
    let productDetail = document.getElementById("product-detail-page");
    if (visibility) {
      productDetail.style.cssText =
        "margin-top : -40%; transition : margin 0.2s ease-in-out;";
    } else {
      productDetail.style.cssText =
        "margin-top : 0%;transition : margin 0.2s ease-in-out;";
    }
  }, [visibility]);

  return (
    <div
      className={`w-full h-full bg-white absolute left-0 z-50 transition-all duration-200 ease-in-out ${
        visibility ? "-bottom-0" : "-bottom-[100%]"
      }`}
    >
      {/* header */}
      <div className="bg-gray100 flex items-center justify-between p-[22px]">
        <div className="flex gap-8">
          <img
            src={LeftIcon}
            alt="left icon"
            onClick={closeModal}
            className="cursor-pointer"
          />

          <div className="flex items-center gap-[5px]">
            <div className="w-[5px] h-[5px] rounded-full bg-gray600" />
            <h1 className="font-medium text-gray600 text-sm">Shahrul M</h1>
          </div>
        </div>

        <img src={KebabIcon} alt="Kebab" />
      </div>
      {/* end header */}

      {/* main */}
      <div className="text-center flex justify-center flex-col items-center mt-[118px]">
        <div className="">
          <img src={MoonIcon} alt="Moon" className="mx-auto" />
          <h1 className="font-medium text-gray700 text-[20px] mt-[20px]">
            Landlord Offline
          </h1>
          <p className="w-[196px] text-[14px] text-gray600 mt-[7px]">
            Lorem ipsum dolor sit amet consecteur adipsing elit
          </p>
        </div>
      </div>
      {/* end main */}

      {/* footer */}
      <div className="absolute bg-[#F3F3F3] w-full bottom-0 p-[22px] flex items-center gap-3">
        <input
          placeholder="Type Message…"
          className="w-full rounded-full text-[12px] text-[#ACB1C0] font-semibold px-4 py-[9px] border-none outline-none"
        />
        <img src={SendIcon} alt="send" className="cursor-pointer" />
      </div>
      {/* end footer */}
    </div>
  );
}
