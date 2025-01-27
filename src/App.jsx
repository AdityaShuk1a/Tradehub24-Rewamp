import './App.css';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { animation, navbarUp, navbarDown } from './animations/animations';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHitting, setIsHitting] = useState(false);

  useEffect(() => {
    const runAnimations = async () => {
      await animation();
    };
    runAnimations();
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if(e.deltaY > 0){
        
        navbarUp();
      } else {
        navbarDown();
      }
    });
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsHitting(true);
      setTimeout(() => setIsHitting(false), 300); // Match transition duration
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div style={{
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
        transform: `
          translate(-50%, -50%) 
          ${isHitting ? 'rotate(-45deg) scale(1.2)' : 'rotate(30deg) scale(1)'}
          scaleX(-1)  
        `,
        pointerEvents: "none",
        zIndex: 9999,
        width: "2vw",
        height: "2vw"
      }}>
      <img 
          src="src//assets//icons8-hammer-40.png" 
          alt="cursor" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            userSelect: "none",
            
            WebkitUserSelect: "none"
          }}
        />
      </div>
      
      <Home />
    </>
  );
}

export default App;
