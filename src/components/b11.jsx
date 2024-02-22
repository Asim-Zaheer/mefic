'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function B11() {
    
    const svgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 }); // Loop indefinitely
        // GSAP animation to stretch the SVG along the y-axis
        tl.to(svgRef.current, {
        
            scaleY:  1.3 , // Stretch the SVG to twice its original height
          duration: 6, // Animation duration in seconds
          ease: "power2.inOut",
          yoyo: true ,
          repeat: -1 // Easing function for smooth motion
        });
      }, []);


   
  return (
    <svg 
    ref = {svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="10000"
      height="273"
      fill="#2D3C65"
      viewBox="0 0 1728 385"
    >
      <path
        fill="#2D3C65"
        fillRule="evenodd"
        d="M0 77v77h288v154h576V0h288v154h288v38.5h288V385H0V77z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default B11;