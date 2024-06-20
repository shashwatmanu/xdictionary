import logo from './logo.svg';
import './App.css';
import { useState } from 'react'




function App() {
  const [searchWord, setSearchWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");

  const handleChange = (e) =>{
    setSearchWord(e.target.value);
  }

  const findInDictionary = () =>{
    let dictionary = [

      { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
      { word: "Component", meaning: "A reusable building block in React." },
    
      { word: "State", meaning: "An object that stores data for a component." }
    
    ];

    let ans = dictionary.find((ele)=> ele.word.toLowerCase()===searchWord.toLowerCase());
    if(ans){
     setWordMeaning(ans.meaning)
    }
    else{
      setWordMeaning('Word not found in the dictionary');
    }
  }

  const handleClick = () =>{
    findInDictionary();
  }

  return (
    <>
    <h1>Dictionary App</h1>
    <input type="text" placeholder="Search for a word..." onChange={handleChange} value={searchWord}/>
    <button onClick={handleClick}>Search</button>
    <div>Definition:</div>
    <div>{wordMeaning}</div>
    
    </>
  );
}

export default App;
