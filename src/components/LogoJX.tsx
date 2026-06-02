import React from 'react';
// Importamos la imagen desde la ruta que especificaste
import logoJuleonix from '../assets/images/logo-nuevo.png'; 

export default function LogoJX({ 
  className = "h-8 w-8", 
  id 
}: { 
  className?: string; 
  id?: string; 
}) {
  return (
    <img 
      src={logoJuleonix} 
      alt="Juleonix Digital Logo" 
      className={className} 
      id={id || "logo-jx-img"}
      style={{ 
        aspectRatio: '1/1', 
        objectFit: 'contain' 
      }}
    />
  );
}