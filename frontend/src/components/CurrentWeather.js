import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Body.css';

const KEY = process.env.REACT_APP_WEATHER_API_KEY;

function CurrentWeather() {

  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const loadWeatherData = async () => {
      
      setLoading(true);

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Provo,US&units=imperial&APPID=${KEY}`
      );

      setWeatherData(data);
      setLoading(false);
    }

    loadWeatherData();
  }, []);

  return (
    <>
      <div className='currentWeather'>
        {
          loading ? (<h3>Loading...</h3>) : (
            <p>{JSON.stringify(weatherData)}</p>
          )
        }
      </div>
    </>
  );
}

export default CurrentWeather;