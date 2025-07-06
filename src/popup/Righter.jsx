import { useEffect, useState } from 'react';
import { getEcoLogs } from '../hooks/useEcoLogger';

const Righter = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const recentLogs = getEcoLogs()
      .slice(-5)
      .reverse()
      .map(log => ({
        ...log,
        // Add a simple unique key if none exists
        id: log.id || `${log.product}-${Date.now()}`
      }));
      
    setLogs(recentLogs);
  }, []);

  return (
    <div className="log-list">
      <button className="log-card-button">VIEW GREENER ALTERNATIVES</button>
      
      {logs.length > 0 ? (
        logs.map((log) => (
          <div key={log.id} className="log-item">  {/* Now using proper key */}
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
      
      <ScoreCard value={8.4} />
    </div>
  );
};

// Extracted as separate component
const ScoreCard = ({ value }) => (
  <div className="score-card">
    <span className="score-card-value">
      {value} <button className="score-card-button">🌿</button>
    </span>
    <span className="score-card-text">Sustainability Score</span>
  </div>
);

export default Righter;