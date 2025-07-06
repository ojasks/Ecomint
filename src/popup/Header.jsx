import React, { useState, useEffect } from "react";

function StoreInfo() {
  const [storeName, setStoreName] = useState("");

  const getCurrentStoreName = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url) {
      try {
        const url = new URL(tab.url);
        const hostname = url.hostname.replace("www.", "");
        setStoreName(hostname);
      } catch (error) {
        console.error("Invalid URL", error);
      }
    }
  };

  useEffect(() => {
    getCurrentStoreName();
  }, []);

  return (
    <div className="header-container">
      <span>STORE: {storeName || "Unknown Site"}</span>
      <span>EcoTokens: 🌿{Math.floor((Math.random()*10000))}</span>
    </div>
    
  );
}

export default StoreInfo;