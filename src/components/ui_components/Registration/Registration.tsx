import { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      console.log(name, email, password);
      //   await axios.post(
      //     `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
      //     { name, email, password }
      //   );
      //   alert("Registration successful! Please login.");

      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="reg-div">
      <h2>Registration</h2>

      <form className="reg-form">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className="reg-btn" onClick={handleRegister}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Registration;
