import React from 'react';
import Home from './Pages/Home'

import JokeList from './JokeList';

function App() {
  return (
    <div>
          <Home/>

        <h1 style={{color: "rgb(30, 58, 138)",textAlign:"center"}}>Conditions Information</h1>
      <JokeList /> {/* Render the ConditionList component */}
    </div>
  );
}

export default App;
