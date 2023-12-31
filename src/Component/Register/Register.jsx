
import React from "react";
import { useState } from "react";
import "./Form.css";
import vid from "./1.mp4";


const Register = () => {
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
          <h1>Sign Up</h1>

          <div className="input">
            <label>Firstname:</label>
            <input id="inp1" type="text" placeholder="Enter Firstname" required  />
          </div>

          <div className="input">
            <label>Lastname:</label>
            <input id="inp2" type="text" placeholder="Enter Lastname" required />
          </div>

          <div className="input">
            <label>Email:</label>
            <input id="inp3" type="email" placeholder="Email" required />
          </div>

          <div className="input">
            <label>Mobile No:</label>
            <input id="inp4" type="tele" placeholder="Enter Mobile No." required />
          </div>

          <div className="input">
            <label>Password:</label>
            <input id="inp5" type="password" placeholder="Enter Password" required />
          </div>

       <button type="submit">Sign Up</button>

   

          <div className="login-link">
            <p>
              Already have an account?<a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
