import  { useState } from "react";

const WeatherForm = ({ fetchWeatherData, language, setLanguage, }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.trim()) {
      await fetchWeatherData(location, language);

      // Retrieve the existing entries from localStorage
      const existingEntries =
        JSON.parse(localStorage.getItem("weatherApp_data")) || [];

      // Create a new entry
      const newEntry = { city: location, language: language };

      // Save the updated array to localStorage
      localStorage.setItem(
        "weatherApp_data",
        JSON.stringify([...existingEntries, newEntry])
      );
    }
  };

  return (
    <>
    <h1 className="heading">weather forcast</h1>
    <form className="from" onSubmit={handleSubmit}>
      <input className=" inputTag"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city or country"
      />
      <button type="submit"><img src="./search.png"/></button>
      <select className="option" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
     
    </form>
  </>);
};

export default WeatherForm;
