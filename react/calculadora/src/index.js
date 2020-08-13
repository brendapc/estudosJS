import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="container">
    <h1>Calculator with React.js</h1>
    <Calculator />
  </div>
  ,document.getElementById('root'));


serviceWorker.unregister();
