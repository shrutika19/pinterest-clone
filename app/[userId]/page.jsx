"use client"

import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import UserProfile from '../components/UserProfile'
import PinLists from '../components/Pins/PinLists'
import app from '@/app/Shared/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ProfilePage = ({params}) => {

  const db = getFirestore(app);

  const [userInfo, setUserInfo] = useState();
  const [listOfPins, setListOfPins] = useState([]);

  useEffect(() => {
    console.log(params.userId.replace('%40', '@'))
    if(params){
      getUserInfo(params.userId.replace('%40', '@'))
    }
  }, [params])

 
  console.log("userinfo data from pinlist", userInfo)

  useEffect(() => {
      if (userInfo && userInfo.email) {
          getUserPins();
      }
  }, [userInfo]);

  const getUserPins = async () => {
      try {
          const q = query(
              collection(db, 'pintrest-posts'),
              where("email", '==', userInfo.email)
          );

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              console.log(doc.id, '=>', doc.data());
              setListOfPins(listOfPins => [...listOfPins, doc.data()])
          });
      } catch (error) {
          console.error("Error fetching user pins: ", error);
      }
  };

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
     <PinLists listOfPins={listOfPins} />
    </div>
  )
}

export default ProfilePage