import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger); 
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
    tl.fromTo('.img1', {
      x: 100,
      opacity: 0,
      duration : 1,
    }, {
      x: 0,
      opacity: 1,
      duration : 1,
      stagger : 1,
    })

    tl.fromTo('.howItWorks', {
      y: -30,
      opacity: 0,
      duration : 0.3,
    }, {
      y: 0,
      opacity: 1,
      duration : 1,
    })
    tl.fromTo('.stepCard', {
      x: 100,
      opacity: 0,
      duration : 0.2,
    }, {
      x: 0,
      opacity: 1,
      duration : 1,
      stagger : 0.1,
    })
    tl.fromTo('.tradeheading', {
      y: 30,
      opacity: 0,
      duration : 0.3,
      scrollTrigger : {
        trigger : '.trade',
        start : 'top 30%',
        end : 'bottom 0%',
        markers : true,
        
      }
    }, {
      y: 0,
      opacity: 1,
      duration : 0.3,
      scrollTrigger : {
        trigger : '.trade',
        start : 'top 30%',
        end : 'bottom 0%',
        markers : true,
        
      }
    })
  };
  


