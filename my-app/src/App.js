// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import SignInForm from './SignInForm';

function App() {
  return (
    <AuthProvider>
      <div>
        <header>
          <h1>Welcome to My React App</h1>
        </header>
        <main>
          <SignInForm />
          {/* Other components */}
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
