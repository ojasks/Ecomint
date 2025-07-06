import React, { useState, useEffect } from "react";

function Lefter() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    const listener = (message) => {
      if (message.type === "PRODUCT_HOVERED") {
        setProductName(message.name);
        setProductImage(message.image);
      }
    };

    chrome.runtime.onMessage.addListener(listener);
    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    };
  }, []);

  return (
    <div className="lefter-container">
      {productImage ? (
        <>
          <img src={productImage} alt={productName} />
          <p >{productName}</p>
        </>
      ) : (
        <p >Hover over a product to preview</p>
      )}
    </div>
  );
}

export default Lefter;
