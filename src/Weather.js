import React, {useState} from "react";
import axios from "axios";


export default function Weather() {
    let [city, setCity] = useState(null);
    let [temperature, setTemperature] = useState(null);
    let [description, setDescription] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    let [icon, setIcon] = useState(null);

    function displayWeather(response) {
        setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°F `);
        setDescription(`Description: ${response.data.weather[0].description}`);
        setHumidity(`Humidity ${response.data.main.humidity}%`);
        setWind(`Wind: ${response.data.wind.speed} mi/h`);
        setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    }

    function searchWeather(event) {
        event.preventDefault();
        let apiKey = `85bbd3d16a2dfe0ecf253c7ae1e8fe03`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }
    
    return(
        <div className="Weather">
            <form onSubmit={searchWeather}>
                <input type="search" onChange={updateCity} />
                <input type="submit" value="Search" />
            </form>
            <div className="Data">
                <h2>{city}</h2>
                <img src={icon} />
                <div>{temperature}</div>
                <div>{description}</div>
                <div>{humidity}</div>
                <div>{wind}</div>
            </div>
            
        </div>
    );
}