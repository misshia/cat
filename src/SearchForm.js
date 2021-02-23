import React, { useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardBody from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showInfo(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "06e918cbeda5078872c6886bf7421496";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showInfo);
  }

  function changeInfo(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="inputGroup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          p
          className="form-control"
          placeholder="Search for a city"
          onChange={changeInfo}
          id="search-text-input"
        />
        <Button type="submit" className="btn btn-outline-dark" value="search">
          Search
        </Button>
        <Button
          type="submit"
          className="btn btn-outline-dark"
          value="search"
          id="current-Button"
        >
          Current
        </Button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      
      <div>
        {form}

      
        <CardDeck>
         
           <CardBody>
            <Card.Img variant="top" src="cat/public/images/${forecast.weather[0].icon}.png" id="icon" alt="{weather.description}" />
            <div className="weather-forecast-temperature"> ${Math.round(forecast.main.temp)}°</div>


              <Card  className="current-temperature"> {Math.round(weather.temperature)}°C </Card>
           </CardBody>
      </CardDeck>
      </div>
    );
  } else {
    return form;
  }
}
