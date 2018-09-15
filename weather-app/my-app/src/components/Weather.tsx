
import * as React from "react";
import '../App.css';







    const Weather = props => (
           <div className="back">
            {props.city && props.country && <p>City/Country : {props.city}{props.comma} {props.country}</p>}
            {props.temperature && <p>Temp :  {props.temperature}</p>}
            {props.humidity &&<p>Humidity :  {props.humidity}</p>}
            {props.description &&<p>Status :  {props.description}</p>}
            {props.pressure &&<p>Pressure :  {props.pressure}</p>}
            {props.error && <p>{props.error}</p>}

        </div> 
        
    )




export default Weather;