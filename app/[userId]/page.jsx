"use client"

import React, { useEffect } from 'react'
import app from '../Shared/firebaseConfig'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ProfilePage = ({params}) => {

  const db = getFirestore(app);

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
      console.log("doc data", docSnap);
    }else{
      console.log("no such doc");
    }
  }

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage