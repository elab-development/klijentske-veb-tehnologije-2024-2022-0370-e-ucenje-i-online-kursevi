import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import NavMenu from '../components/NavMenu';
import { KursProvider } from '../components/KursContext';
import Footer from '../components/Footer';
import TestComponent from '../components/TestComponent';
import AboutPage from '../pages/AboutPage';
import TermsPage from '../pages/TermsPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';


const App: React.FC = () => {
  return (
    <Router>
      <KursProvider>
        <NavMenu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/uslovi-koriscenja" element={<TermsPage />} />
          <Route path='/login' element={<LoginPage />} />
         <Route path='/' element={<LoginPage />} />
         <Route path='/profile' element={<ProfilePage />} />
      
        </Routes>
        <Footer />
      </KursProvider>
      <TestComponent
        onClick={() => {
          console.log('Test radi!');
        }}
      />
    </Router>
  );
};

export default App;
