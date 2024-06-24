import React from 'react';
import '../styles/GalleryPage.css';
import Kurs from '../components/Kurs';
//import { useNavigate } from 'react-router-dom';
import { useKursContext } from '../components/KursContext';

const GalleryPage: React.FC = () => {
  const { kursKupljen, setKursKupljen } = useKursContext(); // Dobijanje stanja i funkcije za postavljanje stanja iz konteksta
  console.log(kursKupljen);
  //  const navigate = useNavigate();

  const handleKupiKurs = () => {
    setKursKupljen(true); // Postavlja stanje kupljenosti kursa na true
  };

  /*
 const handleDodajUKorpu = () => {
    if (kursKupljen) {
      navigate('/cart'); // Preusmeravanje na CartPage samo ako je kurs kupljen
    }
  };*/

  /*
  
  <div className="section1">
        <h1>KURSEVI</h1>
        <p>Postani deo zajednice.</p>
        
      </div>

     

      {kursKupljen && (
        <div className="obavestenje">
          <p>Da li zelite da dodate kurs u korpu?</p>
         <button onClick={handleDodajUKorpu}>Dodaj u korpu</button>
        </div>
      )}

      <div className="content-wrapper">
        <div className="text-above-image">
          <p className="galerijaTekst">Ovde možete pogledati još naših kurseva koji će uskoro biti dostupni!</p>
        </div>
        <div className="section-right">
          <img src="../slike/kursevii.png" alt="Gallery Image" className="gallery-image" />
        </div>
      </div>
  
  
  */
  return (
    <div className='gallery-container'>
      <div className='pozadina'>
        <div className='welcomeTekst'>
          <h1>KURSEVI</h1>

          <p className='paragraf1'>postani deo zajednice</p>

          <div className='sekcija1'>
            <Kurs
              cena={30}
              naziv='1.JavaScript: Dinamicne Web Stranice'
              opis='Naučite osnove JavaScript-a i kako da kreirate interaktivne veb stranice '
              onKupi={handleKupiKurs}
            />
            <Kurs
              cena={20}
              naziv='2.Osnove SQL-a za Početnike'
              opis='Savladajte osnove SQL-a i naučite kako da kreirate, pretražujete i upravljate bazama podataka kroz praktične primere i vežbe.'
              onKupi={handleKupiKurs}
            />
            <Kurs
              cena={40}
              naziv='3.Docker Domen'
              opis='Kurs obuhvata osnovne koncepte Docker arhitektura, rad sa Docker slikama i kontejnerima, kao i napredne tehnike poput orkestracije sa Docker Compose i Kubernetesom.'
              onKupi={handleKupiKurs}
            />
          </div>

          <div className='content-wrapper'>
            <div className='text-above-image'>
              <p className='galerijaTekst'>
                Ovde možete pogledati još naših kurseva koji će uskoro biti
                dostupni!
              </p>
            </div>
            <div className='section-right'>
              <img
                src='../slike/kursevii.png'
                alt='Gallery Image'
                className='gallery-image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
