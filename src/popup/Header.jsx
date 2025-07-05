import React, { useState, useEffect } from "react";

function StoreInfo() {
  const [storeName, setStoreName] = useState("");

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
  }, []);

  return (
    <div className="header-container">
    <div className= "store header"style={{ padding: 16 }}>
      <h2>
        🌱STORE:{" "}
        <span style={{ color: "black" }}>{storeName || "Unknown Site"}</span>
      </h2>

      <div className="point-card">
      <p><strong>EcoTokens:</strong> 🌿 120</p>
      {/* <text>Earn more by choosing sustainable products</text> */}
    </div>
    </div>
    </div>

  );
}

export default StoreInfo;

