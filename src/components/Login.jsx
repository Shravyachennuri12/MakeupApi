import React from "react";
import './login.css'


const Login=()=>{
    return(
        <div className="d-flex shravya flex-column justify-content-center card align-items-center">
            <form >
                <b>Email:</b><input className="mt-2" type="email" id="email" placeholder="Enter e-maili..."/> <br />
                <b>Password:</b><input className="mt-2" type="password" placeholder="Password" id="password"/><br />
                <button className="btn btn-primary mt-2">Login</button>
            </form>
        </div>
          
    )
}
export default Login;