// import React from "react"

// const AlternativeCard = ({ product }) => {
//   return (
//     <div style={{ border: "1px dashed green", padding: "10px", marginTop: "10px" }}>
//       <p>♻️ Try <strong>{product.name}</strong></p>
//       <a href={product.url} target="_blank" rel="noreferrer">View Alternative</a>
//     </div>
//   )
// }

// export default AlternativeCard


import React from "react"

const AlternativeCard = ({ product }) => {
  return (
    <div style={{ 
      border: "1px dashed #10b981",
      padding: "12px",
      marginTop: "12px",
      borderRadius: "8px",
      backgroundColor: "#f0fdf4"
    }}>
      <p style={{ margin: "0 0 8px 0" }}>
        ♻️ <strong>Greener Alternative:</strong> {product.name}
      </p>
      <a 
        href={product.url} 
        target="_blank" 
        rel="noreferrer"
        style={{
          color: "#10b981",
          textDecoration: "none",
          fontWeight: "500",
          display: "inline-block",
          padding: "4px 8px",
          backgroundColor: "white",
          borderRadius: "4px",
          border: "1px solid #10b981"
        }}
      >
        View Alternative
      </a>
    </div>
  )
}

export default AlternativeCard