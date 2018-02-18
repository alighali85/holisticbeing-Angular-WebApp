import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from ' react-router-dom';
import HomePage from './components/pages/HomePage';

class App extends Component {
  render() {
    return (

     <Route  path="/" exact component="HomePage" />
    );
  }
}

export default App;
