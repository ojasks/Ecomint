import React, { useState, useEffect } from "react";

function StoreInfo() {
  const [storeName, setStoreName] = useState("");
  const [productName, setProductName] = useState("");
  const [ecoScore, setEcoScore] = useState(null);

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

  const fetchEcoScore = async (productName) => {
    try {
      const res = await fetch("https://api.demo.openlca.org/v1/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: productName }),
      });

      const data = await res.json();
      setEcoScore(data.score);
    } catch (err) {
      console.error("Failed to fetch score", err);
    }
  };

  useEffect(() => {
    getCurrentStoreName();
    
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "PRODUCT_HOVERED") {
        setProductName(message.name);
        fetchEcoScore(message.name);
      }
    });
    
    // Clean up the listener when component unmounts
    return () => {
      chrome.runtime.onMessage.removeListener();
    };
  }, []);

  return (
    <div className="header-container">
      <span>STORE: {storeName || "Unknown Site"}</span>
      <span>EcoTokens: 🌿{ecoScore ?? "—"}</span>
    </div>
  );
}

export default StoreInfo;