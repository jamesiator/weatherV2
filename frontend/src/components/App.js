import logo from '../media/tornado.png';
import Body from './Body';
import '../styles/App.css';
import { TextField } from '@mui/material';
import { COLORS } from '../values/colors';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('Provo');

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='Logo-container'>
          <img src={logo} className='App-logo' alt='logo'/>
          <div>
            <h2><em>Weather</em></h2>
            <h3>or not</h3>
          </div>
        </div>
        <div>
          <TextField
            id='filled-search'
            label='Enter a US City'
            type='search'
            defaultValue='Provo'
            variant='filled'
            sx = {{
              input: {
                color: COLORS.secondary
              }
            }}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                setCity(event.target.value);
                console.log(city);
              }
            }}
          />
        </div>
      </header>
      <Body />
      <footer className='App-footer'>
        <p>
          -Tornado clipart from <em>OpenClipart-Vectors</em> on <a href='https://pixabay.com' className='App-link'>Pixabay</a>-
        </p>
        <p>
          -Weather data and icons from <a href='https://openweathermap.org' className='App-link'>openweathermap</a>-
        </p>
        <br/>
        <em>a project by James Belnap</em>
      </footer>
    </div>
  );
}

export default App;
