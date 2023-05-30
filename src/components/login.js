import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleKeepSignedInChange = (event) => {
    setKeepSignedIn(event.target.checked);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      window.alert("Please enter a username/email and password.");
    } else {
      setIsLoginSuccessful(true);
    }
  };

  useEffect(() => {
    if (isLoginSuccessful) {
      window.alert("Successfully logged in.");
      navigate("/home");
    }
  }, [isLoginSuccessful, navigate]);
  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>Sign In</h1>
        <div className="signin">
          <div className="signin-newuser">
            New user? <span>Create an account</span>
          </div>
        </div>
        <div className="form-input">
          <form onSubmit={handleSubmitLogin}>
            <div className="username-input">
              <input
                type="text"
                placeholder="Username or email"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="username-input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={keepSignedIn}
                onChange={handleKeepSignedInChange}
              />
              <label className="label">Keep me signed in</label>
            </div>
            <button className="btn-signin" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="sign-in-with">
          <p>Or Sign In With</p>
          <div className="social-images">
            <img src="google.svg" alt="Google" />
            <img src="facebook.svg" alt="Facebook" />
            <img src="linkedin.svg" alt="LinkedIn" />
            <img src="twitter.svg" alt="Twitter" />
          </div>
        </div>
      </div>
      <div className="signin-right">
        <img className="image-bg" src="background.svg" alt="Background" />
      </div>
    </div>
  );
}

export default LoginForm;
