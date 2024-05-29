import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

const UserTag = () => {
    const {data:session} = useSession();
  return (
    <div className='mt-8'>
        {session ? 
            <div className='flex gap-4'>
            <Image 
                src={session?.user.image}
                alt='user image'
                width={50}
                height={50}
                className='rounded-full'
            />
            <div>
                <h2 className='text-[14px] font-medium'>{session.user.name}</h2>
                <h2 className='text-[12px]'>{session.user.email}</h2>
            </div>
        </div> : null
        }
    </div>
  )
}

export default UserTag