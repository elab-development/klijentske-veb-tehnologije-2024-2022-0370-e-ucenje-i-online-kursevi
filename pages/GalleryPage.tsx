import React, { useEffect, useState } from 'react';
import '../styles/GalleryPage.css';
import Kurs from '../components/Kurs';
//import { useNavigate } from 'react-router-dom';
import { useKursContext } from '../components/KursContext';
import { KursI, kurseviPocetni } from '../models/Kurs';

const GalleryPage: React.FC = () => {

  const { kursKupljen, setKursKupljen } = useKursContext(); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesArray, setPagesArray] = useState<number[]>([]);
  const [kursevi, setKursevi] = useState<KursI[]>([]);
=======
  const { kursKupljen, setKursKupljen } = useKursContext(); // Dobijanje stanja i funkcije za postavljanje stanja iz konteksta

  console.log(kursKupljen);
  //  const navigate = useNavigate();

  const handleKupiKurs = () => {
    setKursKupljen(true); // Postavlja stanje kupljenosti kursa na true
  };


  useEffect(() => {
    setKursevi(kurseviPocetni);
  }, []);

  useEffect(() => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(kursevi.length / 3); i++) {
      pages.push(i);
    }
    setPagesArray(pages);
    setCurrentPage(1);
  }, [kurseviPocetni, kursevi]);

  const handleFilter = (filter: string) => {
    let filteredKursevi = [];

    if (filter === '<40') {
      filteredKursevi = kurseviPocetni.filter((kurs) => kurs.cena < 40);
      setKursevi(filteredKursevi);
    }

    if (filter === '>40') {
      filteredKursevi = kurseviPocetni.filter((kurs) => kurs.cena >= 40);
      setKursevi(filteredKursevi);
    }

    if (filter === 'reset') {
      setKursevi(kurseviPocetni);
    }
  };

  return (
    <div className='gallery-container'>
      <div className='pozadina'>
        <div className='welcomeTekst'>
          <h1>KURSEVI</h1>

          <p className='paragraf1'>postani deo zajednice</p>

          <div className='sekcija1'>
            {kursevi
              .slice(currentPage * 3 - 3, currentPage * 3)
              .map((kurs, idx) => (
                <Kurs
                  key={idx}
                  cena={kurs.cena}
                  naziv={kurs.naziv}
                  opis={kurs.opis}
                  onKupi={handleKupiKurs}
                />
              ))}
          </div>

          <div className='paginacija'>
            {pagesArray.map((page) => (
              <div
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`paginacija-item ${
                  page === currentPage && 'aktivno'
                }`}
              >
                {page}
              </div>
            ))}
          </div>

          <div className='filteri'>
            <div onClick={() => handleFilter('<40')}>{'< 40e'}</div>
            <div onClick={() => handleFilter('>40')}>{'> 40e'}</div>
            <div onClick={() => handleFilter('reset')}>Učitaj sve</div>
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

/*
=======
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

=======
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

