import React from 'react';
// import { TextField } from '@mui/material';
import '../styles/Body.css';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

function Body() {
  return (
    <div className='App-body'>
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default Body;