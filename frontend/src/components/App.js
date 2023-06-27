import logo from '../media/tornado.png';
import Body from './Body';
import '../styles/App.css';
import { TextField } from '@mui/material';
// import { COLORS } from '../values/colors';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

// the customized text field input where the user will input a US city
const CityInput = styled(TextField) ({
  '& input': {
    color: 'white'
  },
  '& label': {
    color: 'white'
  },
  '& label.Mui-focused': {
    color: '#E0E3E7',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#E0E3E7',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E0E3E7',
    },
  },
});

export default function App() {
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
          <CityInput
            label='Enter a US City' 
            id='custom-css-outlined-input'
            onKeyDown={event => {
              if (event.key === 'Enter') {
                setCity(event.target.value)
                console.log(city);
              }
            }}
          />
        </div>
      </header>
      <Body />
      <footer className='App-footer'>
        <p>
          ~ Tornado clipart from
          <em> OpenClipart-Vectors</em> on 
          <a href='https://pixabay.com' className='App-link'> Pixabay</a> ~
        </p>
        <p>
          ~ Weather data and icons from
          <a href='https://openweathermap.org' className='App-link'> openweathermap</a> ~
        </p>
        <br/>
        <em>a project by James Belnap</em>
      </footer>
    </div>
  );
}
