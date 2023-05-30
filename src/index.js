import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginForm from '../src/components/login';
import HomeForm from '../src/components/home';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<HomeForm />} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
