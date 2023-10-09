import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Components/Home';
import Product from './Components/Product';
import Detail from './Components/Detail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product' exact element={<Product />} />
        <Route path='/:id' exact element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
