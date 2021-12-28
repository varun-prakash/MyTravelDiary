import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" placeholder="Enter your email...." />
        <label>Password</label>
        <input type="password" placeholder="Type your password...." />
        <button className="loginbtn">Login</button>
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
