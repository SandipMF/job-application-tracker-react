import type React from "react";
import "./Login.css";
import { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      // const res = await axios.post(
      //   `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
      //   { email, password }
      // );
      // localStorage.setItem("token", res.data.token);
      // window.location.href = "/";
      console.log(email, password);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-div">
      <h2>Login</h2>

      <form className="login-form">
        <input
          type="email"
          placeholder="Username/Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/registration">Register</a>
      </p>
    </div>
  );
};

export default Login;
