import logo from './logo.svg';
import './App.css';
import './input.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello Tailwind
      </h1>
      <button className="btn">Hello Daisy</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
