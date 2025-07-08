import React from "react"
import "style.css"
import StoreInfo from "./Header"
import RighterHead from "./Righter"
import Lefter from "./Lefter"

const IndexPopup = () => {
  return (
    <div className="popup-container">
      <StoreInfo />
      <div className="content-container">
        <Lefter/>
      <RighterHead/>
      </div>
    </div>
  )
}

export default IndexPopup
