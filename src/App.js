import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const opt={
    method:'GET'
  }
  fetch("/localhost:8000/realisateur/hitchcock",opt)
  .then(res=>{
<<<<<<< HEAD
    console.log(res)
=======
    return res
>>>>>>> develop
  })
  return (
    <div className="App">
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
  )
  
}

export default App;
