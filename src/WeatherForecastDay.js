import React from "react";

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
            <img src={props.data.condition.icon_url} alt={props.data.condition.icon} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    
        );
}