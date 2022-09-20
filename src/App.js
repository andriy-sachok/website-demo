import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContacsPage from './pages/ContacsPage';

import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path='/' element={<div>Page with '/' path</div>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacs' element={<ContacsPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
