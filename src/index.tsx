import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window['reactDom'] = ReactDOM;
window['ReactDOM'] = ReactDOM;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

