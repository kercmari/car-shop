import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import FormularioMultiStep from './pages/FormularioMultiStep/FormularioMultiStep';
import  './App.css';
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
