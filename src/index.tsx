import React from 'react';
import ReactDOM from 'react-dom/client';
import { Page } from './components';
import './index.css'
import TodoProvider from './Provider/todoProvider';
import FilterProvider from './Provider/filterProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <FilterProvider>
        <Page />
      </FilterProvider>
    </TodoProvider>
  </React.StrictMode>
);


