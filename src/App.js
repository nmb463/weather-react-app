import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Portland" />
        <footer>
          <a href="https://github.com/nmb463/weather-react-app" target="_blank" rel="noopener noreferrer">Open-source code</a> by Nicole Banda
        </footer>
      </div>
    </div>
  );
}

export default App;
