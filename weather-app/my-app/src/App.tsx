import * as React from "react";
import Form from "./components/Form";
import MainTitles from "./components/MainTitles";
import Weather from "./components/Weather";



class App extends React.Component{

  
  public state = {
      
    city : undefined,
    comma : undefined,
    country : undefined,
    description : undefined,
    error : undefined,
    humidity : undefined,
    pressure : undefined,
    temperature : undefined
  }


  public getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=fa235129e93c7485e7fedb006e803f00&unit=metric`);
    const data = await API_CALL.json();
    
    if (city && country){
      console.log(data);
      this.setState({
      city : data.name,
      comma : ",",
      country : data.sys.country,
      description : data.weather[0].description,
      error : "",
      humidity : data.main.humidity,
      pressure : data.main.pressure,
      temperature : data.main.temp

    });
    }else{
      this.setState({
        city : undefined,
        comma : undefined,
        country : undefined,
        description : undefined,
        error : "Please input city and country",
        humidity : undefined,
        pressure : undefined,
        temperature : undefined
      });
    }
  }
  
  public render(){
    return (
      <div>
        <MainTitles/>
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          comma={this.state.comma}
          country={this.state.country}
          description={this.state.description}
          pressure={this.state.pressure}
          error={this.state.error}
        />
      </div>
    );
  }
};

export default App;