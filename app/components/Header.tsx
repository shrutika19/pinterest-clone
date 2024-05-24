"use client";

import Image from "next/image";
import React from "react";
import { HiOutlineSearch, HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  const userImage = session?.user?.image ?? "/man.png";

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
      {session?.user ? (
        <>
          <Image
            src={userImage}
            alt="user-image"
            width={50}
            height={50}
            className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
          />
          <button
            onClick={() => signOut()}
            className="font-semibold p-2 rounded-full px-4"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn()}
          className="font-semibold p-2 rounded-full px-4"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
