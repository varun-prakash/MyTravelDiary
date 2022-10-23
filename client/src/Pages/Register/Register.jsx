import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter your Name...."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email...."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Type your password...."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerbtn">Register</button>
      </form>
      <button className="Registerbtn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ marginTop: "10px", color: "#ffadad" }}>
          Something Went Wrong 😥!!
        </span>
      )}
    </div>
  );
}
