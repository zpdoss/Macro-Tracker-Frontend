
import {Routes, Route} from 'react-router-dom';
//import { Helmet } from 'react-helmet';


import './App.css';
//import './NavBar.tsx';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage.tsx';
import DiaryPage from './pages/DiaryPage.tsx';
import AboutUsPage from './pages/AboutUsPage.tsx';
import CalendarPage from './pages/CalendarPage.tsx';
import AccountPage from './pages/AccountPage.tsx';
import RecipesPage from './pages/RecipesPage.tsx';
import VerificationPage from './pages/VerificationPage.tsx';
import ForgotPassPage from './pages/ForgotPassPage.tsx';
import NewPassPage from './pages/NewPassPage.tsx';

function App() {
    return(
    <>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Diary" element={<DiaryPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/Calendar" element={<CalendarPage />} />
          <Route path="/Account" element={<AccountPage />} />
          <Route path="/Recipes" element={<RecipesPage />} />
          <Route path="/Verify" element={<VerificationPage />} />
          <Route path="/ForgotPass" element={<ForgotPassPage />} />
          <Route path="/NewPass" element={<NewPassPage />} />
        </Routes>

      </div>


    </>
  );
}
export default App;
