import React, { useState } from 'react';
import InputField from '../components/InputField';
// import Button from '../components/Button';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted', { name, email, message });
    // Resetuj stanja na početne vrednosti
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact-container'>
      <h1>
        <b>KONTAKTIRAJTE NAS</b>
      </h1>
      <p className='main-paragraph'>
        Hvala što ste posetili našu stranicu! Tu smo da vam pomognemo sa svim
        pitanjima i nedoumicama u vezi sa našim kursevima.
      </p>

      <div className='split'>
        <div className='forma'>
          <InputField
            label='Name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label='Message'
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className='button-container'>
            <button onClick={handleSubmit} className='dugmeKontakt'>
              Posalji
            </button>
          </div>
        </div>
        <div className='info'>
          <div className='image-side'>
            <a
              href='https://www.google.com/maps/place/Fon/@44.7726817,20.4752233,15z/data=!4m6!3m5!1s0x475a70576248bf79:0xadaf5cff042d3bd0!8m2!3d44.7726817!4d20.4752233!16s%2Fg%2F12mkyk8h5?entry=ttu'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='../slike/kontaktslika.png' alt='Slika1' />
            </a>
                    
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
