import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './Navbar';
import { Body0 } from './Body0';
import { Body1 } from './Body1';
import { Body2 } from './Body2';
import { Body3 } from './Body3';
import { Body4 } from './Body4';
import { Body5 } from './Body5';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Body0/>
    <Body1/>
    <Body2/>
    <Body3/>
    <Body4/>
    <Body5/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
