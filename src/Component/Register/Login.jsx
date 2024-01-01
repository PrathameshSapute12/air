import React from 'react'
import { useState } from "react";
import "./Form.css";
import vid from "./1.mp4";
import { Link } from 'react-router-dom';
const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="wrapper">
      <video src={vid} alt="" autoPlay={"true"} loop muted />
    

      <div className="cont">
        <form>
          <h1>Login</h1>
          <div className="input">
            <label>Email:</label>
            <input id="inp3" type="email"  placeholder="Email" required />
          </div>

          <div className="input">
            <label>Password:</label>
            <input id="inp5" type="password" placeholder="Enter Password" required />
          </div>

          <button type="submit">Login</button>

          <div className="login-link">
            <p>
              Don't have an account?<Link to="/Sign">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
