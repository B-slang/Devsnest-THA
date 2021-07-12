import React from 'react';
import './App.css';
import Card from "./components/card.js";
import Cards from "./components/cards.js";

let arr = [0,1,2,3,4,5,6,7];


function App() {
  return (
    <>
      <div className="main">
        <div className="box">
          {
            arr.map(i => (
              i%2===0 ?
              <Card /> : <Cards />
            ))
          }       
        </div>
      </div>
    </>
  );
}

export default App;
