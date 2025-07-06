import React from "react"
import "style.css"
import StoreInfo from "./Header"
import RighterHead from "./Righter"
import Lefter from "./Lefter"

const IndexPopup = () => {
  return (
    <div className="popup-container">
      <StoreInfo />
      <RighterHead/>
      <Lefter/>
    </div>
  )
}

export default IndexPopup
