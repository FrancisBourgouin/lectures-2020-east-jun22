import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { parseTemp } from './helpers'
import './App.css';
import fakeAxios from './fakeAxios'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState(null)

  useEffect(() => {
    if (city) {
      const key = "09fd719b4b698ec0260e424f83378e3d"
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      // fakeAxios
      axios
        .get(url)
        .then(res => setWeatherData(res.data))
        .catch(() => console.log('Oh no'))
    }
  }, [city])

  return (
    <div className="App">
      <h1>☔⚡🌞 Weather Magic 🌞⚡☔</h1>
      {weatherData &&
        <section>
          <h1>Right now in {city}</h1>
          <p>{parseTemp(weatherData.main.temp)} with {weatherData.weather[0].description}</p>
        </section>
      }
      <section>
        <button data-testid="mtl-button" onClick={() => setCity('Montréal')}>Montréal</button>
        <button data-testid="tor-button" onClick={() => setCity('Toronto')}>Toronto</button>
      </section>
    </div>
  );
}

export default App;
