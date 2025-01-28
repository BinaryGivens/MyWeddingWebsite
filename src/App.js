import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import OurStory from './components/pages/OurStory';
import RSVP from './components/pages/RSVP';
import GuestAttireInfo from './components/pages/GuestAttireInfo';
import Gifts from './components/pages/Gifts';


import {BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/ourstory' exact element={<OurStory/>}/>
          <Route path='/rsvp' exact element={<RSVP/>}/>
          <Route path='/guestattireinfo' exact element={<GuestAttireInfo/>}/>
          <Route path='/gifts' exact element={<Gifts/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
