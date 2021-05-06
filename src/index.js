import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';
import './index.css';
const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>, 
    document.getElementById('root')
);