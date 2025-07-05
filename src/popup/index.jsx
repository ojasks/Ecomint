import React from "react"
import ScoreCard from "./ScoreCard"
import LogList from "./LogList"
import EcoPoints from "./EcoPoints"
import "style.css"
import StoreInfo from "./Header"

const IndexPopup = () => {
  return (
    <div className="popup-container">
      <StoreInfo />
      <EcoPoints />
      <ScoreCard />
      <LogList />
    </div>
  )
}

export default IndexPopup
