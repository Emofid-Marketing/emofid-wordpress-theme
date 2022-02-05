import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = <App />;


if (document.getElementById('branches-app')) {
  ReactDOM.render(
    app,
    document.getElementById('branches-app')
  );
}
