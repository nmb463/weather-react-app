import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [ready, setReady] = useState(false);
    const [forecastData, setForecastData] = useState(null);
    
    useEffect(() => {
        setReady(false);
    }, [props.coordinates]);

    function handleResponse(response){
        setReady(true);
        setForecastData(response.data.daily);
    }

    function load() {
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiKey = `f917a08757btf485b3af40o0e41087f1`;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;
        
        axios.get(apiUrl).then(handleResponse);
    }

    
    if (ready) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecastData.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return(
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        )
                    } else {
                        return null;
                    };
                })}
                
            </div>
        </div>
        )
    } else {
        load();
        return null;
    }

   
}