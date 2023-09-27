// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Login from './page/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
