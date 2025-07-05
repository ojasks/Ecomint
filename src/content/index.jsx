// File: src/content/index.jsx
import { useEffect } from "react"
import { getEcoScore } from "../utils/getEcoScore"
import { findAlternative } from "../utils/findAlternatives"
import { logAction } from "../hooks/useEcoLogger"

const ContentScript = () => {
  useEffect(() => {
    const productTitle =
      document.querySelector("#productTitle")?.textContent?.trim() ||
      document.querySelector("span.B_NuCI")?.textContent?.trim() ||
      ""

    if (!productTitle) return

    const score = getEcoScore(productTitle)

    const targetNode =
      document.querySelector("#corePriceDisplay_desktop_feature_div") ||
      document.querySelector("._30jeq3")?.parentElement

    if (targetNode && !document.getElementById("eco-score")) {
      const badge = document.createElement("div")
      badge.id = "eco-score"
      badge.innerText = `🌿 EcoScore: ${score}`
      badge.style = "color: green; font-weight: bold; margin-top: 8px;"
      targetNode.appendChild(badge)
    }

    const alt = findAlternative(productTitle)
    if (alt) {
      const altCard = document.createElement("div")
      altCard.id = "eco-alt"
      altCard.innerHTML = `
        ♻️ Greener Alternative: <strong>${alt.name}</strong><br/>
        <a href="${alt.url}" target="_blank" style="color: green;">View Product</a>
      `
      altCard.style =
        "margin-top: 12px; padding: 10px; border: 2px dashed green; border-radius: 6px;"
      targetNode?.appendChild(altCard)
    }

    logAction({
      name: productTitle,
      score,
      time: Date.now()
    })
  }, [])

  return null
}

export default ContentScript
