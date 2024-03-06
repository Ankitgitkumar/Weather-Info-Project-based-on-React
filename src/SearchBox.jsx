import { colors, useAutocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
let [city,setCity]= useState("");
let [error,setError]=useState("");
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "bf0f5d454d34cbf2a785d0738f312d77";
const style={color:"yellow"};
let getWeatherInfo = async()=>{
    try {
    let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        
        
    };
    console.log(result);
    return result;
}catch(err){
    throw err;
}
};



let handleChange =(evt)=>{
    setCity(evt.target.value);
};

let handleSubmit =async (event)=> {
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
  let newInfo = await getWeatherInfo();
  updateInfo(newInfo);
    }catch(err){
        setError("no such place exists!");

    }
    
};    


return (
    <div>
        <h3>Search for Weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange} style={style}/>
        <br></br>
        <br></br>
        <Button variant="outlined" type="submit">Search</Button>
    </form>
    </div>
);

}