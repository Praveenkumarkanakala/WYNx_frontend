import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
// import Homepage from './components/homepage/homepage';
import Footer from './components/footer/footer';
import Sponsor from './components/sponsorship/sponsor';
import Gallery from './components/Gallary/gallary';
import Awardcategory from './components/Awardctg/awardctg';
import Awardwinners from './components/Awardwinner/winner';
import Whynominate from './components/whynominate/whynominate';
import AwardRegistration from './components/Awardregister/awardregister';
import NewHome from "./components/NewHome/home";



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          {/* <Route path="/home" element={<Homepage />} />  */}
          <Route path="/footer" element={<Footer />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/awardctg" element={<Awardcategory />} />
          <Route path="/awardwnrs" element={<Awardwinners />} />
          <Route path="/whynominate" element={<Whynominate />} />
          <Route path='/awardreg' element={<AwardRegistration />} />
          <Route path='/' element={<NewHome />} />
        </Routes>
    </Router>
  );
}

export default App;
