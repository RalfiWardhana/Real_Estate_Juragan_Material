import React from "react";

export default function Button({
  text,
  position,
  bgColor,
  width,
  textColor,
  textSize,
  rounded,
  padding,
  onClick,
}) {
  const buttonStyleLeft = "mr-auto";
  const buttonStyleCenter = "mx-auto ";
  const buttonStyleRight = "ml-auto";
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        width: width,
        color: textColor,
        fontSize: textSize,
        borderRadius: rounded,
        padding: padding,
      }}
      className={`flex justify-center ${
        position === "left"
          ? buttonStyleLeft
          : position === "center"
          ? buttonStyleCenter
          : buttonStyleRight
      }`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Button",
  position: "center",
  bgColor: "#42505C",
  width: "330px",
  textColor: "white",
  textSize: "12px",
  rounded: "50px",
  padding: "10px 0px 10px 0px",
};
