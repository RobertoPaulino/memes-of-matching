import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
