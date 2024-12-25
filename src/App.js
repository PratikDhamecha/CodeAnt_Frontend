import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import HomeLayout from './home/HomeLayout';
import Home from './home/Home';
import Signin from './signin/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Signin />} />
          <Route path='/home' element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
