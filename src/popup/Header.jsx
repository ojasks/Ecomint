import React, { useState, useEffect } from "react";


function StoreInfo() {
  const [storeName, setStoreName] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);

  const getCurrentStoreName = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url) {
      try {
        const url = new URL(tab.url);
        const hostname = url.hostname.replace("www.", ""); // remove 'www.'
        setStoreName(hostname);
      } catch (error) {
        console.error("Invalid URL", error);
      }
    }
  };

  useEffect(() => {
    getCurrentStoreName();
  const listener = (message) => {
    if (message.type === "PRODUCT_HOVERED") {
      setProductName(message.name);
      setProductImage(message.image);
      fetchEcoScore(message.name);
    }
  };

  chrome.runtime.onMessage.addListener(listener);

  return () => {
    chrome.runtime.onMessage.removeListener(listener);
  };
}, []);

  return (
    <div>
    <div className="header-container">
      <span>STORE: {storeName || "Unknown Site"}</span>
      <span>EcoTokens: 🌿{Math.floor((Math.random()*10000))}</span>
    </div>
    <span className="product-image">
      {productImage && <img src={productImage} alt={productName}  />}
    </span>
    </div>
  );
}

export default StoreInfo;