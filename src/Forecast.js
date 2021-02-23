import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardBody from 'react-bootstrap/Card';

function searchLocation(position) {
  let apiKey = "78251f458f96a759bc4e7e717b3145fb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentLocationShowTemperature);
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(dispalyForecast);
}

function dispalyForecast(response) {
  
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += 
<div>
<CardDeck>
           <CardBody>
            <Card.Img variant="top" src="./public/images/${forecast.weather[0].icon}.png" id="icon" alt="{weather.description}" />
            <div className="weather-forecast-temperature"> ${Math.round(forecast.main.temp)}°</div>


              <Card  className="current-temperature"> {Math.round(weather.temperature)}°C </Card>
           </CardBody>
      </CardDeck>
</div>
  ;
  }
}