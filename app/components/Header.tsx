import Image from "next/image";
import React from "react";
import { HiOutlineSearch, HiBell, HiChat } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <Image
        src="/logo.png"
        alt="log"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />

      <button className="bg-black text-white p-2 rounded-full px-4">
        Home
      </button>
      <button className="font-semibold p-2 rounded-full px-4">Create</button>

      <div className="bg-[#e9e9e9] p-3   gap-3 items-center rounded-full w-full hidden md:flex">
        <HiOutlineSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>

      <HiOutlineSearch className="text-[25px] text-gray-500 md:hidden" />
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      <Image
        src="/man.png"
        alt="user-image"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Header;
