import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                    <h1>{props.data.name}</h1>
                    <ul>
                        <li>
                            <FormattedDate date={props.data.date} />
                        </li>
                        <li>{props.data.description}</li>
                    </ul>
                    <div className="row mt-3">
                        <div className="col-6">
                            <span className="WeatherIcon-current"><WeatherIcon code={props.data.icon} size={60} /></span>
                            <WeatherTemperature fahrenheit={props.data.temperature} />
                        </div>
                        <div className="col-6">
                            <div>Humidity {props.data.humidity}%</div>
                            <div>Wind: {props.data.wind} mi/h</div>
                        </div>
                    </div>
        </div>
    );
}