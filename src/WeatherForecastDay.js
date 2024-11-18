import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day()  {
        let timestamp = props.data.time;
        let date = new Date(timestamp * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return days[day];
    }

    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <div className="WeatherForecast-icon"><WeatherIcon code={props.data.condition.icon} size={40} /></div>
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    
        );
}