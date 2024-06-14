"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { HiOutlineSearch, HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from "./../Shared/firebaseConfig";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const userImage = session?.user?.image ?? "/man.png";

  const db = getFirestore(app);

  // const saveuserinfo = async() => {
  //   if(session?.user){
  //     await setDoc(doc(db, "user", session?.user?.email), {
  //       userName: session?.user?.name,
  //       email: session?.user?.email,
  //       userImage: session?.user?.image,
  //     })
  //   }
  // }

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (!session?.user?.email) {
      console.error("User email is not available.");
      return;
    }

    try {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
      console.log("User information saved successfully.");
    } catch (error) {
      console.error("Error saving user information:", error);
    }
  };

  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <Image
        src="/logo.png"
        alt="log"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        onClick={() => router.push("/")}
      />

      <button className="bg-black text-white p-2 rounded-full px-4">
        Home
      </button>
      <button
        className="font-semibold p-2 rounded-full px-4"
        onClick={() => router.push("/pin-builder")}
      >
        Create
      </button>

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
            onClick={() => router.push("/" + session.user?.email)}
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
