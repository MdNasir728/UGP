import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col w-[22rem] h-[100vh] border-r-2 border-gray-100 bg-[#262730] gap-8 relative top-0 left-0">
        <Navbar />
      </div>
      <div className="w-[calc(100%-22rem)] right-0">

      <Outlet />
      </div>
    </div>
  );
};

export default Layout;
