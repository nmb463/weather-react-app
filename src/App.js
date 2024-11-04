import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>React Weather Search</h1>
      <Weather />
      <div className="Links">
        <a href="https://github.com/nmb463/weather-react-app" target="_blank" rel="noreferrer">Open-source code</a> by Nicole Banda
      </div>
    </div>
  );
}

export default App;
