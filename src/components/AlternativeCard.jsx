import React from "react"

const AlternativeCard = ({ product }) => {
  return (
    <div style={{ border: "1px dashed green", padding: "10px", marginTop: "10px" }}>
      <p>♻️ Try <strong>{product.name}</strong></p>
      <a href={product.url} target="_blank" rel="noreferrer">View Alternative</a>
    </div>
  )
}

export default AlternativeCard
