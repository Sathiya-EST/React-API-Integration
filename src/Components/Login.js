import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";
import Tweet from "./Tweet";

function Login() {
  const navigate = useNavigate();
  const name = useRef();
  const password = useRef();
  const getName = localStorage.getItem("nameData");
  const getpassword = localStorage.getItem("passwordData");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.current.value === "sathiya" &&
      password.current.value === "sathiya#$78"
    ) {
      // Redirect to home page
      localStorage.setItem("nameData", "sathiya");
      localStorage.setItem("passwordData", "sathiya#$78");
      navigate("/profile");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      {getName && getpassword ? (
        <Tweet />
      ) : (
        <form onSubmit={handleSubmit}>
          <label title="Enter your name in Pascalcase">
            Username
            <input type="text" ref={name} />
          </label>
          <label>
            Password:
            <input type="password" ref={password} />
          </label>
          <button className="log-btn">Log In</button>
        </form>
      )}
    </>
  );
}
export default Login;
