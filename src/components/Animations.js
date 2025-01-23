import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Animations = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Example animation using GSAP
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 2 });

    // Cleanup on component unmount
    return () => {
      gsap.killTweensOf(element);
    };
  }, []);

  return (
    <div ref={elementRef} style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
      Animated Element
    </div>
  );
};

export default Animations;
