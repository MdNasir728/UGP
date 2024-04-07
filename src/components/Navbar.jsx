import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col w-[22rem] h-[100vh] border-r-2 border-gray-100 bg-[#262730] gap-8 fixed top-0 left-0">
      <div>
        <div className="flex items-center justify-center gap-2 cursor-pointer p-6 bg-[#0e1016]">
          <Avatar className="w-12 h-12">
            <AvatarImage src="src/assets/logo.jpg" alt="logo" />
          </Avatar>
          <h1 className="font-bold text-3xl text-white">AquaInsight</h1>
        </div>
      </div>
      <div className="bg-[#0e1016] p-8 m-4 rounded-xl flex flex-col gap-4">
        <div className="font-bold text-xl w-full ">
          <NavLink
            className="py-2 px-4 rounded-xl flex self-stretch hover:text-gray-600"
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="font-bold text-xl w-full">
          <NavLink
            className="py-2 px-4 hover:text-gray-600 rounded-xl flex self-stretch"
            to="/check-water-quality"
          >
            Check Water Quality
          </NavLink>
        </div>
        <div className="font-bold text-xl w-full">
          <NavLink
            className="py-2 px-4 hover:text-gray-600 rounded-xl flex self-stretch"
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div className="font-bold text-xl w-full">
          <NavLink
            className="py-2 px-4 rounded-xl hover:text-gray-600 flex self-stretch"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
