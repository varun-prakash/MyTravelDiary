import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./Navbar.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
            <Link className="link" to="/" onClick={handleLogout}>
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img className="navImg" src={user.profilepic} alt="" />
        ) : (
          // <Link to="/settings">

          // </Link>
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
