import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Corrected import path
import './index.css'; // Imports main CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);