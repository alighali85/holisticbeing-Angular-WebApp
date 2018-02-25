import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Login from './components/pages/Login';
import RegisterPage from './components/pages/RegisterPage';




const App= () => <div>
  here is the app
     <Route  path="/" exact component={HomePage} />
     <Route  path="/login" exact component={Login}/>
     <Route  path="/login/register" exact component={RegisterPage}/>
  </div>  

export default App;
