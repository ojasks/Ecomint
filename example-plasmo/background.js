let lastHoveredImage = ""

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("[BG] Received message:", message)
  
  if (message.type === "HOVERED_IMAGE") {
    console.log("[BG] Received image:", message.src)
    lastHoveredImage = message.src

    // Send to all active popup windows
    chrome.runtime.sendMessage({
      type: "HOVERED_IMAGE",
      src: message.src
    }).catch(error => {
      // This is normal if popup isn't open
      console.log("[BG] No popup listening:", error.message)
    })
  }

  if (message.type === "GET_LAST_IMAGE") {
    console.log("[BG] Sending last image:", lastHoveredImage)
    sendResponse({ src: lastHoveredImage })
  }

  return true // Keep sendResponse alive
})
