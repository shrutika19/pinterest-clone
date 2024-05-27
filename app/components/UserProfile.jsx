import Image from "next/image";
import React from "react";

const UserProfile = ({userInfo}) => {
    console.log(userInfo)

    return(
      <div className="flex flex-col items-center">
        <Image 
          src={userInfo.userImage}
          alt="user Image"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h2 className="text-[30px] font-semibold">
          {userInfo.userName}
        </h2>

        <h2 className="text-gray-400">
          {userInfo.email}
        </h2>

        <button
          className="bg-gray-200 mt-5 p-2 px-3 rounded-full font-semibold"
        >
          Share
        </button>
      </div>
    )
};

export default UserProfile;
