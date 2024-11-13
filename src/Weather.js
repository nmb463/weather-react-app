import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready:false});

    function displayWeather(response) {
        setWeatherData({
            ready: true,
            name: response.data.city,
            coordinates: response.data.coordinates,
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon_url,
        })
    }

    function search() {
        const apiKey = `f917a08757btf485b3af40o0e41087f1`;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(displayWeather);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }
    
    if (weatherData.ready) {
        return (
            <div className="Weather">
                 <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." autoFocus="on" className="form-control" onChange={updateCity} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} code={weatherData.icon} />
            </div>
        )
    } else {
        search();
        return("Loading...")
    }
}