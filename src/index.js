import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Tweet from "./Components/Tweet";
import Message from "./Components/Message";
import LoginForm from "./Components/Loginform";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<App />} />
      <Route path="/Loginfrom" element={<LoginForm/>} />

      <Route path="/profile" element={<Tweet />} />
      <Route path="/tweet" element={<Message />} />
    </Routes>
  </BrowserRouter>
);
