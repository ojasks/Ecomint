import React, { useEffect, useState } from "react"

function Popup() {
  const [hoveredImage, setHoveredImage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleMessage = (message) => {
      console.log("[Popup] Received message:", message)
      if (message?.type === "HOVERED_IMAGE") {
        setHoveredImage(message.src || "")
        setIsLoading(false)
      }
    }

    // Register listener for live updates
    chrome.runtime.onMessage.addListener(handleMessage)

    // Fetch the last hovered image when popup opens
    chrome.runtime.sendMessage({ type: "GET_LAST_IMAGE" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("[Popup] Error:", chrome.runtime.lastError.message)
        setIsLoading(false)
        return
      }
      
      if (response?.src) {
        console.log("[Popup] Got last image:", response.src)
        setHoveredImage(response.src)
      }
      setIsLoading(false)
    })

    // Cleanup listener
    return () => chrome.runtime.onMessage.removeListener(handleMessage)
  }, [])

  return (
    <div >
      {isLoading ? (
        <p>Loading...</p>
      ) : hoveredImage ? (
        <img
          src={hoveredImage}
          alt="Hovered image"
          onError={(e) => {
            console.error("[Popup] Image failed to load:", hoveredImage)
            setHoveredImage("")
          }}
        />
      ) : (
        <p>Hover ojassss over an image on any webpage</p>
      )}
    </div>
  )
}

export default Popup