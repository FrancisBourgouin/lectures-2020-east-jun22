const mtlData =
{
  "coord": { "lon": -73.59, "lat": 45.51 },
  "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }],
  "base": "stations",
  "main": { "temp": 287.04, "feels_like": 298.69, "temp_min": 295.93, "temp_max": 298.71, "pressure": 1016, "humidity": 73 }, "visibility": 10000, "wind": { "speed": 2.1, "deg": 250 }, "clouds": { "all": 75 },
  "dt": 1597072210,
  "sys": { "type": 1, "id": 943, "country": "CA", "sunrise": 1597052975, "sunset": 1597104590 },
  "timezone": -14400, "id": 6077243, "name": "Montreal", "cod": 200
}

const torData = {}

const fakeAxios = {}

fakeAxios.get = (url) => {
  return new Promise((resolve, reject) => {
    resolve({ data: mtlData })
  }

  )
}

export default fakeAxios