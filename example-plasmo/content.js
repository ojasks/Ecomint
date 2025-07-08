// Alternative content script configuration
export const config = {
  matches: ["http://*/*", "https://*/*"],
  run_at: "document_end"
}

console.log("[CS] Content script LOADED - Alternative version")

// Wait for DOM to be ready
function initContentScript() {
  console.log("[CS] Initializing content script on:", window.location.href)
  
  document.addEventListener("mouseover", (e) => {
    const target = e.target
    
    if (target && target.tagName && target.tagName.toLowerCase() === "img") {
      const src = target.src
      console.log("[CS] Image hovered:", src)

      // Send message to background script
      try {
        chrome.runtime.sendMessage({
          type: "HOVERED_IMAGE",
          src: src
        }, (response) => {
          if (chrome.runtime.lastError) {
            console.error("[CS] Runtime error:", chrome.runtime.lastError.message)
          } else {
            console.log("[CS] Message sent successfully")
          }
        })
      } catch (error) {
        console.error("[CS] Error sending message:", error)
      }
    }
  })
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContentScript)
} else {
  initContentScript()
}