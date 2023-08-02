import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './component/menu/menu';
import { Hero } from './component/hero/hero';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Hero />
  </React.StrictMode>
);
