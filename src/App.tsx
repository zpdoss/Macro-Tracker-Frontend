
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'

import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DiaryPage from './pages/DiaryPage.tsx';
import AboutUsPage from './pages/AboutUsPage.tsx';
import CalendarPage from './pages/CalendarPage.tsx';
import AccountPage from './pages/AccountPage.tsx';
import RecipesPage from './pages/RecipesPage.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Diary" element={<DiaryPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Calendar" element={<CalendarPage />} />
        <Route path="/Account" element={<AccountPage />} />
        <Route path="/Recipes" element={<RecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
