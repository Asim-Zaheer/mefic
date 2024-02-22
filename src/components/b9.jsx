'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function B2() {
    const svgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 }); // Loop indefinitely
        // GSAP animation to move the SVG towards the left smoothly
        tl.to(svgRef.current, {
          x: -250, // Move 100 units towards the left
          duration: 4, // Animation duration in seconds
          ease: "power1.inOut",
          yoyo: true, // Play the animation in reverse after completing
      repeat: -1,
           // Easing function for smooth motion
        });
       
      }, []); // Empty dependency array ensures this effect runs only once after initial render
    
    
  return (
    <svg
    ref = {svgRef}
      xmlns="http://www.w3.org/2000/svg"
     width="10000"
      height="256"
      fill="#A0AEC0"
      viewBox="0 0 1420 466"
    >
      <path
        fill="#A0AEC0"
        fillRule="evenodd"
        d="M0 362V207h432v155h432V155h432V0h432v466H0V362z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_38_546"
          x1="864"
          x2="864"
          y1="0"
          y2="466"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E39D77"></stop>
          <stop offset="1" stopColor="#D6682C"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default B2;
