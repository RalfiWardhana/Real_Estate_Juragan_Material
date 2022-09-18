import { useNavigate } from "react-router-dom";
import LeftIcon from "../../../assets/arrow-left3.svg";
import SearchFilter from "../../../components/moleculs/modals/SearchFilter";
import { useState } from "react";

export default function HeaderSection({ location, typeOfProperty, status }) {
  // state
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  // handle redirect back
  const handleRedirectBack = () => navigate("/");

  return (
    <>
      <div className="flex items-center justify-between">
        <div
          className="bg-gray100 shadow-md w-[44px] h-[44px] flex items-center justify-center cursor-pointer rounded-md"
          onClick={handleRedirectBack}
        >
          <img src={LeftIcon} alt="icon-left" />
        </div>

        <div
          className="w-[calc(100%_-_64px)] bg-gray100 shadow-md rounded-md flex items-center justify-between p-3 cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          <h1 className="text-xs font-medium text-gray600 ">{`${status} ${typeOfProperty} of ${location}`}</h1>

          <i
            className="bx bx-search"
            style={{
              fontSize: "18px",
              color: "#79828B",
            }}
          ></i>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray100 mt-[17px]" />

      <SearchFilter
        visibility={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </>
  );
}
