import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
// import moment from 'moment';

const KEY = process.env.REACT_APP_WEATHER_API_KEY;

function CurrentWeather() {

  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const loadWeatherData = async () => {
      
      setLoading(true);

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Provo,US&units=imperial&APPID=${KEY}`
      );

      console.log(data);

      setWeatherData(data);
      setLoading(false);
    }

    loadWeatherData();
  }, []);

  return (
    <div className='currentWeather'>
      {
        loading ? (<h3>Loading...</h3>) : (
          <>
            <h2>Weather in {weatherData.name}</h2>
            <div className='currentWeatherBlocks'>
              <div className='currentWeatherIcon'>
                <img 
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                  alt={weatherData.weather[0].description}
                />
                <div className='currentTemp'>
                  <p className='temperature'>{parseInt(weatherData.main.temp)}&deg;</p>
                  <p>{weatherData.weather[0].main}</p>
                </div>
              </div>
              <div className='currentWeatherInfo'>
                <div>
                  <p>&uarr; {weatherData.main.temp_max}&deg; | {weatherData.main.temp_min}&deg; &darr;</p>
                  <p>{weatherData.main.humidity}% Humidity</p>
                  <p>{parseInt(weatherData.wind.speed)} mph Wind</p>
                  <p>Feels like: {weatherData.main.feels_like}&deg;</p>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
}

export default CurrentWeather;