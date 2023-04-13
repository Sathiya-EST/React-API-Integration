import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./Login";
import "../Components/Tweet.css";
import Profile from "./Profile";
// import Message from "./Message";
function Tweet(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="content">
      {localStorage.getItem("nameData") &&
      localStorage.getItem("passwordData") ? (
        <div className="con-div">
          {/* <h1>Welcome {localStorage.getItem("nameData")}</h1>
           */}

          <Profile />
          {/* <Message/> */}
          <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 out-btn">
            <button
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
export default Tweet;
