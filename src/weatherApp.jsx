import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city:"Delhi",
        feelsLike:10.84,
        humidity: 58,
        temp: 12.06,
        tempMax: 12.06,
        tempMin: 12.06,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
};
    return (
        <div><h2>Weather App By Delta</h2>
        
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}