import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word1 = "Hello";
const word2 = "Nutcha";
const word3 = "Dansiriwut";
const word4 = "Keyboard";
const word5 = "Computer";

function App() {
  return (
    <div>
      <button className = 'refresh' onClick={() => window.location.reload()}> Refresh Page </button>
      <h1> 6310110139 3SA03 Game Logic </h1>
      <span>
        <h2> (1) </h2>
        <WordCard value={word1}/><br/>
        <h2> (2) </h2>
        <WordCard value={word2}/><br/>
        <h2> (3) </h2>
        <WordCard value={word3}/><br/>
        <h2> (4) </h2>
        <WordCard value={word4}/><br/>
        <h2> (5) </h2>  
        <WordCard value={word5}/><br/>
      </span>
    </div>
  );
}


export default App;
