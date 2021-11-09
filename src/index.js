import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {unregister} from './registerServiceWorker';
import '@progress/kendo-theme-material'
import './index.css'
import './all.css'

console.log = process.env.NODE_ENV!=='development'?()=>{}: console.log;


ReactDOM.render( <App /> , document.getElementById('root'));
unregister();

