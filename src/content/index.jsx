// // File: src/content/index.jsx
// import { useEffect } from "react"
// import { getEcoScore } from "../utils/getEcoScore"
// import { findAlternative } from "../utils/findAlternatives"
// import { logAction } from "../hooks/useEcoLogger"

// const ContentScript = () => {
//   useEffect(() => {
//     const productTitle =
//       document.querySelector("#productTitle")?.textContent?.trim() ||
//       document.querySelector("span.B_NuCI")?.textContent?.trim() ||
//       ""

//     if (!productTitle) return

//     const score = getEcoScore(productTitle)

//     const targetNode =
//       document.querySelector("#corePriceDisplay_desktop_feature_div") ||
//       document.querySelector("._30jeq3")?.parentElement

//     if (targetNode && !document.getElementById("eco-score")) {
//       const badge = document.createElement("div")
//       badge.id = "eco-score"
//       badge.innerText = `🌿 EcoScore: ${score}`
//       badge.style = "color: green; font-weight: bold; margin-top: 8px;"
//       targetNode.appendChild(badge)
//     }

//     const alt = findAlternative(productTitle)
//     if (alt) {
//       const altCard = document.createElement("div")
//       altCard.id = "eco-alt"
//       altCard.innerHTML = `
//         ♻️ Greener Alternative: <strong>${alt.name}</strong><br/>
//         <a href="${alt.url}" target="_blank" style="color: green;">View Product</a>
//       `
//       altCard.style =
//         "margin-top: 12px; padding: 10px; border: 2px dashed green; border-radius: 6px;"
//       targetNode?.appendChild(altCard)
//     }

//     logAction({
//       name: productTitle,
//       score,
//       time: Date.now()
//     })
//   }, [])

//   return null
// }

// export default ContentScript


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
             document.querySelector(".product-title")?.textContent?.trim() || "";
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

    // Initial run
    handleProductDetection();

    // Watch for dynamic content
    const observer = new MutationObserver(handleProductDetection);
    observer.observe(document.body, { subtree: true, childList: true });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ContentScript;