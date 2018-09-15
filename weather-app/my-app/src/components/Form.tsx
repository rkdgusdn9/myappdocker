import Button from '@material-ui/core/Button';
import * as React from "react";
import '../App.css';


const Form = props => (
    <p>
    <p>
    <form onSubmit={props.getWeather}>
        <input className="input1" type="text" name="city" placeholder="City"/>
        <input className="input1" type="text" name="country" placeholder="Country"/>
        <button className="button"><Button size="small" color="default">Search</Button></button>
    </form>
    </p>
    </p>
)


export default Form;