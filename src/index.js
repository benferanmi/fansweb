import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
localStorage.setItem('userType', 'user')
root.render(
<BrowserRouter>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);
