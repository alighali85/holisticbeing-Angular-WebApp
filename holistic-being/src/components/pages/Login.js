import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
<div class="ui-container">
    <div> Log in component works 
        <Link to="/"> back to Home Page</Link>
        <Link to="/login/register"> Rgister new user </Link>
    </div>
</div>
)

export default Login;