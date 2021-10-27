import React from 'react';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import Footer from './components/Footer';

import './styles/style.css';

function App() {
  return (
   <div className="main">
      <h1 className="header">CV Application</h1>
      <General />
      <Education />
      <Practical />
      <button className="finish" type="button">Finish</button>
      <Footer />
   </div>
  
  );
}

export default App;
