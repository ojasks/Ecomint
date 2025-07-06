import React, { useEffect, useState } from 'react';
import { getEcoLogs } from '../hooks/useEcoLogger';

const RighterHead = () => {
  const [logs, setLogs] = useState([]);
  const [ecoScore, setEcoScore] = useState(null);

  const fetchEcoScore = async (productName) => {
    try {
      const res = await fetch("https://api.demo.openlca.org/v1/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: productName }),
      });

      const data = await res.json();
      setEcoScore(data.score);
    } catch (err) {
      console.error("Failed to fetch score", err);
    }
  };

  useEffect(() => {
    // Example product
    fetchEcoScore("eco-friendly shoe");
    setLogs(getEcoLogs().slice(-5).reverse());
  }, []);

  return (
    <div>
        <div className='score-card'>
      <span className="score-card-value">
        {ecoScore ?? (Math.random() * 10).toFixed(1)}
        <button
          className="score-card-button"
          onClick={() => window.open("https://ecomint-8n5o.vercel.app/", "_blank")}
        >
          🌿
        </button>
      </span>
      
      <span className="score-card-text">Sustainability Score</span>
      </div>
      <button
        className="log-card-button"
        onClick={() => window.open("https://ecomint-8n5o.vercel.app/", "_blank")}
      >
        VIEW GREENER ALTERNATIVES
      </button>

      {logs.length > 0 ? (
        logs.map((log) => (
          <div key={log.time || log.product}>
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

export default RighterHead;
