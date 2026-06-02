import React from 'react';

export default function LogoJX({ 
  className = "h-8 w-8", 
  id 
}: { 
  className?: string; 
  id?: string; 
}) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      id={id || "neon-logo-jx-svg"}
      style={{ aspectRatio: '1/1' }}
    >
      <defs>
        {/* Superior neon glow filters for extra radiance and high-fidelity depth */}
        <filter id="glow-cyan-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="2" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glow-pink-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="2" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="3d-depth-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1.5" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.85" />
        </filter>

        {/* 3D-like metallic and neon color gradients exactly matching the uploaded graphic */}
        <linearGradient id="hexGradient" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f0ff" />     {/* Bright Cyan */}
          <stop offset="35%" stopColor="#2e4eff" />    {/* Cyber Blue */}
          <stop offset="70%" stopColor="#9a00ff" />    {/* Deep Violet */}
          <stop offset="100%" stopColor="#ff007f" />   {/* Power Pink */}
        </linearGradient>

        <linearGradient id="cyanGrad" x1="20" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#0072ff" />
        </linearGradient>

        <linearGradient id="pinkGrad" x1="50" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff007f" />
          <stop offset="100%" stopColor="#e100ff" />
        </linearGradient>

        {/* Gradients for individual 3D segments around the hexagon */}
        <linearGradient id="gradTopLeft" x1="43" y1="8" x2="12" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#0055ff" />
        </linearGradient>
        
        <linearGradient id="gradTopRight" x1="57" y1="8" x2="88" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9a00ff" />
          <stop offset="100%" stopColor="#ff00a0" />
        </linearGradient>

        <linearGradient id="gradBottomLeft" x1="12" y1="66" x2="43" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0055ff" />
          <stop offset="100%" stopColor="#7000ff" />
        </linearGradient>

        <linearGradient id="gradBottomRight" x1="88" y1="66" x2="57" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff00a0" />
          <stop offset="100%" stopColor="#7000ff" />
        </linearGradient>

        {/* Shaded/Bevel gradients to simulate 3D depth illumination */}
        <linearGradient id="bevelGradTopLeft" x1="43" y1="8" x2="12" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00aacc" />
          <stop offset="100%" stopColor="#0038b3" />
        </linearGradient>
        <linearGradient id="bevelGradTopRight" x1="57" y1="8" x2="88" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6700b3" />
          <stop offset="100%" stopColor="#b30070" />
        </linearGradient>
        <linearGradient id="bevelGradBottomLeft" x1="12" y1="66" x2="43" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0038b3" />
          <stop offset="100%" stopColor="#4c00b3" />
        </linearGradient>
        <linearGradient id="bevelGradBottomRight" x1="88" y1="66" x2="57" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#b30070" />
          <stop offset="100%" stopColor="#4c00b3" />
        </linearGradient>
      </defs>

      {/* Main Container applying overall Drop Shadow for realism */}
      <g filter="url(#3d-depth-shadow)">

        {/* LAYER 1: 3D EXTRUDED BEVEL HOUSINGS (Darker, wide base strokes to simulate the physical extruded thickness) */}
        <g strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95">
          {/* Hexagon Bevel base paths */}
          <path d="M 43,8 L 12,28.5 L 12,46" stroke="url(#bevelGradTopLeft)" />
          <path d="M 12,66 L 12,71.5 L 43,92" stroke="url(#bevelGradBottomLeft)" />
          <path d="M 88,66 L 88,71.5 L 57,92" stroke="url(#bevelGradBottomRight)" />
          <path d="M 88,46 L 88,28.5 L 57,8" stroke="url(#bevelGradTopRight)" />

          {/* Inner J Bevel base */}
          <path d="M 44,30 L 44,56 C 44,63 39.5,67 32.5,67 C 25.5,67 22,63 22,56 L 22,51" stroke="#004488" />

          {/* Inner X Bevel base */}
          <path d="M 50,30 L 72,56" stroke="#99004d" />
          <path d="M 72,30 L 50,56" stroke="#99004d" />
        </g>

        {/* LAYER 2: CHISELED FRONT COATINGS (Slightly thinner, vibrant color gradients centered perfectly) */}
        <g strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Hexagon Front Face */}
          <path d="M 43,8 L 12,28.5 L 12,46" stroke="url(#gradTopLeft)" />
          <path d="M 12,66 L 12,71.5 L 43,92" stroke="url(#gradBottomLeft)" />
          <path d="M 88,66 L 88,71.5 L 57,92" stroke="url(#gradBottomRight)" />
          <path d="M 88,46 L 88,28.5 L 57,8" stroke="url(#gradTopRight)" />

          {/* Inner J Front Face with cyan glow */}
          <g filter="url(#glow-cyan-filter)">
            <path d="M 44,30 L 44,56 C 44,63 39.5,67 32.5,67 C 25.5,67 22,63 22,56 L 22,51" stroke="url(#cyanGrad)" />
          </g>

          {/* Inner X Front Face with magenta/pink glow */}
          <g filter="url(#glow-pink-filter)">
            <path d="M 50,30 L 72,56" stroke="url(#pinkGrad)" />
            <path d="M 72,30 L 50,56" stroke="url(#pinkGrad)" />
          </g>
        </g>

        {/* LAYER 3: INTENSE GASEOUS HIGH-LIGHTS (Thin, pure white central filaments for glossiness and extreme fidelity) */}
        <g stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95">
          {/* Hexagon Glass Filaments */}
          <path d="M 43,8 L 12,28.5 L 12,46" />
          <path d="M 12,66 L 12,71.5 L 43,92" />
          <path d="M 88,66 L 88,71.5 L 57,92" />
          <path d="M 88,46 L 88,28.5 L 57,8" />

          {/* J Metallic Core Highlight */}
          <path d="M 44,30 L 44,56 C 44,63 39.5,67 32.5,67 C 25.5,67 22,63 22,56 L 22,51" />

          {/* X Metallic Core Highlights */}
          <path d="M 50,30 L 72,56" />
          <path d="M 72,30 L 50,56" />
        </g>

      </g>
    </svg>
  );
}
