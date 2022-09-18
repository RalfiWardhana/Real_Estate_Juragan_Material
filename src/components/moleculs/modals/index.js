export default function Modal({
  visibility,
  title,
  closeModal,
  data,
  fieldName,
}) {
  // select value
  const handleSelectValue = (value) => {
    const oldData = JSON.parse(localStorage.getItem("search"));

    fieldName == "typeOfProperty"
      ? localStorage.setItem(
          "search",
          JSON.stringify({ ...oldData, typeOfProperty: value })
        )
      : localStorage.setItem(
          "search",
          JSON.stringify({ ...oldData, status: value })
        );

    closeModal();
  };

  return (
    <>
      <div
        className={`w-full h-full bg-gray300 absolute left-0 z-40 transition-all duration-200 bg-opacity-75 cursor-pointer ease-in-out bottom-0 ${
          visibility ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeModal}
      />
      <div
        className={`absolute bottom-0 bg-white w-full z-50 rounded-t-[10px] transition-all ease-in-out duration-200 ${
          visibility ? "-bottom-0" : "-bottom-[100%]"
        }`}
      >
        {/* header */}
        <div className="flex items-center gap-3 py-[18px] px-5">
          <i
            className="bx bx-x text-gray600 cursor-pointer"
            style={{ fontSize: "25px" }}
            onClick={closeModal}
          ></i>

          <h1 className="text-gray600 text-[14px] font-medium">{title}</h1>
        </div>

        <hr className="w-full h-[1.8px] bg-gray200 border-none" />
        {/* end header */}

        <div className="px-5">
          {data.map((item, index) => (
            <h1
              key={index}
              className="text-[14px] text-gray700 font-medium my-8"
            >
              <a
                className="cursor-pointer"
                onClick={() => handleSelectValue(item)}
              >
                {item}
              </a>
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}

Modal.defaultProps = {
  visibility: false,
  title: "Modal",
  data: [],
  closeModal: () => {},
  fieldName: "",
};
