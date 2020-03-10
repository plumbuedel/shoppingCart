import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


const titles = {
    'header':'Shopping Cart',
    'main': 'Cart Items',
    'footer' : '2018'
  }

ReactDOM.render(<App headerTit={titles.header} mainTit={titles.main}  footerTit={titles.footer}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
