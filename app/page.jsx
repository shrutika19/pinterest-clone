"use client"

import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import { useEffect, useState } from "react";
import PinLists from "./components/Pins/PinLists";

export default function Home() {
  const db = getFirestore(app);
  const [listOfPins,setListOfPins] = useState([]);

  useEffect(() => {
    getAllPins()
  }, [])

  // const getAllPins = async() => {
  //   setListOfPins([]);
  //   const q = query(collection(db,'pintrest-posts'));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     setListOfPins((listOfPins) => 
  //       [...listOfPins, doc.data()]);
  //   });
  // }

  const getAllPins = async () => {
    const q = query(collection(db, 'pintrest-posts'));
    const querySnapshot = await getDocs(q);
    const pins = [];
    querySnapshot.forEach((doc) => {
      pins.push(doc.data());
    });
    setListOfPins(pins);
  };

  return (
    <>
      <PinLists listOfPins={listOfPins}/>
    </>
  );
}