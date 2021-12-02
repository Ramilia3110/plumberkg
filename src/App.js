import React from "react";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Services from "./components/Services";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Services/>
    </div>
  );
}

export default App;
