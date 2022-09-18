import { useState, useEffect } from "react";
import Modal from "../../moleculs/modals";

// icons
import LocationIcon from "../../../assets/Group 3.svg";
import HomeIcon from "../../../assets/Mask Group 4.svg";
import ChecklistLocation from "../../../assets/Mask Group 5.svg";

// modal
import PickLocation from "../../moleculs/modals/PickLocation";

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

export default function SearchComponent() {
  // state
  const [modalPickLocation, setModalPickLocation] = useState(false);
  const [searchFeaturs, setSearchFeatures] = useState([]);
  const [modalTypeProperty, setModalTypeProperty] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  // handle modal
  const handleOpenModalLocation = () =>
    setModalPickLocation(!modalPickLocation);
  const handleOpenModalTypeProperty = () =>
    setModalTypeProperty(!modalTypeProperty);
  const handleModalStatus = () => setModalStatus(!modalStatus);

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
      <div className="px-[15px] mt-8">
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
      </div>

      {/* modal */}
      <PickLocation
        visibility={modalPickLocation}
        closeModal={() => setModalPickLocation(false)}
        dataLocation={dataLocation}
      />
      <Modal
        visibility={modalTypeProperty}
        fieldName="typeOfProperty"
        title="Type of Property"
        closeModal={() => setModalTypeProperty(false)}
        data={typeOfProperty}
      />
      <Modal
        visibility={modalStatus}
        fieldName="status"
        title="Status"
        closeModal={() => setModalStatus(false)}
        data={status}
      />
    </>
  );
}
