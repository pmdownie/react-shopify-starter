import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import routes from './routes';
import './index.css';

ReactDOM.render(
  <Root>{routes}</Root>,
  document.getElementById('root')
);
