import React from 'react';
import '../styles/WeatherCard.css';

function WeatherCard({ data, unit }) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}{tempUnit}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
    </div>
  );
}
export default WeatherCard;