import React from "react"
import ScoreCard from "./ScoreCard"
import LogList from "./LogList"
import "style.css"
import StoreInfo from "./Header"
import Righter from "./Righter"

const IndexPopup = () => {
  return (
    <div className="popup-container">
      <StoreInfo />
      <ScoreCard />
      <LogList />
    </div>
  )
}

export default IndexPopup
