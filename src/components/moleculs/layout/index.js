import React from "react";
import Footer from "./Footer";

export default function Layout({ children, footer }) {
  return (
    <div className="h-screen flex justify-center">
      <div className="max-w-sm w-full mx-3 bg-gray100 my-auto h-[calc(100vh_-_30px)] relative overflow-hidden">
        {children}
        <Footer status={footer} />
      </div>
    </div>
  );
}
