import React from "react";
import "../Components/Tweet.css";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 profile">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://www.svgrepo.com/show/41010/girl.svg"
        alt="Woman's Face"
      />
      <div  className="text-center space-y-2 sm:text-left">
        <div  className="space-y-0.5">
          <p  className="text-lg text-black font-semibold">
            {localStorage.getItem("nameData")}
          </p>
          <p  className="text-slate-500 font-medium">System Engineer</p>
        </div>

        <button
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => {
            navigate("/tweet");
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default Profile;
