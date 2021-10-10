import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = <App />;


if (document.getElementById('calc-root')) {
    ReactDOM.render(
        app,
        document.getElementById('calc-root')
    );
}
