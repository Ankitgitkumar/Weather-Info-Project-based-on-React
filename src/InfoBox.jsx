import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Thunderstorm from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }){
    const INI_URL="https://as1.ftcdn.net/v2/jpg/03/45/37/40/1000_F_345374024_toXIjm8hecDggxAgFZ9nJRvT4v2rlQ4V.jpg";
     let COLD_URL="https://wallpaperaccess.com/full/2943299.jpg";
     let HOT_URL ="https://th.bing.com/th/id/OIP.lhQyNOXmWOc7SwYI491TOgHaFR?rs=1&pid=ImgDetMain";
     let RAIN_URL ="https://jooinn.com/images/rainy-weather-1.jpg";
    
    return(
        <div className="InfoBox">
            <h4>Weather Info</h4>
        
  
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}{info.humidity > 80 ? <Thunderstorm />  : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature={info.temp}&deg;C</div>
         <div>Humidity={info.humidity}</div>
         <div>FellsLike={info.feelsLike}&deg;C</div>
         <div>Maxtemp={info.tempMax}&deg;C</div>
         <div>Mintemp={info.tempMin}&deg;C</div>
         <p>Weather can be described as <i><b>{info.weather}</b></i></p>
        </Typography>
      </CardContent>
     
    </Card>
  
        </div>
    );
};