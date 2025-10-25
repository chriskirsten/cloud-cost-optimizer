import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './components/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Home />
      </Router>
    </AuthProvider>
  );
}

export default App;
