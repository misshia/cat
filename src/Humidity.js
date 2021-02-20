import React from "react";
import "./humidity.css";

export default function Humidity() {
  return (
    <ul>
      <li>
        {" "}
        Precipitation:<span id="precip"> 0 </span> %{" "}
      </li>
      <li>
        {" "}
        Humidity:<span id="humidity"> 77 </span> %{" "}
      </li>
      <li>
        {" "}
        Wind: <span id="wind"> 8 </span> km/h{" "}
      </li>
    </ul>
  );
}
