import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Axios from "axios";


function LoginForm() {
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");

  //   const navigate = useNavigate();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (name === "sathiya" && password === "sathiya#$78") {
  //       // Redirect to home page

  //       navigate("/profile");
  //     } else {
  //       alert("Invalid username or password");
  //     }

  //     console.log("name:", name);
  //     console.log("password:", password);
  //   };
  const url = " http://172.105.58.224:3582/auth/login";
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  function submit(e) {
    e.preventDefault();
    const logData = { username: data.name, password: data.password };
    Axios.post(url, { logData }).then((res) => {
      console.log(res);
    });
  }
  function handleEvent(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <>
      {/* {errorMessage && <div>{errorMessage}</div>} */}
      <form onSubmit={(e) => submit(e)}>
        <label>
          Name:
          <input
            type="text"
            // value={name}
            value={data.name}
            id="name"
            onChange={(e) => handleEvent(e)}
            placeholder="Enter your Name"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            // value={password}
            value={data.password}
            id="password"
            onChange={(e) => handleEvent(e)}
            placeholder="Enter your Password"
          />
        </label>

        <button type="submit" className="log-btn">
          Submit
        </button>
      </form>
    </>
  );
}
export default LoginForm;
