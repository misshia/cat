import React, {useState} from "react";
import axios from "axios";

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardBody from 'react-bootstrap/Card';

// forecast?
//weather
//icon
//
export default function WeatherForecast(props){
    const[loaded, setLoaded] = useState(false);
    const[forecastData, setForecastData] = useState({ready: false});

function handleForecastResponse(response){
     setForecastData(response.data);
     setLoaded(true);
    }

function getForecast(){
    let apiKey = "8292f4b5d4720ad564b1e69cd14e57f1"
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
    axios.get(url).then(handleForecastResponse);
}
}
<div>
<CardDeck>
           <CardBody>
            <Card.Img variant="top" src="./public/images/${forecast.weather[0].icon}.png" id="icon" alt="{weather.description}" />
            <div className="weather-forecast-temperature"> ${Math.round(forecast.main.temp)}°</div>

              <Card  className="current-temperature"> {Math.round(weather.temperature)}°C </Card>
           </CardBody>
      </CardDeck>
</div>
  