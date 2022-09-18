import { useEffect, useState } from "react";

// icon
import LocationIcon from "../../../assets/Group 3.svg";

export default function PickLocation({
  visibility = false,
  closeModal = {},
  dataLocation = [],
}) {
  // state
  const [inputFilter, setInputFilter] = useState("");
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    let homePage = document.getElementById("home-page");
    if (visibility) {
      homePage.style.cssText =
        "margin-top : -40%; transition : margin 0.2s ease-in-out;";
    } else {
      homePage.style.cssText =
        "margin-top : 0%;transition : margin 0.2s ease-in-out;";
      setSearchData(null);
      setInputFilter("");
    }
  }, [visibility]);

  // handle select value
  const selectValue = (value) => {
    const oldData = JSON.parse(localStorage.getItem("search"));
    localStorage.setItem(
      "search",
      JSON.stringify({ ...oldData, location: value })
    );
    closeModal();
  };

  // handle search
  const handleSearchData = (value) => {
    let inputValue = value.toLowerCase();
    let result = [];

    dataLocation.filter((e) => {
      if (e.toLowerCase().startsWith(inputValue)) result.push(e);
    });

    setSearchData(result);
  };

  return (
    <div
      className={`w-full h-full bg-white absolute left-0 z-50 transition-all duration-200 ease-in-out ${
        visibility ? "-bottom-0" : "-bottom-[100%]"
      }`}
    >
      {/* header */}
      <div className="flex items-center gap-5">
        <div className="pl-4 -pr-5 py-3">
          <i
            className="bx bx-x text-gray600 cursor-pointer mt-2"
            style={{ fontSize: "30px" }}
            onClick={closeModal}
          ></i>
        </div>

        <div className="h-11 w-[1px] bg-gray200" />

        <input
          value={inputFilter}
          placeholder="Type keyword here…"
          className="text-sm text-gray600 font-medium opacity-50 outline-none border-none"
          onChange={(e) => {
            setInputFilter(e.target.value);
            handleSearchData(e.target.value);
          }}
        />
      </div>
      {/* end header */}

      <hr className="w-full h-[1.8px] bg-gray200 border-none" />

      {/* location */}
      <div className="mt-[14px] px-[20px]">
        <h1 className="text-gray600 text-sm mb-[14px]">Most people find :</h1>

        {(!searchData ? dataLocation : searchData).map((item, index) => (
          <div key={index} className="my-3">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => selectValue(item)}
            >
              <img src={LocationIcon} alt="location" className="w-6 h-6" />
              <h1 className="text-xs text-gray600 font-normal">{item}</h1>
            </div>

            <hr className="w-full h-[1.3px] bg-gray200 border-none my-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
