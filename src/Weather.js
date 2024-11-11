import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


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
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." autoFocus="on" className="form-control" onChange={updateCity} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
        </form>
    )
    if (loaded) {
        return (
            <div className="Weather">
                <div>{form}</div>
                <div className="Data">
                    <h1>{city}</h1>
                    <ul>
                        <li>Sunday 3:00 pm</li>
                        <li>{weather.description}</li>
                    </ul>
                    <div className="row mt-3">
                        <div className="col-6">
                            <img src={weather.icon} alt={weather.description} />
                            <span className="temperature">{Math.round(weather.temperature)}</span>
                            <span className="unit">°F</span>
                        </div>
                        <div className="col-6">
                            <div>Precipitation:</div>
                            <div>Humidity {weather.humidity}%</div>
                            <div>Wind: {weather.wind} mi/h</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return form;
    }
}