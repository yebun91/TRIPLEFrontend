import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import GlobalStyle from './styles/GlobalStyle';
import './assets/font/font.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
);
