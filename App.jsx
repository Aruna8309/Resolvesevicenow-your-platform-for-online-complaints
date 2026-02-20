import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ComplaintDetails from './pages/ComplaintDetails';
import ComplaintForm from './components/ComplaintForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaints/:id" element={<ComplaintDetails />} />
        <Route path="/submit-complaint" element={<ComplaintForm />} />
      </Routes>
    </Router>
  );
};

export default App;