import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom'


function Login() {


    return (
        <div class="container">
        <div class="row">
            <div class="col-md-offset-5 col-md-3">
                <div class="form-login">
                <h4>Login</h4>
                <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" />
             
                <input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
                
                <div class="wrapper">
                <span class="group-btn">  
                <Link to="/loja"> 
                    <a href="#" class="btn btn-primary btn-md">login <i class="fa fa-sign-in"></i></a>
                    </Link> 
                </span>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }

    export default Login;