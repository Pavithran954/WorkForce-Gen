import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct import for createRoot
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './components/context/contextProvider.js';

// Create root with createRoot
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
