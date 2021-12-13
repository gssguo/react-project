import React from 'react';
import './App.css';
import Navbar  from './componets/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './componets/pages/About';
import Service from './componets/pages/Service';
import Volunteer from './componets/pages/Volunteer';
import Foster from './componets/pages/Foster';
import Privacy from './componets/pages/Privacy';
import Footer from './componets/Footer';


function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/volunteer' element={<Volunteer/>} />
          <Route path='/foster' element={<Foster/>} />
          <Route path='/privacy' element={<Privacy/>} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;