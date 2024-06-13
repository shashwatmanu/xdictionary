import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

let data = [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

];


function App() {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("");

  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

  const handleClick = () =>{
    setDisplay('Word not found in the dictionary');
   let ans = data.find((ele)=> ele.word.toLowerCase()===search.toLowerCase());
   if(ans){
    setDisplay(ans.meaning)
   }
  //  console.log(display)
  }

  return (
    <>
    <h1>Dictionary App</h1>
    <input type="text" placeholder="Search for a word..." onChange={handleChange} value={search}/>
    <button onClick={handleClick}>Search</button>
    <div><b>Definition:</b></div>
    <p>{display}</p>
    </>
  );
}

export default App;
