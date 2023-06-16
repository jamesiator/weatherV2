import logo from './tornado.png';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo'/>
        <p>
          <em>Weather</em> or not
        </p>
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
        <p>
          <em>a project by James Belnap</em>
        </p>
      </footer>
    </div>
  );
}

export default App;
