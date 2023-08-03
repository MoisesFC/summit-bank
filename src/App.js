import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CheckingPage from './pages/CheckingPage';
import CreditCardPage from './pages/CreditCardPage';
import RetirementPage from './pages/RetirementPage';


function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checking" element={<CheckingPage />} />
          <Route path="/credit-card" element={<CreditCardPage />} />
          <Route path="/retirement" element={<RetirementPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>

  );
}

export default App;
