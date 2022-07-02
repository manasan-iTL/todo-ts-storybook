import React from 'react';
import ReactDOM from 'react-dom/client';
import { Page } from './components';
import './index.css'
import { item } from './components/types/types';

const items: item[] = [
  {id: "1", task: "英語の課題", finish: false, pinned: false }, 
  {id: "2", task: "プログラミングの課題", finish: true, pinned: false },
  {id: "3", task: "数学の課題", finish: false, pinned: false },
  {id: "4", task: "筋トレ", finish: true, pinned: false },
  {id: "5", task: "買い物", finish: false, pinned: true },
  {id: "6", task: "掃除", finish: true, pinned: true },
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);


