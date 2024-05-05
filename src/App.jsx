import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import FormularioMultiStep from './components/FormularioMultiStep';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
        <Route path="/" element={<FormularioMultiStep/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
