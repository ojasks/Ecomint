// Handle API calls in background to avoid CORS issues
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'FETCH_SCORE') {
    fetchSustainabilityScore(request.productName)
      .then(score => sendResponse(score))
      .catch(error => sendResponse({ error: error.message }))
    return true // Required for async response
  }
})