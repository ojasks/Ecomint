import React, { useEffect, useState } from "react"

const LogList = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ecoLogs") || "[]")
    setLogs(data.slice(-5).reverse())
  }, [])

  return (
    <div className="log-card">
      <button className="log-card-button">VIEW GREENER ALTERNATIVES</button>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log.name} — Score: {log.score}</li>
        ))}
      </ul>
    </div>
  )
}

export default LogList
