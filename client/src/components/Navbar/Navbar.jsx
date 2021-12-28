import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const user = false;
  return (
    <div className="Nav">
      <div className="navLeft">
        <i className=" navIcon fab fa-facebook"></i>
        <i className="navIcon fab fa-instagram"></i>
        <i className="navIcon fab fa-twitter"></i>
        <i className="navIcon fab fa-linkedin"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="navListItem">
            {" "}
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="navListItem">
            {" "}
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="navListItem">
            {" "}
            <Link className="link" to="/">
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img
            className="navImg"
            src="https://images.pexels.com/photos/2764976/pexels-photo-2764976.jpeg?cs=srgb&dl=pexels-tubarones-photography-2764976.jpg&fm=jpg"
            alt=""
          />
        ) : (
          <ul className="navList">
            <li className="navListItem">
              {" "}
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="navListItem">
              {" "}
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="navSearchIcon fas fa-search"></i>

        <div className="box"></div>
      </div>
    </div>
  );
}
