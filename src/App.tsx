import './app.sass'
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from './components/layout/Header';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

function App() {
  return (
    <>
       <div className='header-container'>
                <Header />
            </div>
            <div className='main-container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/register' element={<RegistrationScreen />} />
            </Routes>
            </div>
    </>
  );
}

export default App;
