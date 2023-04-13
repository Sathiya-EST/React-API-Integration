// import React, { useState } from "react";
import "../Components/Tweet.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Message() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    fetch("http://172.105.58.224:3582")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="mes-div">
      <div className="twe">
        <div className="head">
          <span className="twit-head">
            <div style={{ width: "275px" }}></div>
            <img
              src="https://th.bing.com/th?id=OIP.P3GJZi8Z-DGPx1JS3u5yOgHaGl&w=265&h=235&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="twitter-icon"
              className="twit-icon"
            />
            Twitter
          </span>
          <div class="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lout">
            <button
              class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="mes-send">
        <div>
          {/* Message Bar */}
          <label class="relative block" className="mes">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Tweet here ..."
              type="text"
              name="search"
              title="Type your Message"
            />
          </label>
        </div>

        {/* send image */}
        <div className="send">
          <button type="submit">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ixZrn6cAWE4PC3AFPFpuJMsBWME0cVB00iBharOzid3GmeOxSSJpUcHuyTGKU8IVAZhHkYRC2Ns&usqp=CAU&ec=48600112"
              alt="send-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
