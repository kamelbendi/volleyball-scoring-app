import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'

/* 
import { Provider } from './state/Provider';
import reducer, { initialState } from './state/reducer'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Provider initialState={initialState} reducer={reducer}>
      <App />
    </Provider> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    </>, */}
  <App/>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

