import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Body.css';
// import moment from 'moment';

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
    <div className='currentWeather'>
      {
        loading ? (<h3>Loading...</h3>) : (
          <div className=''> {/* figure out what to name this... */}
            <h2>Weather in {weatherData.name}</h2>
            <div className='currentWeatherIcon'>
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt={weatherData.weather[0].description}
              />
              <div>
                <h1>{ parseInt(weatherData.main.temp)}&deg;</h1>
                <h3>{weatherData.weather[0].main}</h3>
              </div>
            </div>
            <div>
              <h3>&uarr; {weatherData.main.temp_max}&deg; | {weatherData.main.temp_min}&deg; &darr;</h3>
              <h3>Feels like: {weatherData.main.feels_like}&deg;</h3>
            </div>
            <div>
              <h3>Humidity: {weatherData.main.humidity}%</h3>
              <h3>Wind: {weatherData.wind.speed} mph</h3>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default CurrentWeather;