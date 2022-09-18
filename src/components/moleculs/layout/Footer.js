import React, { Fragment, useState } from "react";

// icons
import SearchIcon from "../../../assets/001-magnifying-glass.svg";
import ChatIcon from "../../../assets/002-chat-bubble.svg";
import CategoryIcon from "../../../assets/003-list.svg";
import HistoryIcon from "../../../assets/004-history.svg";
import UserIcon from "../../../assets/005-user.svg";
import FilterIcon from "../../../assets/filter2.svg";
import SlidersIcon from "../../../assets/sliders1.svg";

// modal
import LandLord from "../modals/LandLord";

// image
import MessageIcon from "../../../assets/message-square.svg";

// menu
const menuDefault = [
    {
      name: "SEARCH",
      icon: SearchIcon,
      path: "",
    },
    {
      name: "CHAT",
      icon: ChatIcon,
      path: "",
    },
    {
      name: "CATEGORY",
      icon: CategoryIcon,
      path: "",
    },
    {
      name: "HISTORY",
      icon: HistoryIcon,
      path: "",
    },
    {
      name: "PROFILE",
      icon: UserIcon,
      path: "",
    },
  ],
  menuSearch = [
    {
      name: "Filter",
      icon: FilterIcon,
      path: "",
    },
    {
      name: "Sort",
      icon: SlidersIcon,
      path: "",
    },
  ];

export default function Footer({ status = "default" }) {
  const [modalLandLord, setModalLandLord] = useState(false);

  return (
    <>
      <div className="absolute w-full h-auto bottom-0 z-40">
        <div className="relative bg-white w-full h-full shadow-[0px_-4px_16px_#0000000F] rounded-t-[10px] overflow-hidden">
          {status == "default" && (
            <div className="p-[11px] flex justify-center gap-10">
              {menuDefault.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex-col text-center"
                >
                  {/* icon */}
                  <div className="bg-gray600 w-8 h-8 rounded-full mx-auto -mb-1">
                    <img
                      src={item.icon}
                      alt="menu"
                      className="w-full h-full p-2"
                    />
                  </div>

                  {/* text */}
                  <a className="text-[9px] font-medium text-gray600">
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          )}

          {status == "search" && (
            <div className="flex justify-center items-center gap-[51px] py-5 z-40">
              {menuSearch.map((item, index) => (
                <Fragment key={index}>
                  <div className="cursor-pointer flex items-center gap-[10px]">
                    {/* icon */}
                    <img
                      src={item.icon}
                      alt="menu"
                      className="w-[15px] h-[15px]"
                    />

                    {/* text */}
                    <a className="text-[14px] font-medium text-gray600">
                      {item.name}
                    </a>
                  </div>

                  {menuSearch.length - 1 !== index && (
                    <div className="w-[1.6px] bg-gray200 h-8" />
                  )}
                </Fragment>
              ))}
            </div>
          )}

          {status == "productDetail" && (
            <div className="flex justify-between items-center gap-[51px] py-5 px-5">
              <div>
                <h6 className="text-[10px] text-gray600 font-semibold opacity-80">
                  Price Start From :
                </h6>
                <h1 className="text-[12px] text-gray600 font-semibold opacity-80">
                  Rp 800 Juta
                </h1>
              </div>

              <div
                className="bg-gray600 flex items-center gap-2 py-2 px-6 rounded-md cursor-pointer"
                onClick={() => setModalLandLord(true)}
              >
                <img src={MessageIcon} alt="message" />
                <h1 className="text-gray100 text-[14px] font-medium">
                  Contact Landlord
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>

      {status == "productDetail" && (
        <LandLord
          visibility={modalLandLord}
          closeModal={() => setModalLandLord(false)}
        />
      )}
    </>
  );
}
