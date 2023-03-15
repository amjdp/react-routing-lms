
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import cs_logo from './cs_logo.png';

import AboutUs from './components/about_us/AboutUs';
import ContactUs from './components/contact_us/ContactUs';
import Courses from './components/courses/Courses';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='header'>
        <img src={cs_logo} alt="CyberSquare logo" width="300" />
        {/* Navbar */}
        <ul id='ul-nb'>
          {/* <li className="dropdown">Courses
            <div className="dropdown-child">
              <Link to="/courses/Python">Python</Link>
              <Link to="/courses/PHP">PHP</Link>
              <Link to="/courses/Flutter">Flutter</Link>
            </div>
          </li> */}
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
     <div className="container">
      {/* Content */}
        <Routes>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route> 
          <Route path="/contactus" element={<ContactUs/>}></Route>  
          <Route path="" element={<Home/>}></Route> 
        </Routes>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
    </BrowserRouter>
  );
}


export default App;
