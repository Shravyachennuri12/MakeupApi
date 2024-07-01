import React from "react";
import './signup.css'


const SignUp=()=>{
    return(
        <div class="register-div animate__animated animate__zoomIn">
        <i class="fa fa-user-circle"></i>
        <h2>Register Form</h2>
        <form class="register-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="User Name" />
          </div>
      
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
      
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" />
          </div>
      
          <div>
            <input type="submit" value="Register" class="register-btn" />
          </div>
        </form>
      </div>
          
    )
}
export default SignUp;