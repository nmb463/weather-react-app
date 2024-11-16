import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [ready, setReady] = useState(false);
    const [forecastData, setForecastData] = useState(null);
    
    function handleResponse(response){
        setReady(true);
        console.log(response.data);
        setForecastData(response.data.daily);
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
                    };
                })}
                
            </div>
        </div>
        )
    } else {
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiKey = `f917a08757btf485b3af40o0e41087f1`;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;
        
        axios.get(apiUrl).then(handleResponse);
        return null;
    }

   
}