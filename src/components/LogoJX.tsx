import logoUrl from '../assets/images/logo-nuevo.png';

export default function LogoJX({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src={logoUrl} 
      alt="Juleonix Digital" 
      className={className} 
    />
  );
}
