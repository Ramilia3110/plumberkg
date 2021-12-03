import React from "react";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Photogallery from "./components/Photogallery"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Services/>
      <Reviews/>
      <Hero/>
      <Contact/>
      <Photogallery/>
      <Footer/>
    </div>
  );
}

export default App;
