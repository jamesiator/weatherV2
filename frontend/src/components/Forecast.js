import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Body.css';

const KEY = process.env.REACT_APP_WEATHER_API_KEY;

function Forecast() {

  const [loading, setLoading] = useState(false);
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    const loadForecastData = async () => {
      
      setLoading(true);

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Provo,US&units=imperial&APPID=${KEY}`
      );

      setForecastData(data);
      setLoading(false);
    }

    loadForecastData();
  }, []);

  return (
    <>
      <div className='currentWeather'>
        {
          loading ? (<h3>Loading...</h3>) : (
            <p>{JSON.stringify(forecastData)}</p>
          )  
        }
      </div>
    </>
  );
}

export default Forecast;