"use client"
import React, { useState } from 'react'
import ImageUploader from './../components/ImageUploader'
import UserTag from './../components/UserTag'
import { useSession } from 'next-auth/react'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import app from '../Shared/firebaseConfig'

const PinForm = () => {
  const {data:session} = useSession();
  const  [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [link, setLink] = useState();
  const [file, setFile] = useState();

  const storage = getStorage(app);

  const onSave = () => {
    console.log("titlt:", title, desc, link, file);
    uploadFile();
  }

  const uploadFile = () => {
    const storageRef = ref(storage, 'pintrest/'+file.name);

    uploadBytes(storageRef ,file).then((snapshot) => {
      console.log("File Uploaded");
    }).then(resp => {
      getDownloadURL(storageRef).then(url => {
        console.log("url", url)
      })
    })

  }

  return (
    <div className='bg-white p-16 rounded-2xl'>
        <div className='flex justify-end mb-6'>
          <button 
          onClick={() => onSave()}
          className='bg-red-500 p-2 text-white font-semibold px-3 rounded-lg'>
            Save
          </button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
           <ImageUploader setFile={(file) => setFile(file)}/>
            <div className='col-span-2'> 
              <div className='w-[100%]'>
                  <input 
                  type='text' 
                  placeholder='Add your title'
                  onChange={(e) => setTitle(e.target.value)}
                  className='text-[35px] outline-none font-bold w-full border-b-[2px] border-gray-400 placeholder-gray-400'/>
                  <h2 className='text-[12px] w-full text-gray-400'>The first 40 characters are</h2>
                  <UserTag user={session?.user}/>
                  <textarea 
                    type="text"
                    placeholder='Add a detailed description'
                    onChange={(e) => setDesc(e.target.value)}
                    className='outline-none w-full mt-8 pb-4 text-[14px] border-b-[2px] border-gray-400 placeholder-gray-400'
                  />
                  <input
                    type='text'
                    placeholder='Add a description link'
                    onChange={(e) => setLink(e.target.value)}
                    className='outline-none w-full pb-4 mt-[90px] border-b-[2px] border-gray-400 placeholder-gray-400'
                  />
              </div>
              <div>


              </div>
            </div>
        </div>
    </div>
  )
}

export default PinForm;