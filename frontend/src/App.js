import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LandingPage from './components/LandingPage/LandingPage';
import GymTimePage from './components/GymTimePage/GymTimePage';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/main-page" element={<MainPage/>} />
        <Route path="/gym-page" element={<GymTimePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
