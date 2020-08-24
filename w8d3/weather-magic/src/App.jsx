import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { parseTemp } from './helpers'
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState(null)
  const [cityInput, setCityInput] = useState("")
  const [cityButtons, setCityButtons] = useState([{ shortName: "mtl", longName: "Montréal" }, { shortName: "tor", longName: "Toronto" }])

  const handleSubmit = event => {
    event.preventDefault()
    const newCityButton = { longName: cityInput, shortName: cityInput.substring(0, 3) }

    if (undefined === cityButtons.find(cityButton => cityButton.longName === cityInput)) {
      setCityButtons(prev => [...prev, newCityButton])
    }

    setCity(cityInput)
    setCityInput("")
  }

  const parsedButtons = cityButtons.map(cityButton => (
    <button
      data-testid={`${cityButton.shortName}-button`}
      onClick={() => setCity(cityButton.longName)}
    >
      {cityButton.longName}
    </button>
  ))

  useEffect(() => {
    if (city) {
      const key = "09fd719b4b698ec0260e424f83378e3d"
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
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
      <section className="city-buttons">
        {/* <button data-testid="mtl-button" onClick={() => setCity('Montréal')}>Montréal</button>
        <button data-testid="tor-button" onClick={() => setCity('Toronto')}>Toronto</button> */}
        {parsedButtons}
      </section>
      <form onSubmit={handleSubmit}>
        <h1>You don't see your city in the buttons?</h1>
        <input
          type="text"
          id="city-chooser"
          placeholder="Enter your city"
          onChange={event => setCityInput(event.target.value)}
          value={cityInput}
        />
      </form>
    </div>
  );
}

export default App;
