import React from "react";
import axios from "axios";


export default function Weather() {
    function displayTemperature(response) {
        let temperature = response.data.main.temp;
        alert(`The weather in Portland is ${temperature} degrees F`)
    }

    let apiKey = `85bbd3d16a2dfe0ecf253c7ae1e8fe03`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);

    return(
        <p>Hello from Weather</p>
    );
}