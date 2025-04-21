import React from 'react';
import '../styles/Forecast.css';

function Forecast({ data, unit }) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-list">
        {data.map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(item.dt_txt).toLocaleString()}</p>
            <p>Temp: {item.main.temp}{tempUnit}</p>
            <p>Weather: {item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;