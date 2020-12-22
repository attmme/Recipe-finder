import './App.css';
import Keys from './keys/keys';
import React from 'react';

function App() {
  const REQ = `https://api.edamam.com/search?q=chicken&app_id=${Keys.API_ID}&app_key=${Keys.API_KEY}`;

  return (
    <div className="App">

      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit"></button>

      </form>

    </div>
  );
}

export default App;
