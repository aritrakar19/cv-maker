import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'; // Make sure to import BrowserRouter
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import Home from './Components/HomePage/Home';
import NavBar from './Components/Navigation/Navbar';
import MyResume from './Components/ResumeDisplay/MyResume';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';
import HeroSection from './Components/HeroSection';
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>      {/* ONLY ONE Router here */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* other routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
