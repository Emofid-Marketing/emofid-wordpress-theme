import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = <App />;


if (document.getElementById('advanced-calculator-app')) {
  ReactDOM.render(
    app,
    document.getElementById('advanced-calculator-app')
  );
}
