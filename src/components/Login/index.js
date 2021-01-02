import React from 'react';
// import axios from 'axios';
import './style.css';
// import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Login (){
    const { loginWithRedirect } = useAuth0();
        return(
            <div>
            <form>
                <div className="mb-3">
                    <h1>Hello Welcome to this App!!!</h1>
                    </div>
                    {/* <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> */}
                <button onClick={() => loginWithRedirect()}>Log In</button>
                {/* <div><p className = "noAccount">Don't have an account? <Link to= '/signup' className = "signupLink">Sign Up</Link></p></div> */}
            </form>
        </div>
        )
    
}

export default Login;