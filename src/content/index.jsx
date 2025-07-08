import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import AlternativeCard from "../components/AlternativeCard";
import ScoreBadge from "../components/ScoreBadge";
import { logAction } from "../hooks/useEcoLogger";
import { getEcoScore, findAlternative } from '../utils';

const ContentScript = () => {
  useEffect(() => {
  const getProductTitle = () => {
    return document.querySelector("#productTitle")?.textContent?.trim() || 
           document.querySelector(".product-title")?.textContent?.trim() || "Nothing here folks";
  };

  const injectUI = (score, alternative) => {
    const targetNode = document.querySelector(".product-price-container") || 
                      document.querySelector(".price-section") ||
                      document.body;

    // Clean up previous injection
    document.getElementById("eco-mint-root")?.remove();

    // Create new root
    const rootEl = document.createElement("div");
    rootEl.id = "eco-mint-root";
    targetNode.appendChild(rootEl);

    // Render React components
    const root = createRoot(rootEl);
    root.render(
      <div style={{ margin: "12px 0" }}>
        <ScoreBadge score={score} />
        {alternative && <AlternativeCard product={alternative} />}
      </div>
    );
  };

  const handleProductDetection = async () => {
    const productTitle = getProductTitle();
    if (!productTitle) return;

    const score = getEcoScore(productTitle);
    const alternative = findAlternative(productTitle);
    
    injectUI(score, alternative);
    logAction({
      action: 'PRODUCT_VIEW',
      product: productTitle,
      score,
      alternative: alternative?.name,
      time: Date.now()
    });
  };

  // Run immediately on load
  handleProductDetection();

  // 🔍 Add hover detection here
  const handleHover = (e) => {
    const target = e.target;

    if (
      target.tagName === "IMG" &&
      (target.closest(".s-product-image") || target.closest(".puis-card-container"))
    ) {
      const productTitle =
        target.alt ||
        target.closest(".s-title")?.innerText ||
        target.closest(".puis-card-container")?.innerText?.split("\n")[0] || "";

      const imageUrl = target.src;

      chrome.runtime.sendMessage({
        type: "PRODUCT_HOVERED",
        name: productTitle,
        image: imageUrl,
      });
    }
  };

  document.addEventListener("mouseover", handleHover);

  // 👀 Watch for dynamically loaded content (like Amazon's infinite scroll)
  const observer = new MutationObserver(handleProductDetection);
  observer.observe(document.body, { subtree: true, childList: true });

  // Cleanup function
  return () => {
    observer.disconnect();
    document.removeEventListener("mouseover", handleHover);
  };
}, []);

  return null;
};

export default ContentScript;