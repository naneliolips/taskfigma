import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidecard from './components/sidecard';
import reportWebVitals from './reportWebVitals';
import Maincard from './components/main-card';
import Formcard from './components/form-card';
import SecondFormcard from './components/second-form-card';
import Frame from './components/frame';
import DropFonts from './components/fontsMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formcard />


  </React.StrictMode>
);
reportWebVitals();
