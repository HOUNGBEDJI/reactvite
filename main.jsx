import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // il doit importer ton App principal
import './index.css'; // optionnel

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
