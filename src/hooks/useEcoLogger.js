export const logAction = (action) => {
  const logs = JSON.parse(localStorage.getItem("ecoLogs") || "[]")
  logs.push(action)
  localStorage.setItem("ecoLogs", JSON.stringify(logs))
}
