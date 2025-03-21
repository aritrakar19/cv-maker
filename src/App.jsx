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
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter> {/* Wrap everything with BrowserRouter */}
      <div>
        <div>
          {/* <NavBar/> */}
          {/* <Layout /> */}
          <HeroSection />
        </div>

        <div>
          <Routes>
            {/* Define your routes */}
            {/* <Route path="/detailsfillingpage/*" element={<DetailsFillingPage />} /> */}
            {/* <Route path="/myresume" element={<MyResume />} /> */}
            {/* <Route path="/about" element={<AboutUs />} /> */}
            <Route path="/home" element={<Home />} />
            {/* <Route path="*" element={<Navigate to="/about" />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
