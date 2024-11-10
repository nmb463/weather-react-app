import React, {useState} from "react";
import axios from "axios";


export default function Weather() {
    const [city, setCity] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })
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
    
    let form = (
        <form onSubmit={searchWeather}>
                    <input type="search" onChange={updateCity} />
                    <input type="submit" value="Search" />
        </form>
    )
    if (loaded) {
        return (
            <div>
                <div className="Weather">
                    <div>{form}</div>
                </div>
                <div className="Data">
                    <img src={weather.icon} alt={weather.description} />
                    <div>Temperature: {Math.round(weather.temperature)}°F </div>
                    <div>Description: {weather.description}</div>
                    <div>Humidity {weather.humidity}%</div>
                    <div>Wind: {weather.wind} mi/h</div>
                </div>
            </div>
        )
    } else {
        return form;
    }
}