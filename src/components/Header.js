import React from 'react';
import title from './images/Science Olympiad img.png';

function Header({ currentUser, handleSignIn, handleSignOut, currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <img src={title} className="App-title" alt="title" />
      <div className="header-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('about')}
              className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#important-information"
              onClick={() => handlePageChange('important-information')}
              className={currentPage === 'important-information' ? 'nav-link active' : 'nav-link'}
            >
              Important Information
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#events"
              onClick={() => handlePageChange('events')}
              className={currentPage === 'events' ? 'nav-link active' : 'nav-link'}
            >
              Events
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#scholars"
              onClick={() => handlePageChange('scholars')}
              className={currentPage === 'scholars' ? 'nav-link active' : 'nav-link'}
            >
              Scholars
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#competition-dates"
              onClick={() => handlePageChange('competition-dates')}
              className={currentPage === 'competition-dates' ? 'nav-link active' : 'nav-link'}
            >
              Competition Dates
            </a>
          </li>
        </ul>

        {/* Sign In / Sign Out buttons */}
        {currentUser ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
      </div>
    </header>
  );
}

export default Header;
