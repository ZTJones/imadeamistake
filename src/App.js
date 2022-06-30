import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  

  const [state ] = useState([

  ]
  );

  useEffect(() => {
    fetch("https://ztj-demo-acs.azurewebsites.net/penguin_horde")
      .then(response => response.json())
      .then(data => console.log(data.horde));
  })

  return (
    <div className="App">
      <h1>Somethin' silly, yeah.</h1>
      <h2>This is something else.</h2>
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
      {
        state.forEach(element => {
          console.log("This should run 5 times " + element);
        })
      }
    </div>
  );
}

export default App;
