import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';  // Assuming Navbar is correctly imported
import myImage from './assets/image.jpeg';  // Assuming your image is imported correctly

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
        <div>
          <h1>Welcome to my website!</h1>
          <img src={myImage} alt="A description of the image" style={{ width: '50%', height: 'auto' }} />
        </div>
      </div>
    </Router>
  );
}

export default App;
