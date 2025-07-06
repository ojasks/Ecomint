// import React, { useEffect, useState } from "react"

// const LogList = () => {
//   const [logs, setLogs] = useState([])

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("ecoLogs") || "[]")
//     setLogs(data.slice(-5).reverse())
//   }, [])

//   return (
//     <div className="log-card">
//       <button className="log-card-button">VIEW GREENER ALTERNATIVES</button>
//       <ul>
//         {logs.map((log, index) => (
//           <li key={index}>{log.name} — Score: {log.score}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default LogList
// In popup/LogList.jsx
import { useEffect, useState } from 'react';
import { getEcoLogs } from '../hooks/useEcoLogger';

const LogList = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(getEcoLogs().slice(-5).reverse());
  }, []);

  return (
    <div className="log-list">
      <button className="log-card-button">VIEW GREENER ALTERNATIVES</button>
      {logs.length > 0 ? (
        logs.map((log, i) => (
          <div key={i} className="log-item">
            <div className="log-product">{log.product}</div>
            <div className="log-score">Score: {log.score}</div>
            {log.alternative && (
              <div className="log-alt">Alternative: {log.alternative}</div>
            )}
          </div>
        ))
      ) : (
        <div className="no-logs">No eco logs available</div>
      )}
    </div>
  );
};

export default LogList;