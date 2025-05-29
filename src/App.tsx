import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Discount from './components/Discount';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="classes"><Classes /></section>
        <section id="trainers"><Trainers /></section>
        <Testimonials />
        <Discount />
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;