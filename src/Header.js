import React from "react";
import "./Header.css";

export default function Header() {
  let weatherData= {
    city: "Warsaw",
    date: "Tuesday 10:00",
    description: "Partly cloudy",
  };
  return (
    <div>
      <h1> {weatherData.city} </h1>
      <h2>
        Last updated: <span> {weatherData.date} </span>
      </h2>
      <h3> {weatherData.description} </h3>
    </div>
  );
}
