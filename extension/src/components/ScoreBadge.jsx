// import React from "react"

// const ScoreBadge = ({ score }) => {
//   return (
//     <span style={{ padding: "4px 8px", backgroundColor: "#e0ffe0", borderRadius: "6px" }}>
//       🌿 Score: {score}
//     </span>
//   )
// }

// export default ScoreBadge
import React from "react"

const ScoreBadge = ({ score, grade }) => {
  const getColor = () => {
    switch(grade) {
      case 'A': return '#10b981';
      case 'B': return '#84cc16';
      case 'C': return '#f59e0b';
      default: return '#ef4444';
    }
  }

  return (
    <div style={{ 
      padding: "8px 12px", 
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: `2px solid ${getColor()}`,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      margin: "8px 0"
    }}>
      <span style={{ fontSize: "18px" }}>🌿</span>
      <div>
        <div style={{ fontWeight: "bold" }}>Sustainability Score: {score}/10</div>
        <div style={{ color: getColor(), fontWeight: "bold" }}>Grade: {grade}</div>
      </div>
    </div>
  )
}

export default ScoreBadge