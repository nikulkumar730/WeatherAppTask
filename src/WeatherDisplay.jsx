
import { useState, useEffect } from "react";

const WeatherDisplay = ({ weatherData, timezone }) => {
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    const itemName = JSON.parse(localStorage.getItem('weatherApp_data'));
    
    if (itemName !== null && itemName.length > 1) {
      const last = itemName[itemName.length - 2];
      setLastSearch(last);
    }
  }, [weatherData.name]);

  if (!weatherData) return null;

  const localTime = new Date(new Date().getTime() + timezone * 1000).toUTCString();

  return (
    <div className="outPutData">
      <h2 className="city">{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Local Time: {localTime}</p>
      {lastSearch && (
        <div >
          <h3>Last Search</h3>
          <p>City:  <span className="lastSearchCity">{lastSearch.city}</span></p>
          
        
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
