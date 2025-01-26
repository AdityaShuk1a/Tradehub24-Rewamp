import './App.css';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { navbarAnimation, homeAnimation } from './animations/animations';

function App() {
  useEffect(() => {
    const runAnimations = async () => {
      // Run animations in sequence
      await navbarAnimation();
      await homeAnimation();
      // Add more animations in sequence as needed
    };

    runAnimations();
  }, []);

  return (
    <div>
     
     
      <Home />
     
    </div>
  );
}

export default App;
