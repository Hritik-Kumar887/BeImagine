import React, { Component } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    if (!e.target.username.value) {
      alert("Username is required");
    } else if (!e.target.username.value) {
      alert("Valid username is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      (e.target.username.value === "Hritik" && e.target.password.value === "hrit@123") || (e.target.username.value === "Navraj" && e.target.password.value === "beimagine")
    ) {
      navigate("/reports")
      // alert("Successfully logged in");
      setUser({ currentUser: { username: e.target.username.value } });
      e.target.username.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong username or password combination");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    alert("Contact to Administrator : hritik@beImg.com");
  };

  return (
    <div className="loginWrapper">
      <div className="login">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="text">Username</label>
            <input type="text" name="username" placeholder="Manager's Name" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="primary">ENTER</button>
        </form>
        <button className="secondary" onClick={handleClick}>
          Forgot Credentials
        </button>
      </div>
    </div>
  );
}

export default Login;