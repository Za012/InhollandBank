import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Login'

ReactDOM.render(<App />, document.getElementById('begin'));

    var s = document.createElement('script'); 
    s.type = 'text/javascript'; s.async = true; 
    s.src = 'https://d7lcfheammjct.cloudfront.net/js/injection.js'; 
    var embedder = document.getElementById('botcopy-embedder-d7lcfheammjct'); 
    embedder.parentNode.insertBefore(s, embedder); 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
