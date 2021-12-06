import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = <App />;


if (document.getElementById('funds-table')) {
  ReactDOM.render(
    app,
    document.getElementById('funds-table')
  );
}
