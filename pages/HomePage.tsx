import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/gallery');
  };

  return (
    <div className='home-container1'>
      <div className='split-container'>
        <div className='text-side'>
          <p className='learn'>
            <b>LEARN THE SKILLS TO MAKE TOMORROW BETTER</b>
          </p>
          <p className='main-paragraph'>
            Dobrodošli na našu platformu za e-učenje, vašeg idealnog partnera u
            obrazovanju i profesionalnom razvoju! Vaša budućnost počinje ovde.
          </p>
        </div>
        <div className='image-side'>
          <img src='../slike/homePage.png' alt='Slika' />
        </div>
      </div>
      <div className='home-container2'>
        <button className='gallery-button' onClick={handleButtonClick}>
          Zapocni
        </button>
      </div>
      <div className='split-container2'>
        <div className='image-side1'>
          <img src='../slike/covek.png' alt='Druga slika' />
        </div>
        <div className='text-side1'>
          <p className='main-paragraph2'>
            Naš cilj je da vam pružimo alate i resurse koji će vam pomoći da
            uspostavite i održavate kvalitetnu komunikaciju sa vašim
            predavačima. Verujemo da je dobra komunikacija temelj uspešnog
            obrazovanja i želimo vam puno uspeha u vašem akademskom putu!
          </p>
          <p className='main-paragraph2'>
            Praćenje napretka nije samo evaluacija vaših postignuća, već i
            prilika da se kontinuirano usavršavate i prilagodite svoj pristup
            učenju.
          </p>
          <p className='main-paragraph2'>
            Sa 24/7 online pristupom alatima za upravljanje vremenom, imate
            fleksibilnost i kontrolu da organizujete svoje obaveze na način koji
            najbolje odgovara vašem stilu rada i životu.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
