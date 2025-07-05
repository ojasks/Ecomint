import React from "react"

const ScoreBadge = ({ score }) => {
  return (
    <span style={{ padding: "4px 8px", backgroundColor: "#e0ffe0", borderRadius: "6px" }}>
      🌿 Score: {score}
    </span>
  )
}

export default ScoreBadge
