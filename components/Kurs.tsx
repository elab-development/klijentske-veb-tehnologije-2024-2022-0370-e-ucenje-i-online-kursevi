import React from 'react';
import '../styles/Kurs.css';
interface KursProps {
  naziv: string; // Dodajemo naziv kao string
  opis: string;
  cena: number;
  onKupi?: () => void;
}

const Kurs: React.FC<KursProps> = ({ naziv, opis, cena, onKupi }) => {
  const handleKupiClick = () => {
    if (onKupi) {
      onKupi();
    }
  };

  return (
    <div className='kurs'>
      <h2>{naziv}</h2>
      <p className='opisKursa'>{opis}</p>
      <div className='sekcija2'>
        <button onClick={handleKupiClick}>Kupi kurs</button>
      </div>
      <h3>{cena}e</h3>
    </div>
  );
};

export default Kurs;
