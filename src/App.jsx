import { useEffect, useState } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";
import './App.css'
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [timezone, setTimezone] = useState(0);
  const [language, setLanguage] = useState("hi");
  const [locations,SetLocations]=useState('')

  
  const fetchWeatherData = async (location, lang) => {
    const apiKey = "5359350bb57047248b7e51477e679980";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=${lang}`;
    try {
      const response = await axios.get(url);
      SetLocations(response.data.name)
      setWeatherData(response.data);

      setTimezone(response.data.timezone);

    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setWeatherData(null);
    }
  };
useEffect(()=>{
  fetchWeatherData()
},[language])

  return (
    <div className="App">
    <div className="ui">
      <WeatherForm
        fetchWeatherData={fetchWeatherData}
        language={language}
        setLanguage={setLanguage}
        locations={locations}
        SetLocations={SetLocations}
      />
      {weatherData && (
        <div ><WeatherDisplay weatherData={weatherData} timezone={timezone}  /></div>
      )}
      </div>
    </div>
  );
};

export default App;
