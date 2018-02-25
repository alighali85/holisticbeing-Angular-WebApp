import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'

const HomePage = () => (
    <div class="ui container"> 

        Home page works !
    <Link to="/login"> Login </Link>
    </div>

);

export default HomePage;

