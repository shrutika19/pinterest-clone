"use client"

import React, { useEffect, useState } from 'react'
import app from '../Shared/firebaseConfig'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import UserProfile from '../components/UserProfile'

const ProfilePage = ({params}) => {

  const db = getFirestore(app);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    console.log(params.userId.replace('%40', '@'))
    if(params){
      getUserInfo(params.userId.replace('%40', '@'))
    }
  }, [params])


  const getUserInfo =  async(email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      console.log("doc data", docSnap.data());
      setUserInfo(docSnap.data())
    }else{
      console.log("no such doc");
    }
  }

  return (
    <div>
     {userInfo?  <UserProfile userInfo={userInfo}/> : null}
    </div>
  )
}

export default ProfilePage