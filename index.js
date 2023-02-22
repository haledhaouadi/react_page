import  ReactDOM  from 'react-dom'
import App from './App'
import './index.css'
import React from 'react'

const rootElement = document.querySelector('#root')
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
  <App />
    </React.StrictMode>
  );