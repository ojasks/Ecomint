// export const logAction = (action) => {
//   const logs = JSON.parse(localStorage.getItem("ecoLogs") || "[]")
//   logs.push(action)
//   localStorage.setItem("ecoLogs", JSON.stringify(logs))
// }

export const logAction = (action) => {
  try {
    const logs = JSON.parse(localStorage.getItem("ecoLogs") || "[]");
    logs.push({
      ...action,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("ecoLogs", JSON.stringify(logs.slice(-100))); // Keep last 100 items
  } catch (e) {
    console.error("Failed to save log", e);
  }
};

// Add this new function
export const getEcoLogs = () => {
  try {
    return JSON.parse(localStorage.getItem("ecoLogs") || []);
  } catch (e) {
    console.error("Failed to read logs", e);
    return [];
  }
};