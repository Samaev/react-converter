import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Convert } from './components/Convert';
import { useState, useEffect } from "react";
import { getExchange } from "./components/api/api.js";

function App() {
  const [taxes, getTaxes] = useState([]);

  useEffect(()=>{
    getExchange()
      .then(taxesFromBank => {
          getTaxes(taxesFromBank)
              })}, [])
  
  console.log(taxes);
  
  return (
    <>
    <Header taxes={taxes}/>
    <Convert taxes={taxes}/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </>
  );
}

export default App;
