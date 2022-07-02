import React from 'react';
import ReactDOM from 'react-dom/client';
import { Page } from './components';
import './index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);


