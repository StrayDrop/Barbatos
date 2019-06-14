import React from 'react';
import ReactDOM from 'react-dom';
import 'home/index.css';
import App from 'pages/App';
import * as serviceWorker from 'home/serviceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();