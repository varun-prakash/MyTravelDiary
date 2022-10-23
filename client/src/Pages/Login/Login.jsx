import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(isFetching);
  return (
    <div className="Login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username...."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Type your password...."
          ref={passwordRef}
        />
        <button className="loginbtn" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="Registerbtn">
        {" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
