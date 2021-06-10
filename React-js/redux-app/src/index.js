import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootreducer from './reducer/index3';
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import { Provider } from 'react-redux'
// import rootreducer from './reducer';

let store=createStore(rootreducer)

ReactDOM.render(
  <React.StrictMode>
   
   <Provider store={store}>
   <App />
   </Provider>
    
   
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
