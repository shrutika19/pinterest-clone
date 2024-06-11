 "use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

const UserTag = ({user}) => {
    //const {data:session} = useSession();
  return (
    <div className=''>
        {user ? 
            <div className='flex gap-3 items-center'>
            <Image 
                src={user.image}
                alt='user image'
                width={45}
                height={45}
                className='rounded-full'
            />
            <div>
                <h2 className='text-[14px] font-medium'>{user.name}</h2>
                <h2 className='text-[12px]'>{user.email}</h2>
            </div>
        </div> : null
        }
    </div>
  )
}

export default UserTag