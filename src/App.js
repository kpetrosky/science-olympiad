import React, { useState } from 'react';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/signUp'; // Import the SignUp component
import About from './components/pages/About'; // Import the About component
import ImportantInformation from './components/pages/ImportantInformation'; // Import the ImportantInformation component
import Events from './components/pages/Events'; // Import the Events component
import Scholars from './components/pages/Scholars'; // Import the Scholars component
import CompetitionDates from './components/pages/CompetitionDates'; // Import the CompetitionDates component

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('announcements'); // Define currentPage state
  const [isSigningUp, setIsSigningUp] = useState(false); // New state for sign-up form

  const handleSignIn = (username) => {
    setCurrentUser(username);
    setIsSigningUp(false); // Reset sign-up form state
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setCurrentPage('announcements'); // Reset to default page after sign-out
  };

  const handleSignUp = (username) => {
    setCurrentUser(username);
    setIsSigningUp(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentUser ? (
        // Show navigation and pages only if the user is signed in
        <>
          <Header
            currentUser={currentUser}
            handleSignOut={handleSignOut}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />

          {/* Main content section */}
          <main className="App-content">
            {/* Render content based on the selected page */}
            {currentPage === 'about' && <About />}
            {currentPage === 'important-information' && <ImportantInformation />}
            {currentPage === 'events' && <Events />}
            {currentPage === 'scholars' && <Scholars />}
            {currentPage === 'competition-dates' && <CompetitionDates />}
          </main>
        </>
      ) : (
        // Show sign-in and sign-up forms if the user is not signed in
        <>
          {isSigningUp ? (
            // Show sign-up form
            <SignUp handleSignUp={handleSignUp} />
          ) : (
            // Show sign-in form
            <SignIn handleSignIn={handleSignIn} setIsSigningUp={setIsSigningUp} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
