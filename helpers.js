const createVenueHTML = (name, location, iconSource) => {
  return `<h3>${name}</h3>
  <img class="venueimage" src="${iconSource}"/>
  <h4>Address:</h4>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  return `<h2>${weekDays[(new Date()).getDay()]}</h2>
		<h2>${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
		<h2>${currentDay.weather[0].description}</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);