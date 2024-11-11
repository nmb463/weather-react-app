import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [city, setCity] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function displayWeather(response) {
        setLoaded(true);
        console.log(response);
        setWeather({
            name: response.data.city,
            date: "Sunday 6:00",
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon_url,
        })
    }

    function searchWeather(event) {
        event.preventDefault();
        const apiKey = `f917a08757btf485b3af40o0e41087f1`;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
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
                    <h1>{weather.name}</h1>
                    <ul>
                        <li>{weather.date}</li>
                        <li>{weather.description}</li>
                    </ul>
                    <div className="row mt-3">
                        <div className="col-6">
                            <img src={weather.icon} alt={weather.description} />
                            <span className="temperature">{Math.round(weather.temperature)}</span>
                            <span className="unit">°F</span>
                        </div>
                        <div className="col-6">
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