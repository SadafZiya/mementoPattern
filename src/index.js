import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {unregister} from './registerServiceWorker';
import './index.css'

console.log = process.env.NODE_ENV!=='development'?()=>{}: console.log;


ReactDOM.render( <App /> , document.getElementById('root'));
unregister();

