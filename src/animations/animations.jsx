import { gsap } from 'gsap';

export const animation = () => {
  
    // Initial logo animation
    gsap.fromTo('.logo', {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 1
    });

    // Create timeline for nav items and buttons
    const tl = gsap.timeline({ 
      delay: 1.5,
      onComplete: () => resolve() // Resolve the promise when timeline completes
    });
    
    tl.fromTo('.nav-item', {
      y: -30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1
    })
    .fromTo('.button-container button', {
      y: -30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1
    });
    tl.fromTo('.frontQuote', {
      x: -100,
      opacity: 0,
      duration : 1,
    }, {
      x: 0,
      opacity: 1,
      duration : 1,
      stagger : 1,
    })

    
    
  };
  

