import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { HiArrowCircleUp } from "react-icons/hi";

const ImageUploader = () => {
  return (
    <div className='h-[450px] bg-[#e9e9e9] rounded-lg'>
        <label className='m-5 flex flex-col justify-center items-center cursor-pointer h-[90%]
        border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600 '>
          <HiArrowCircleUp className='text-[22px]'/>
          <h2 className='font-semibold'>Click to Upload</h2>
          <input id='dropdown-file' type='file' class="hidden"/>
        </label>
    </div>
  )
}

export default ImageUploader