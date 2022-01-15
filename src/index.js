import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Provider } from "react-redux";
 import { store } from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);