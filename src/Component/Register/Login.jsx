import React from 'react'
import { useState } from "react";
import "./Form.css";
import vid from "./1.mp4";
const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    const loginData = {
      email: email,
      pass: pass
    }
    axios.post(`http://localhost:5000/LogIn`, loginData)
      .then((res) => {
        if (res.data === "exists") {
          alert("Login Successfull");
          navigate('/');
        }
        else if (res.data === "notexists") {
          alert("Invalid Password");
        }
        else {
          alert("UserNotFound");
        }
      })
      .catch((err) => {
        alert(loginData.email);
      })

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
            <input id="inp3" type="email" placeholder="Email" required />
          </div>

          <div className="input">
            <label>Password:</label>
            <input id="inp5" type="password" placeholder="Enter Password" required value={pass} onChange={(e) => setpass(e.target.value)} />
          </div>

          <button type="submit" onClick={handleSubmit}>Login</button>

          <div className="login-link">
            <p>
              Don't have an account?<a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
