/* eslint-disable react/prop-types */
import React from 'react';

function Nav(props) {
  const { aboutButton, showAbout } = props;

  return (
    <nav className="navbar--container">
      <div className="logo--text">
        <div className="art--container">
          <img
            className="logo--art"
            alt="shiba icon"
            src="../images/cool.png"
          />
        </div>
        <span className="pixel--font">Memes Of Matching</span>
      </div>
      <button
        type="button"
        onClick={aboutButton}
        className="about--text primary--button"
      >
        {showAbout ? 'Go Back' : 'About'}
      </button>
    </nav>
  );
}

export default Nav;
