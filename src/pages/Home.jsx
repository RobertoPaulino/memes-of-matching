/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import About from '../ components/About';
import Nav from '../ components/Nav';
import Footer from '../ components/Footer';
import Hero from '../ components/Hero';
import '../index.css';

function Home() {
  const authToken = false;
  const [showAbout, setShowAbout] = useState(false);

  function aboutButton() {
    setShowAbout((prevState) => !prevState);
  }

  return (
    <div className="home--container">
      <Nav aboutButton={aboutButton} showAbout={showAbout} />
      {showAbout ? (
        <About aboutButton={aboutButton} />
      ) : (
        <Hero props={{ authToken }} />
      )}
      <Footer />
    </div>
  );
}

export default Home;
