// import Image from 'next/image'
// import React from 'react'
// import UserTag from '../UserTag'

// const PinItems = ({pin}) => {

//     const user = {
//         name: pin?.userName,
//         image: pin?.userImage
//     }

//   return (
//     <div>
//        <div className='relative before:absolute before:h-full before:w-full before:rounded-3xl before:z-10 hover:before:bg-gray-600 before:opacity-50 cursor-pointer'>
//          <Image 
//             src={pin.image}
//             alt={pin.title}
//             width={500}
//             height={500}
//             className='rounded-3xl cursor-pointer relative z-0'
//          />
//        </div>
//        <h2 className='font-bold text-[18px] mb-1 mt-2 line-clamp-2'>{pin.title}</h2>
//        <UserTag user={user} />
//     </div>
//   )
// }

// export default PinItems

import Image from 'next/image';
import React from 'react';
import UserTag from '../UserTag';

const PinItems = ({ pin }) => {
  const user = {
    name: pin?.userName,
    image: pin?.userImage,
  };

  const userTagStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem',
  };

  const userImageStyle = {
    width: '1.5rem', // Adjust size
    height: '1.5rem', // Adjust size
    borderRadius: '50%',
    marginRight: '0.5rem',
  };

  const userNameStyle = {
    fontSize: '0.75rem', // Adjust size
    fontWeight: '500',
  };

  return (
    <div className='break-inside-avoid'>
      <div className='relative before:absolute before:h-full before:w-full before:rounded-3xl before:z-10 hover:before:bg-gray-600 before:opacity-50 cursor-pointer'>
        <Image 
          src={pin.image}
          alt={pin.title}
          width={500}
          height={500}
          className='rounded-3xl cursor-pointer relative z-0'
        />
      </div>
      <h2 className='font-bold text-[18px] mb-1 mt-2 line-clamp-2 capitalize  text-gray-600'>{pin.title}</h2>
      <div style={userTagStyle}>
        <img
          src={user.image}
          alt={user.name}
          style={userImageStyle}
        />
        <span style={userNameStyle}>{user.name}</span>
      </div>
    </div>
  );
};

export default PinItems;
