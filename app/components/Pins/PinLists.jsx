
import React, { useEffect } from 'react'

const PinLists = ({listOfPins}) => {
   
console.log("listOfPins", listOfPins)

  return (
    <div>
        {listOfPins.map((item, index) => (
            <div key={index}>
                {item.title}
            </div>
        ))}
    </div>
  )
}

export default PinLists