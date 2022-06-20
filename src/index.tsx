import React from 'react';
import ReactDOM from 'react-dom/client';
import { TopPage } from './components/templates';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TopPage />
  </React.StrictMode>
);


