import {Routes, Route ,Navigate} from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import Home from './Components/HomePage/Home'
import NavBar from './Components/Navigation/Navbar'
import MyResume from './Components/ResumeDisplay/MyResume';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';
import HeroSection from './Components/HeroSection';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div> 
          <NavBar/>
          {/* <Layout /> */}
          {/* <HeroSection /> */}
        </div>
        
        <div>
            <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="/myresume" element={<MyResume/>}></Route>
                  <Route exact path="/about" element={<AboutUs/>}></Route>
                  <Route path="*" element={<Navigate to="/about" />}></Route>
            </Routes> 
        </div>
    </div>
    </>
  )
}

export default App
