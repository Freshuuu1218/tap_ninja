import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Register from './pages/register.js';
import Main from './pages/main.js';
import Login from './pages/login.js';
import Profile from './pages/profile.js';
import Edit from './pages/edit.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile/edit' element={<Edit/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
