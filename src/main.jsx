import './style.css'
import App from './App'
import { createRoot } from 'react-dom/client';
import React from 'react'

const container = document.getElementById('app');
const root = createRoot(container); // create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




