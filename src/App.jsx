import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // <-- Add this import
import Home from './pages/home'; // Corrected the casing of "Home"
import FormPage from './pages/FormPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
