import { useState, useEffect } from "react";
import Button from "../../../atoms/Button";

// icons
import LocationIcon from "../../../../assets/Group 3.svg";
import HomeIcon from "../../../../assets/Mask Group 4.svg";
import ChecklistLocation from "../../../../assets/Mask Group 5.svg";
import SelectData from "./SelectData";

// fake data
const dataLocation = [
  "Jakarta Utara",
  "Jakarta Timur",
  "Jakarta Barat",
  "Jakarta Pusat",
  "Bekasi",
  "Tangerang",
];
const typeOfProperty = ["House", "Townhouse", "Apartement", "Room"];
const status = ["Rent", "Buy", "Auction"];

export default function SearchFilter({ visibility, closeModal }) {
  // state
  const [modalPickLocation, setModalPickLocation] = useState(false);
  const [searchFeaturs, setSearchFeatures] = useState([]);
  const [modalTypeProperty, setModalTypeProperty] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [hideComponent, setHideComponent] = useState(false);

  // handle modal
  const handleOpenModalLocation = () => {
    setModalPickLocation(!modalPickLocation);
    setHideComponent(true);
  };
  const handleOpenModalTypeProperty = () => {
    setModalTypeProperty(!modalTypeProperty);
    setHideComponent(true);
  };
  const handleModalStatus = () => {
    setModalStatus(!modalStatus);
    setHideComponent(true);
  };

  useEffect(() => {
    let dataSearch = JSON.parse(localStorage.getItem("search"));

    setSearchFeatures([
      {
        icon: LocationIcon,
        value: dataSearch?.location,
        title: "Pick Location",
        action: handleOpenModalLocation,
      },
      {
        icon: HomeIcon,
        value: dataSearch?.typeOfProperty,
        title: "Type of Property",
        action: handleOpenModalTypeProperty,
      },
      {
        icon: ChecklistLocation,
        value: dataSearch?.status,
        title: "Status",
        action: handleModalStatus,
      },
    ]);
  }, [localStorage.getItem("search")]);

  return (
    <>
      <div
        className={`w-full h-full bg-gray300 absolute left-0 z-50 transition-all duration-200 bg-opacity-75 cursor-pointer ease-in-out bottom-0 ${
          visibility ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeModal}
      />
      <div
        className={`absolute bg-white w-full left-0 z-50 rounded-t-[10px] transition-all ease-in-out duration-200 py-[15px] pl-[15px] ${
          visibility ? "-top-0" : "-top-[100%]"
        } ${hideComponent == false ? "-top-0" : "-top-[100%]"}`}
      >
        {searchFeaturs.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-[23px] my-[13px] cursor-pointer"
            onClick={item.action}
          >
            {/* icon */}
            <img src={item?.icon} alt="icon" className="w-7" />

            {/* feature */}
            <div className="w-full">
              <p className="text-[10px] text-gray600 font-medium">
                {item.title}
              </p>
              <h1 className="font-medium text-[14px] text-gray700">
                {item.value}
              </h1>

              <hr className="mt-[12.5px]" />
            </div>
          </div>
        ))}

        <div className="pr-[22px] mt-[22px]">
          <Button
            width="100%"
            text="FIND"
            onClick={() => {
              setHideComponent(false);
              closeModal();
            }}
          />
        </div>
      </div>

      <SelectData
        visibility={modalPickLocation}
        closeModal={() => {
          setModalPickLocation(false);
          setHideComponent(false);
        }}
        type="location"
        datas={dataLocation}
      />

      <SelectData
        visibility={modalTypeProperty}
        closeModal={() => {
          setModalTypeProperty(false);
          setHideComponent(false);
        }}
        type="typeOfProperty"
        datas={typeOfProperty}
        title="Type of Property"
      />

      <SelectData
        visibility={modalStatus}
        closeModal={() => {
          setModalStatus(false);
          setHideComponent(false);
        }}
        type="status"
        datas={status}
        title="Status"
      />
    </>
  );
}
