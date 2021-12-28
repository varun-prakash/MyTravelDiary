import React from "react";
import "./Header.css";
export default function header() {
  return (
    <div>
      <div className="header">
        <div className="headertitles">
          <span className="headertitlesm">My</span>
          <span className="headertitlelg">Travel Diaries</span>
        </div>
        <img
          className="headerImg"
          alt=""
          src="https://images.pexels.com/photos/3016353/pexels-photo-3016353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
    </div>
  );
}
