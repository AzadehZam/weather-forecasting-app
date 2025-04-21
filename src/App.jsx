import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      const weatherJson = await weatherRes.json();

      if (weatherJson.cod !== 200) {
        throw new Error(weatherJson.message);
      }

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
      );
      const forecastJson = await forecastRes.json();

      setWeatherData(weatherJson);
      setForecastData(forecastJson.list.slice(0, 5));
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <h1>Weather App</h1>
      <div className="controls">
        <SearchBar onSearch={fetchWeather} />
        <div className="toggle-buttons">
          <button onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>
            Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
          </button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          {weatherData && <WeatherCard data={weatherData} unit={unit} />}
          {forecastData.length > 0 && <Forecast data={forecastData} unit={unit} />}
        </>
      )}
    </div>
  );
}

export default App;