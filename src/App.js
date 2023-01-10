import './App.css';

import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';
import AdminHome from './Components/AdminHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <Routes>

              <Route path="/" element={<LandingPage/>}/>
              <Route path="/admin-login" element={<AdminLogin/>}/>
              <Route path="user-login" element={<UserLogin/>}/>
              <Route path="/admin/*" element={<AdminHome/>}/>{/*we dont what comes after those links there may be many links*/}

          </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
