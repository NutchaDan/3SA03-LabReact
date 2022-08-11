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
      <WordCard value={word1}/>
      <WordCard value={word2}/>
      <WordCard value={word3}/>
      <WordCard value={word4}/>
      <WordCard value={word5}/>
    </div>
  );
}


export default App;
