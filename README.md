# Weather Forecasting App

A dynamic and visually appealing weather forecasting web app built with **React** and **Vite**, using the **OpenWeatherMap API**.

## Features

- 🔍 Search for current weather by city name
- 🌡️ Toggle between Celsius and Fahrenheit
- 📅 5-day weather forecast
- 🌓 Dark mode toggle
- 🔄 Loading spinner during API requests
- ❌ Error handling with user-friendly messages
- 📱 Fully responsive design

## Demo

[![Deployed App]((https://weather-forecasting-app-6j7b.onrender.com/))]

## Technologies Used

- React (with Vite)
- CSS Modules
- OpenWeatherMap API

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

# Install dependencies
npm install

# Create a .env file and add your OpenWeatherMap API key
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env

# Start the development server
npm run dev
```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   └── Forecast.jsx
├── styles/             # CSS files
│   ├── App.css
│   ├── SearchBar.css
│   └── WeatherCard.css
├── App.jsx             # Main app component
└── main.jsx            # React root entry
```

## API Used

- [OpenWeatherMap Current Weather API](https://openweathermap.org/current)
- [OpenWeatherMap 5 Day / 3 Hour Forecast API](https://openweathermap.org/forecast5)

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to fork, customize, and build on top of this project!
